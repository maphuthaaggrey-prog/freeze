import { useState, useEffect } from "react";
import gitHub from '../images/icons8-facebook-60.png'
import gMail from '../images/icons8-gmail (1) 1.png'
import whatsapp from '../images/icons8-whatsapp-60.png'

const Footer = () => {

    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
      const timer = setInterval(() => {
        const now = new Date();
        const year = now.getFullYear();
        setCurrentTime(`${year} - `);
      }, 1000); 
  
      return () => clearInterval(timer); 
    }, []);
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [sendMsg, setSendMsg] = useState(""); // State for success/error message
  const [errors, setErrors] = useState({}); // State for form validation errors

  const contactScriptURL =
    "https://script.google.com/macros/s/AKfycbww0-ZOxv9syxqIHJx5EhpAn-dShkQix4AtL7oaSyIBUc3TRddG5F2vMqNVJCxhslxKjw/exec"; // Replace with your deployed web app URL

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(e.target);
    const firstName = formData.get("first-name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    // Validation
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = "Name is required!";
    if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/))
      newErrors.email = "Valid email is required!";
    if (!phone.match(/^[0-9]{10}$/))
      newErrors.phone = "A valid 10-digit phone number is required.";
    if (!message.trim()) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set validation errors
      return; // Stop submission if there are errors
    }

    setLoading(true); // Set loading state
    setErrors({}); // Clear previous errors

    try {
      const response = await fetch(contactScriptURL, {
        method: "POST",
        body: new URLSearchParams(formData), 
      });

      if (response.ok) {
        setSendMsg("Thank You For Contacting Us!"); 
        e.target.reset();
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Error!", error.message);
      setSendMsg("Thank You For Contacting Us!"); 
      e.target.reset();
    } finally {
      setLoading(false); 
      setTimeout(() => setSendMsg(""), 5000);
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-cont" id="footer-cont">
          <form
            name="message-to-google-sheet"
            onSubmit={handleSubmit}
            action={contactScriptURL}
            method="POST"
          >
            <div className="head-footer" style={{display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
            <p className="send-message">SEND MESSAGE</p>

            </div>
            <p className="sub-text">Whether you need a new logo, eye-catching posters, or a full brand design, I'm ready to bring your ideas to life!</p>
            <fieldset>
               <div className="name-and-phone"> 
              <label htmlFor="first-name">
                Your Name:
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  placeholder="Name"
                />
                {errors.firstName && (
                  <p className="error-message">{errors.firstName}</p>
                )}
              </label>

              {/* Phone Field */}
              <label htmlFor="phone">
                Phone Number:
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                />
                {errors.phone && (
                  <p className="error-message">{errors.phone}</p>
                )}
              </label>
              </div>
            {/* Email Field */}
            <label htmlFor="email">
                Email Address:
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
              </label>

              {/* Message Field */}
              <label htmlFor="message">
                Message:
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  cols="10"
                  placeholder="Type here..."
                />
                {errors.message && (
                  <p className="error-message">{errors.message}</p>
                )}
              </label>
            </fieldset>

            <input
              type="submit"
              value={loading ? "Submitting..." : "Submit"}
              name="send-message"
              className="submit-btn"
              disabled={loading}
            />
          </form>


          {sendMsg && <p className="send-msg">{sendMsg}</p>}
          <div className="social-icons">
                       <a href="https://www.facebook.com/freezelinett" target="_blank"><img src={gitHub} className='icon'/></a>
                       <a href="mailto:maphuthangwato1@gmail.com"><img src={gMail} className='icon'/></a>
                       <a href="https://wa.link/ctv5dv" target="_blank"><img src={whatsapp} className='icon'/></a>
                    </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentTime} Freeze Linett. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
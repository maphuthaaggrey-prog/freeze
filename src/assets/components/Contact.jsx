import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactComponent = () => {
    const [loading, setLoading] = useState(false);
    const [sendMsg, setSendMsg] = useState("");
    const [errors, setErrors] = useState({});

    const contactScriptURL =
        "https://script.google.com/macros/s/AKfycbxliASTLxM9LVwXMQfc7yV0llY5C2VZHV9pV2052tPBm-ajFdTbe8cFqAMz_s2zDnvT/exec"; 

    const handleSubmit = async (e) => {
        e.preventDefault();

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
            setErrors(newErrors);
            return;
        }

        setLoading(true);
        setErrors({});

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

    const handleGoBack = () => {
        window.history.back(); // Navigate to the previous page
    };

    return (
        <main id="song-wrap">
            <div className="navbar">
                <a href="#close" className="back" id="back-button" onClick={handleGoBack}>
                    <i className="fa-solid fa-arrow-left"></i>
                </a>
                <i>
                </i>
            </div>
            
            <div className="footer-cont" id="footer-cont">
                <form
                    className="footer"
                    onSubmit={handleSubmit}
                    action={contactScriptURL}
                    name="message-to-google-sheet"
                    method="POST"
                >
                    <h1>Contact Us</h1>
                    <p className="send-message">We’d love to help you, please do get in touch.</p>
                    <a href="mailto:maphuthangwato1@gmail.com" className='emailadr'>
                    <svg fill="#ffffff" height="27px" width="27px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 216 216" xml:space="preserve">
                    <path d="M108,0C48.353,0,0,48.353,0,108s48.353,108,108,108s108-48.353,108-108S167.647,0,108,0z M156.657,60L107.96,98.498
                        L57.679,60H156.657z M161.667,156h-109V76.259l50.244,38.11c1.347,1.03,3.34,1.545,4.947,1.545c1.645,0,3.073-0.54,4.435-1.616
                        l49.374-39.276V156z"/>
                    </svg>
                        
                        maphuthangwato1@gmail.com</a>
                    <fieldset>
                        <label htmlFor="first-name">
                            Enter Your Name:
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                placeholder="Enter name"
                            />
                            {errors.firstName && (
                                <p className="error-message">{errors.firstName}</p>
                            )}
                        </label>

                        <label htmlFor="email">
                            Enter Your Email:
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter email"
                            />
                            {errors.email && (
                                <p className="error-message">{errors.email}</p>
                            )}
                        </label>

                        <label htmlFor="phone">
                            Enter Phone Number:
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="0765216787"
                            />
                            {errors.phone && (
                                <p className="error-message">{errors.phone}</p>
                            )}
                        </label>

                        <label htmlFor="message">
                            Message:
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                cols="10"
                                placeholder="Your Enquiry"
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
                    {sendMsg && <p style={{marginTop: '1em', color: 'green', fontWeight: '500'}} className="send-msg">{sendMsg}</p>}
                    <p style={{ color: 'rgb(24, 117, 24)', marginTop: '10px', fontWeight: '600' }} id="sendmsg"></p>
                </form>
            </div>
            
         
        </main>
    );
};

export default ContactComponent;
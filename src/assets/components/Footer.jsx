import { Link } from 'react-router-dom'
import Logo from '../images/RESPECT MY HUSTLE CIRCLE.png'
import { useState, useEffect } from "react";
const Footer = () => {

    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
      const timer = setInterval(() => {
        const now = new Date();
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        setCurrentTime(`${year} - ${hours}:${minutes}:${seconds}`);
      }, 1000); 
  
      return () => clearInterval(timer); 
    }, []);
    return ( <footer>
        

      
        <div className="wrapping">
        <div>
                    <Link to="/"><img className='footerlogo' src={Logo}></img></Link>
                    <p className='footertext'>I create custom illustrations, brand identities, and logos that reflect your story. Whether you're an artist or a business, your vision deserves bold, original design.</p>
                </div>
            <section>
            <h1>Get in touch!</h1>
                    <a href="mailto:maphuthangwato1@gmail.com" className="card005">
                        <div className="icon">
                        <svg fill="#ffffff"  viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>gmail</title>
<path d="M30.996 7.824v17.381c0 0 0 0 0 0.001 0 1.129-0.915 2.044-2.044 2.044-0 0-0 0-0.001 0h-4.772v-11.587l-8.179 6.136-8.179-6.136v11.588h-4.772c0 0 0 0-0 0-1.129 0-2.044-0.915-2.044-2.044 0-0 0-0.001 0-0.001v0-17.381c0-0 0-0.001 0-0.001 0-1.694 1.373-3.067 3.067-3.067 0.694 0 1.334 0.231 1.848 0.619l-0.008-0.006 10.088 7.567 10.088-7.567c0.506-0.383 1.146-0.613 1.84-0.613 1.694 0 3.067 1.373 3.067 3.067v0z"></path>
</svg>
                        </div>
                          <div className="details">
                            <p>Email Address</p>
                            <p>maphuthangwato1@gmail.com</p>
                          </div>
                    </a>
                    <a href="tel:+27 76 521 6987" className="card005">
                          <div className="icon">
                              <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WhatsAppIcon"><path fill="currentColor" d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path></svg>
                          </div>
                          <div className="details">
                                  <p>Phone - Whatsapp</p>
                                  <p>+27 72 096 8521</p>
                          </div>
                    </a>
                    <a href="https://www.google.com/maps/place/Maphutha+Street,+Ga-Masemola/@-24.5498581,29.6402589,77m/data=!3m1!1e3!4m6!3m5!1s0x1ec11030466df9b7:0x856e93c42983cef!8m2!3d-24.5497167!4d29.6404416!16s%2Fg%2F11svx0v5wk?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank" className="card005">
                          <div className="icon">
                              <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
                          </div>
                          <div className="details">
                                <p>Physical Address</p>
                                <p>Pretoria, South Africa</p>
                          </div>
                    </a>
          </section>
          <div className="explore">
                <h1>Links</h1>
                <p><Link to="/designs">Designs</Link></p>
                <p><Link to="/music">Music</Link></p>
                <p><Link to="/about">Respect My Hustle</Link></p>
                <p><Link to="/contact">Contact Us</Link></p>
            </div>

        </div>
        <div className="copyright">
            <p>Created By Aaven Agency</p>
            </div>
    
    </footer> );
}
 
export default Footer;
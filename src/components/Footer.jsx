// Footer.js
import React from 'react';
import './styles/footer.css'; // Import the CSS for the footer
import cleverprologo from "../../public/assets/cleverprologo.png"
const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a onClick={() => props.scrolltosection(props.about)}>About</a></li>
                        <li><a onClick={() => props.scrolltosection(props.services)}>Services</a></li>
                       <li><a onClick={() => props.scrolltosection(props.projects)}>Projects</a></li>
                        <li><a onClick={() => props.scrolltosection(props.contact)}>Contact</a></li>
                                        
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Follow Us</h2>
                    <div className="social-media">
                        <a href="https://www.facebook.com/cleverprocess/?paipv=0&eav=AfaX-91IhDkb7CH2Fu7Tg7hToWgZkdDzup-D9bjO7PhEQB5U2HBonD3TNhzjfCVh2O0&_rdr" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.linkedin.com/company/clever-pro/?originalSubdomain=ma" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="footer-section">
                    <img src={cleverprologo} draggable="false"/>
                    <h2><span style={{color:"#008080"}}>Contact Us At :</span> contact@clever-pro.net</h2>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 CleverPro. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

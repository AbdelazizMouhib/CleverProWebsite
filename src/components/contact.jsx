import React, { useState } from "react";
import emailjs from "emailjs-com"; // Ensure you have this package installed
import "./styles/contact.css";

const ContactForm = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "", // New subject field
    message: ""
  });
  const [messageSent, setMessageSent] = useState(false); // State for message sent confirmation
  const [loading, setLoading] = useState(false); // State for loading indicator

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setLoading(true); // Show loading indicator

    // Send the email
    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_USER_ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setMessageSent(true); // Show message sent confirmation
      // Reset the form
      setFormData({
        name: "",
        email: "",
        subject: "", // Reset subject
        message: ""
      });
      setLoading(false); // Hide loading indicator
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setLoading(false); // Hide loading indicator in case of error
    });
  };

  // Function to handle message box close
  const handleCloseMessage = () => {
    setMessageSent(false);
  };

  return (
    <section ref={contact}>
      <div className="contact-section">
        <div className="contact-form-container">
          <h2>Contact Us</h2>
          {messageSent && (
            <div className="message-sent">
              <p>Your message has been sent successfully!</p>
              <button onClick={handleCloseMessage}>Close</button>
            </div>
          )}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              {loading ? (
                <span>Loading...</span> // Display loading text or icon
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3406.5435791453842!2d-7.918180924394401!3d31.371571974282418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDIyJzE3LjciTiA3wrA1NCc1Ni4yIlc!5e0!3m2!1sen!2sma!4v1727189703934!5m2!1sen!2sma" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

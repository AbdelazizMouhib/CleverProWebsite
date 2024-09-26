import React, { useEffect } from 'react';
import './styles/header.css'; // Ensure your CSS file is imported

const Header = ({top}) => {
  useEffect(() => {
    const headerText = document.querySelector('.header-section h2');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          headerText.classList.add('animate'); // Add animate class when in view
        } else {
          headerText.classList.remove('animate'); // Optional: remove class when out of view
        }
      });
    });

    observer.observe(headerText);

    return () => {
      observer.disconnect(); // Clean up the observer
    };
  }, []);

  return (
    <section className='header-section' ref={top}>
      <div className='headertext-container'>
        <h2>Welcome to Our World</h2>
      </div>
    </section>
  );
};

export default Header;

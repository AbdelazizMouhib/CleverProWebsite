import React, { useState } from 'react';
import './styles/navbar.css';
import cleverprologo from '../../public/assets/cleverprologo.png';

const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='logo-container'>
        <img src={cleverprologo} draggable="false" alt="CleverPro Logo" />
      </div>

      <div className={`links-container ${menuOpen ? 'active' : ''}`}>
        <a onClick={() => props.scrolltosection(props.top)}>Home</a>
        <a onClick={() => props.scrolltosection(props.about)}>About</a>
        <a onClick={() => props.scrolltosection(props.services)}>Services</a>
        <a onClick={() => props.scrolltosection(props.projects)}>Projects</a>
        <a onClick={() => props.scrolltosection(props.contact)}>Contact</a>
      </div>

      <div className="hamburger-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;

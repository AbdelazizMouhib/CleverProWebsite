// MoreService.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from './service.js'; // Import service data
import TeamSlider from './Team.jsx'; // Import TeamSlider component
import './styles/moreservice.css';

const MoreService = () => {
  const { serviceName } = useParams(); // Get the service name from the URL
  const navigate = useNavigate(); // Hook for navigation
  const service = services.find(s => s.name === serviceName); // Find the matching service

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <section className='service-details'>
      <div className='image-container'>
        <img src={service.Moreimage} alt={service.title} className='service-image' />
        {/* Back Button */}
        <button className='back-button' onClick={() => navigate('/')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M12 2L10.59 3.41 17.17 10H1v2h16.17l-6.58 6.59L12 22l10-10z"/>
          </svg>
        </button>
      </div>
      <div className='details-container'>
        <h2>{service.title}</h2>
      </div>
      <p className='service-description'>&emsp;{service.description}</p>

      {/* Render the team slider with the team of the current service */}
      <TeamSlider teamMembers={service.team} />
    </section>
  );
};

export default MoreService;

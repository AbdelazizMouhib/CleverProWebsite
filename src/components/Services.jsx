import React from 'react';
import { Link } from 'react-router-dom';
import { services } from './service.js';
import './styles/services.css'
const ServicesPage = ({serv}) => {
  return (
    <section className='services-section' ref={serv}>
        <div className='services-container'>
          <h2 className='services-title'>Services</h2>
        <div className='services-cards'>
      {services.map(service => (
        <div key={service.id} className='service-card'>
          <img src={service.image}/>
          <h2>{service.title}</h2>
          <Link to={`/service/${service.name}`}>
            <button>Read More</button>
          </Link>
        </div>
      ))}
      </div>
      </div>
    </section>
  );
};

export default ServicesPage;

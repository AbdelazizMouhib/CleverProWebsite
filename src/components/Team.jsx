// TeamSlider.js
import React, { useEffect, useState } from 'react';
import './styles/team.css';

const getInitials = (name) => {
    return name.split(' ').map((n) => n[0]).join('');
};

const TeamSlider = ({ teamMembers }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className='team-section'>
            <h2 className='team-section-title'>Meet Our Team</h2>
            <div className='team-slider-container'>
                <button className='team-slider-prev-button' onClick={prevSlide}>&#10094;</button>
                <div className='team-slider-wrapper' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {teamMembers.map((member) => (
                        <div className='team-slider-slide' key={member.id}>
                            {member.image ? (
                                <img src={member.image} alt={member.name} className='team-slider-member-image' />
                            ) : (
                                <div className='team-slider-avatar'>
                                    {getInitials(member.name)}
                                </div>
                            )}
                            <h3 className='team-slider-member-name'>{member.name}</h3>
                            <p className='team-slider-member-position'>{member.position}</p>
                        </div>
                    ))}
                </div>
                <button className='team-slider-next-button' onClick={nextSlide}>&#10095;</button>
            </div>
        </section>
    );
};

export default TeamSlider;

import React, { useEffect, useRef, useState } from 'react';
import './styles/projectSection.css';

const ProjectSection = ({projet}) => {
    const projects = [
        {
            id: 1,
            title: 'MeX',
            description: 'Marrakech Explorer is an innovative application that personalizes travel itineraries using artificial intelligence to provide users with a unique and immersive experience.   ',
            image: '../../public/assets/aiapp.jpeg',
        },
        {
            id: 2,
            title: 'Clever AI Marketing',
            description: 'This project has the potential to transform the digital marketing landscape by offering innovative and effective solutions through AI. By combining automation, personalization, and continuous training, the platform can meet the growing needs of businesses and marketing professionals.',
            image: '../../public/assets/platformformation.jpeg',
        },
   
    ];

    const sectionRef = projet
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true); // Trigger the animation when section is visible
                        observer.unobserve(entry.target); // Stop observing once triggered
                    }
                });
            },
            { threshold: 0.3 } // 30% of the section has to be in view to trigger animation
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section 
            ref={sectionRef} 
            className={`projects-section ${isVisible ? 'visible' : ''}`} // Apply 'visible' class when in view
        >
            <h2 className='projects-section-title'>Coming Soon</h2>
            {projects.map((project, index) => (
                <div 
                    key={project.id}
                    className={`project-item ${index % 2 === 0 ? 'image-right' : 'image-left'}`}
                    style={{ '--delay': index }} // Custom delay per item
                >
                    <div className="project-text">
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                    </div>
                    <div className="project-image">
                        <img src={project.image} alt={project.title} />
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ProjectSection;

import React from 'react'
import aboutimg from "../../public/assets/5078a05eb1b6847d93383eaa4c0ed500-ezgif.com-gif-maker.gif"
import './styles/aboutus.css'
const About = ({about}) => {
  return (
    <section className='aboutus-section' ref={about}>
        <div className='aboutusimg-container'>
           <img src={aboutimg} draggable="false"/>
        </div>
        <div className='aboutustext-container'>
            <h2>About Us</h2>
            <h3>Clever Pro, founded by Abdelaziz Mouhib, is a versatile Moroccan company specializing in IT and renewable energy solutions, application development, AI technology, and digital marketing. The company excels in integrating cutting-edge IT with sustainable energy projects, creating custom software solutions like the AI-powered Marrakech Explorer for personalized travel experiences, and offering comprehensive digital marketing strategies to enhance online presence. Committed to innovation and sustainability, Clever Pro aims to drive growth and contribute to a greener future through its diverse range of services.</h3>
        </div>
    </section>
  )
}

export default About
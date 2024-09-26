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
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nulla nihil dolor recusandae quidem sint exercitationem natus fugiat! Voluptate molestiae minima aliquid eos possimus nisi maxime excepturi, velit consequuntur temporibus?</h3>
        </div>
    </section>
  )
}

export default About
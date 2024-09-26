import React from 'react'
import Navbar from "./Navbar"

import Header from "./Header"
import About from "./About"

import Services from "./Services"
import { useRef } from "react"
import Footer from "./Footer"

import ContactForm from "./contact"

import ProjectSection from './ProjectSection'
const Homepage = () => {
    const top = useRef(null)
  const about = useRef(null)
  const services = useRef(null)
  const contact = useRef(null)
  const projects = useRef(null)
  const scrolltosection = (section) => {
      window.scrollTo({
          top: section.current.offsetTop,
          behavior: "smooth"

      })
  }

  return (
    <>
      <Navbar about={about} services={services} contact={contact} projects={projects} top={top}  scrolltosection={scrolltosection} />
       <Header top={top} scrolltosection={scrolltosection}/>
       <About about={about} scrolltosection={scrolltosection}/>
       <Services serv={services} scrolltosection={scrolltosection}/>
       <ProjectSection projet={projects} scrolltosection={scrolltosection}/>
       <ContactForm contact={contact} scrolltosection={scrolltosection}/>
       <Footer about={about} services={services} contact={contact} projects={projects}  scrolltosection={scrolltosection}/>

    </>
  )
}

export default Homepage
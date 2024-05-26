import React from 'react'
import Navbar from "../../MainComponents/Navbar"
import Footer from '../../MainComponents/Footer'
import LogoHeading from '../../Pages/LogoHeading'
import ContactForm from './ContactForm'

const MainContact = () => {
  return (
    <div>
        <Navbar/>
       
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default MainContact
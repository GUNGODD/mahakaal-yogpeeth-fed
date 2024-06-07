import React from 'react'
import Navbar from "../../MainComponents/Navbar"
import Footer from '../../MainComponents/Footer'
import LogoHeading from '../../Pages/LogoHeading'
// import ContactForm from './ContactForm'
import RetreatForm from '../../Design/RetreatForm'

const MainContact = () => {
  return (
    <div>
      
        <Navbar/>
        
        <div className='mt-10'>
          {/* <LogoHeading heading={"Contact Us"}/> */}
        <RetreatForm/>
        </div>
        <Footer/>
    </div>
  )
}

export default MainContact
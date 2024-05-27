import React from 'react'
import Navbar from '../../MainComponents/Navbar'
import AiCard from '../Gallery/AiCard'
import Footer from '../../MainComponents/Footer'
import { HeroImage } from '../AboutUs/MainAbout'
import LogoHeading from '../../Pages/LogoHeading'

const YogaRetreat3 = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage wallpaper={"https://upload.wikimedia.org/wikipedia/commons/7/75/Rishikesh-Lakshman_Jhula_by_Kaustubh_Nayyar.jpg"} Heading={"This is Heading"}/>
        <LogoHeading heading={"3 Days Yoga Retreat in Rishikesh Overview"}/>
        <Footer/>
    </div>
  ) 
}

export default YogaRetreat3
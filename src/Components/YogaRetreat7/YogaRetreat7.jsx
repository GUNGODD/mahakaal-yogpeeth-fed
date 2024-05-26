import React from 'react'
import Navbar from '../../MainComponents/Navbar'
import AiCard from '../Gallery/AiCard'
import Footer from '../../MainComponents/Footer'
import { HeroImage } from '../AboutUs/MainAbout'

const YogaRetreat7 = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage wallpaper={"https://upload.wikimedia.org/wikipedia/commons/7/75/Rishikesh-Lakshman_Jhula_by_Kaustubh_Nayyar.jpg"} Heading={"This is Heading"}/>
        <Footer/>
    </div>
  )
}

export default YogaRetreat7
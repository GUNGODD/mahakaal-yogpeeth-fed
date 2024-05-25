import React from 'react'
import Navbar from '../../MainComponents/Navbar'
import PriceGrid from '../../Pages/Parts/PriceGrid'
import Footer from '../../MainComponents/Footer'
import LogoHeading from '../../Pages/LogoHeading'
import { Hero } from '../../Pages/Parts/Hero'

const MainYoga300 = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className='mt-28'>
        <LogoHeading heading="Upcoming classes"/>
        </div>
        <PriceGrid/>
        <Footer/>
    </div>
  )
}

export default MainYoga300;
import React from 'react'
import Navbar from '../../MainComponents/Navbar'
import PriceGrid from '../../Pages/Parts/PriceGrid'
import Footer from '../../MainComponents/Footer'
import LogoHeading from '../../Pages/LogoHeading'

const MainYoga = () => {
  return (
    <div>
        <Navbar/>
        <div className='mt-28'>
        <LogoHeading heading="Upcoming classes"/>
        </div>
        <PriceGrid/>
        <Footer/>
    </div>
  )
}

export default MainYoga
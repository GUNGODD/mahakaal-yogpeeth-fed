import React from 'react'
import Navbar from './MainComponents/Navbar'
import Slider from './Design/Slider'
import Header from './MainComponents/Header'
import MovingCards from './MainComponents/MovingCards'
import GlimpseHead from './MainComponents/GlimpseHead'

const Final = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Header/>
        <GlimpseHead/>
        <MovingCards/>
    </div>
  )
}

export default Final
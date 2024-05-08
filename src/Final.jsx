import React from "react";
import Navbar from "./MainComponents/Navbar";
import Slider from "./Design/Slider";
import Header from "./MainComponents/Header";
import MovingCards from "./MainComponents/MovingCards";
import GlimpseHead from "./MainComponents/GlimpseHead";
import ShuffleHero from "./Design/SuffleHero";
import { TextParallaxContentExample } from "./Design/TextParallaxContent";
import { HoverImageLinks } from "./Design/HoverImageLink";
import { RevealBento } from "./Design/About";
import Footer from "./MainComponents/Footer";
import {TDmobile} from "./Design/TDmobile"


const Final = () => {
  return (
    <div>
      <Navbar />
      
      <ShuffleHero />
      <TDmobile/>
      
      <TextParallaxContentExample />
      
      {/* <TextParallaxContentExample /> */}
      <HoverImageLinks />
      <MovingCards />
      {/* <RevealBento /> */}
      <Footer />
{/*      
      <Slider /> */}
      {/* <Header />
      <GlimpseHead /> */}
      

    
    </div>
  );
};

export default Final;

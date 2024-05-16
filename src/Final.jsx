import React from "react";
import Navbar from "./MainComponents/Navbar";
import MovingCards from "./MainComponents/MovingCards";
import ShuffleHero from "./Design/SuffleHero";
import { TextParallaxContentExample } from "./Design/TextParallaxContent";
import { HoverImageLinks } from "./Design/HoverImageLink";
import Footer from "./MainComponents/Footer";
import { TDmobile } from "./Design/TDmobile";
import ImageGallery from "./Design/ImageGallery";
import { YogaCards } from "./Pages/Parts/YogaTTC";
import ImgContent, { ImgContentMid } from "./Pages/Parts/ImgContent";

const Final = () => (
  <div>
    <Navbar />
    <ShuffleHero />
    <TDmobile />
    {/*   // <TextParallaxContentExample /> */}
    {/* <TextParallaxContentExample /> */}
    <ImgContent/>
    <ImgContentMid/>
    <ImgContent/>
    <MovingCards />
    
    {/* <YogaCards /> */}
    {/* <ImageGallery /> */}
    {/* <ShiftingCountdown/> */}
    {/* <RevealBento /> */}
    <HoverImageLinks />
    <Footer />
    {/*
        <Slider /> */}
    {/* <Header />
        <GlimpseHead /> */}
  </div>
);

export default Final;

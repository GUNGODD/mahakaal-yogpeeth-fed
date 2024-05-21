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
import ImgContent, { Content, ImgContentMid } from "./Pages/Parts/ImgContent";
import Cards from "./Pages/Parts/Cards";
import Testimonials from "./Pages/Parts/Testimonials";
import WithSpeechBubbles from "./Pages/Parts/Testimonials";
import FAQ from "./Pages/Parts/FAQ";


const Final = () => (
  <div>
    <Navbar />
    <ShuffleHero />
    <TDmobile />
    {/*   // <TextParallaxContentExample /> */}
    {/* <TextParallaxContentExample /> */}
    <Content/>
    <MovingCards />
    <Cards/>
    {/* <Testimonials/> */}
    
    {/* <YogaCards /> */}
    {/* <ImageGallery /> */}
    {/* <ShiftingCountdown/> */}
    {/* <RevealBento /> */}
    {/* <WithSpeechBubbles/> */}
    <FAQ/>
    <HoverImageLinks />
    <Footer />
    {/*
        <Slider /> */}
    {/* <Header />
        <GlimpseHead /> */}
  </div>
);

export default Final;

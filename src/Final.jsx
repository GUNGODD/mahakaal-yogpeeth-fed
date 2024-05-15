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

const Final = () => {
  return (
    <div>
      <Navbar />
      <ShuffleHero />
      <TDmobile />
      {/*   // <TextParallaxContentExample /> */}
      {/* <TextParallaxContentExample /> */}
      <HoverImageLinks />
      <MovingCards />
      <YogaCards />
      <ImageGallery />
      {/* <ShiftingCountdown/> */}
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

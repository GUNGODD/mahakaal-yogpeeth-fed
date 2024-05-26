import React from "react";
import Navbar from "./MainComponents/Navbar";
import MovingCards from "./MainComponents/MovingCards";
import ShuffleHero from "./Design/SuffleHero";

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
import ContentArea from "./Pages/Parts/ContentArea";
import TextArea from "./Pages/Parts/TextArea";
import RunningCards from "./Pages/Parts/RunningCards";
import Blogs from "./Pages/Parts/Blogs";
import Features from "./Pages/Parts/Features";
import ImgScroll from "./Pages/Parts/ImgScroll";
import Form from "./Design/Form";
import InfScroll from "./Pages/Parts/InfScroll";
import Pricing from "./MainComponents/Pricing";
import LogoHeading from "./Pages/LogoHeading";


// import ImgScroll from "./Pages/Parts/ImgScroll"



const Final = () => (
  <div>
    <defs>
      <pattern
        id="e813992c-7d03-4cc4-a2bd-151760b470a0"
        width={700}
        height={700}
        x="50%"
        y={-1}
        patternUnits="userSpaceOnUse"
      >
        <path d="M100 200V.5M.5 .5H200" fill="none" />
      </pattern>
    </defs>
    <Navbar />
 
    <ShuffleHero />
    <TDmobile />
    <TextArea />
    <ContentArea />
    <Content />
    {/* <MovingCards /> */}
    <RunningCards />
    {/* <ImgScroll/> */}
    {/* <ImgScroll/> */}
    

    <Features />
    <LogoHeading heading={"PRICING FOR YOGA TTC"}/>
    <Pricing/>
   
    <FAQ />
    <HoverImageLinks />
    <InfScroll/>
    <Blogs />
      
    <Footer />
    {/*
        <Slider /> */}
    {/* <Header />
        <GlimpseHead /> */}
  </div>
);

export default Final;

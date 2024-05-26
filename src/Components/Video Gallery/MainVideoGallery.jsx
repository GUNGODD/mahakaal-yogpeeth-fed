import React from "react";
import Navbar from "../../MainComponents/Navbar";
import AiCard from "../Gallery/AiCard";
import Footer from "../../MainComponents/Footer";
import FullGallery from "./GridGallery";

const MainVideoGallery = () => {
  return (
    <div>
      <Navbar />
      <AiCard title={"This is Video Gallery"} />
      <FullGallery/>
      <Footer />
    </div>
  );
};

export default MainVideoGallery;


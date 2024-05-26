import React from "react";
import Navbar from "../../MainComponents/Navbar";
import AiCard from "../Gallery/AiCard";
import Footer from "../../MainComponents/Footer";

const MainVideoGallery = () => {
  return (
    <div>
      <Navbar />
      <AiCard title={"This is Video Gallery"} />
      <Footer />
    </div>
  );
};

export default MainVideoGallery;


import Footer from "../../MainComponents/Footer";
import Navbar from "../../MainComponents/Navbar";
import ImgScroll from "../../Pages/Parts/ImgScroll";
import AiCard from "./AiCard";
import GridGallery from "./GridGallery";

import HeroSlider from "./HeroSlider";


export default function MainGallery() {
  return (
    <>
      <Navbar />

      {/* <HeroSlider /> */}
<AiCard/>
<ImgScroll/>
      {/* <GridGallery /> */}
      


      <Footer />
    </>
  );
}

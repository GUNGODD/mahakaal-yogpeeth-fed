import Footer from "../../MainComponents/Footer";
import Navbar from "../../MainComponents/Navbar";
import GallerySection from "../../Pages/Parts/GallerySection";
import ImgScroll from "../../Pages/Parts/ImgScroll";
import AiCard from "./AiCard";


export default function MainGallery() {
  return (
    <>
      <Navbar />
      <AiCard title="This is Gallery"/>
      <ImgScroll/>
      <GallerySection/>
      <GallerySection/>

      <Footer />
    </>
  );
}

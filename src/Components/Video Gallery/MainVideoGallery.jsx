import Navbar from "../../MainComponents/Navbar";
import AiCard from "../Gallery/AiCard";
import Footer from "../../MainComponents/Footer";
import FullGallery from "./GridGallery";
import WhatsappButton from "../Contact/WhatsappButton";

const MainVideoGallery = () => {
  return (
    <div>
      <Navbar />
      <AiCard title={"This is Video Gallery"} />
      <FullGallery />
      <WhatsappButton/>
      <Footer />
    </div>
  );
};

export default MainVideoGallery;

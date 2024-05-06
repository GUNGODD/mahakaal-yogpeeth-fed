import Slider from "./Design/Slider";
import Header from "./MainComponents/Header";
import MovingCards from "./MainComponents/MovingCards";
import Navbar from "./MainComponents/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      
      <Slider />
      <Header/>
      <MovingCards/>
    </>
  );
}

import Navbar from "../../MainComponents/Navbar";
import { OnePagerSection, TeachersTestimonials, TypewriterHeading } from "./MainAbout";
import LogoHeading from "../../Pages/LogoHeading";
import Content from "./TextArea";
import FAQSection from "../../Pages/Parts/FAQ";
import Footer from "../../MainComponents/Footer";
import { Typewriter } from "react-simple-typewriter";
const OurTeacher = () => {
  return (
    <>






      <div className="gap-4 flex flex-col">
        <div className="m-12">
          <Navbar />
        </div>
        <LogoHeading heading={"THIS IS HEADING"} />
        <div className="mt-28">
          <LogoHeading heading="Upcoming classes" />
        </div>


        <Content />
        <OnePagerSection />
        <TeachersTestimonials />
        <FAQSection />
        <Footer />
      </div>










      <div className=" bg-pink-300 text-3xl m-4 p-4">
        <h1 className="text-3xl font-bold tracking-tighter text-center text-gray-900 sm:text-4xl lg:text-5xl text-balance">
          Our Teachers
        </h1>
        <p className="mt-4 text-sm font-medium text-gray-500 sm:text text-base lg:text-lg text-balance">
          Mira Yogashala is so much more than just a yoga school in Rishikesh.
          It is a place that gives you a real feel of Home away from home and
          where you will find your long-lost family. We are committed to share
          and spread the awareness of our Yoga lineage, proceeding to motivate
          and develop yoga practitioners everywhere in the world. Having a dream
          of the present and keep moving to the shapeless goal is the prime
          maxim of this Yoga teacher training school in Rishikesh.
        </p>
      </div>

    </>

  )
}

export default OurTeacher;



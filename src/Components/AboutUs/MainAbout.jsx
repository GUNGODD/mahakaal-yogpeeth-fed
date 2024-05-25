import TypewriterComponent from "typewriter-effect"
import Footer from "../../MainComponents/Footer"
import Navbar from "../../MainComponents/Navbar"
import { motion } from "framer-motion";
import { FaChalkboardTeacher } from 'react-icons/fa';
import Content from "./TextArea"
import LogoHeading from "../../Pages/LogoHeading";
export const MainAbout = () => {
  return (


    <>
      <div className="gap-4 flex flex-col">


        <div className="m-12">


          <Navbar />
        </div>
        <LogoHeading heading={"THIS IS HEADING"} />
        <Content />
        <FeaturesSection />

        <AboutPage />
        <Footer />

      </div>

    </>

  )
}


function FeaturesSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto p-4 bg-white"
    >
      <div className="mt-4 m-2 p-4 mb-4 bg-white rounded-lg shadow-lg">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <img
            className="w-full h-72 object-cover rounded-lg"
            src="https://t4.ftcdn.net/jpg/06/91/06/33/360_F_691063382_SOlKzFI1anx1BGkDxOAAIPiFDQF32tzG.jpg"
            alt="Yoga"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-xs md:text-6xl font-bold m-8 text-black"
        >
          <TypewriterComponent
            options={{
              strings: ['Rishikesh | Your Dream Destination for Yoga! '],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center leading-8 overflow-wrap indent-8 text-gray-800"
        >
          Mira Yogashala is so much more than just a yoga school in Rishikesh. It is a place that gives you a real feel of Home away from home and where you will find your long-lost family. We are committed to share and spread the awareness of our Yoga lineage, proceeding to motivate and develop yoga practitioners everywhere in the world. Having a dream of the present and keep moving to the shapeless goal is the prime maxim of this Yoga teacher training school in Rishikesh.
          <br /><br />
          We at Mira Yogashala do not hoard our knowledge gained from our gurus, but believe in spreading it to everyone, which will surely benefit the lives of people. Our yoga certification Courses are designed and formed with this in mind as it will provide the students a deep knowledge of yoga and its philosophies. The YTT certification program is customized to provide Hatha Yoga and Ashtanga Vinyasa yoga that would help the students in learning yoga, improvement of their skills and become a certified yoga instructor. We are internationally certified Yogashala, registered with Yoga Alliance USA and holds global recognition. The optimum standards which means anyone can practice and impart the knowledge of yoga TTC courses across world-wide boundaries. Our Main Aim is to provide first-class yoga training to the practitioners and train well yoga teachers by improving their skills to next levels with the purpose of spreading the awareness and understanding of yoga to the world-wide. Our mission is to get rid of nervousness, depression, anxiety from the society as well. Furthermore, we try to focus on family problems and remedial personal by practicing a modest, accurate, and traditional form of multi-style yoga poses.
          <br /><br />
          Our yoga teacher and instructor certification training in Rishikesh, India will give you a chance to experience the serene location also known as the gateway of Himalayas. Located in Rishikesh, the yoga capital of the world, and nestled in the foothills of the Himalayas where the Ganga River flows, makes this a truly unique place to practice yoga.
          <br /><br />
          We at Mira Yogashala, are committed to educational yoga teaching standards around the world with our 200 Hour Yoga TTC, 300 Hour Yoga TTC and 500-hour yoga TTC programs in Rishikesh. Our Yoga TTC in Rishikesh isn’t just for aspiring yogis, but for anyone who wants to deepen their personal practice or skill and gain improvement in a better way of understanding of yoga philosophy and its origins. We deal with an ideal spiritual and healthy environment for Yoga teacher training.
          <br /><br />
          Whatever your reasons for embarking on this journey, we are here to guide you. You will explore the depth of yoga beyond the physical practice and learn about the origin of yoga, philosophy, anatomy, and so much more.
          <br /><br />
          Yoga Teacher Training is the beginning of a life-transforming journey Through yoga or a new chapter in your life. It is not the final objective or goal in your life, but a beautiful step towards life on the path of Yoga.
          <br /><br />
          When you leave Mira Yogashala, you will have expanded the range of your skills, deepened your knowledge, and gained more confidence in your teaching abilities.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-xs md:text-6xl font-bold text-black"
        >
          <TypewriterComponent
            options={{
              strings: ['Yoga School in Rishikesh - Mira Yogashala '],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full p-4 m-4 bg-gray-100 rounded-lg shadow-lg"
        >
          <div className="text-center mb-8 text-5xl text-black flex items-center justify-center gap-4">
            <FaChalkboardTeacher />
            <h1>Experienced Yoga Teachers Of Mira Yogshala</h1>
          </div>
          <p className="text-gray-800">
            Teacher is the one who shows the path to its Students. We are Glad to tell you that we have a great and experienced team of More than 10 yoga gurus (masters). Who are very well experienced, knowledgeable And Master About their Specific Yoga Subjects. We offer a friendly environment between our Yoga teachers and students so that learning becomes so easy with a fun and happy Atmosphere. All of our Teachers are registered yoga teachers, Mastered in yoga science & PhD with many years of yoga teaching experience in various countries around the world. Some are also gold medalists in their Specific Yoga Subjects. and come from the descent of the Traditional Himalayan yogis.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}


const AboutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mt-4 mb-4 p-4">
        <div className="w-full">
          <img
            className="w-full h-72 object-cover rounded-lg"
            src="https://t4.ftcdn.net/jpg/06/91/06/33/360_F_691063382_SOlKzFI1anx1BGkDxOAAIPiFDQF32tzG.jpg"
            alt="Yoga in Rishikesh"
          />
        </div>

        {/* Typewriter effect with heading */}
        <div className="text-center text-xs md:text-6xl font-bold m-8">
          <TypewriterComponent
            options={{
              strings: ['Rishikesh | Your Dream Destination for Yoga! '],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <p className="text-center leading-8 overflow-wrap indent-8 mb-8">
          Mira Yogashala is so much more than just a yoga school in Rishikesh. It is a place that gives you a real feel of Home away from home and where you will find your long-lost family. We are committed to share and spread the awareness of our Yoga lineage, proceeding to motivate and develop yoga practitioners everywhere in the world. Having a dream of the present and keep moving to the shapeless goal is the prime maxim of this Yoga teacher training school in Rishikesh.
          <br /><br />
          We at Mira Yogashala do not hoard our knowledge gained from our gurus, but believe in spreading it to everyone, which will surely benefit the lives of people. Our yoga certification Courses are designed and formed with this in mind as it will provide the students a deep knowledge of yoga and its philosophies. The YTT certification program is customized to provide Hatha Yoga and Ashtanga Vinyasa yoga that would help the students in learning yoga, improvement of their skills and become a certified yoga instructor. We are internationally certified Yogashala, registered with Yoga Alliance USA and holds global recognition. The optimum standards which means anyone can practice and impart the knowledge of yoga TTC courses across world-wide boundaries. Our Main Aim is to provide first-class yoga training to the practitioners and train well yoga teachers by improving their skills to next levels with the purpose of spreading the awareness and understanding of yoga to the world-wide. Our mission is to get rid of nervousness, depression, anxiety from the society as well. Furthermore, we try to focus on family problems and remedial personal by practicing a modest, accurate, and traditional form of multi-style yoga poses.
          <br /><br />
          Our yoga teacher and instructor certification training in Rishikesh, India will give you a chance to experience the serene location also known as the gateway of Himalayas. Located in Rishikesh, the yoga capital of the world, and nestled in the foothills of the Himalayas where the Ganga River flows, makes this a truly unique place to practice yoga.
          <br /><br />
          We at Mira Yogashala, are committed to educational yoga teaching standards around the world with our 200 Hour Yoga TTC, 300 Hour Yoga TTC and 500-hour yoga TTC programs in Rishikesh. Our Yoga TTC in Rishikesh isn’t just for aspiring yogis, but for anyone who wants to deepen their personal practice or skill and gain improvement in a better way of understanding of yoga philosophy and its origins. We deal with an ideal spiritual and healthy environment for Yoga teacher training.
          <br /><br />
          Whatever your reasons for embarking on this journey, we are here to guide you. You will explore the depth of yoga beyond the physical practice and learn about the origin of yoga, philosophy, anatomy, and so much more.
          <br /><br />
          Yoga Teacher Training is the beginning of a life-transforming journey Through yoga or a new chapter in your life. It is not the final objective or goal in your life, but a beautiful step towards life on the path of Yoga.
          <br /><br />
          When you leave Mira Yogashala, you will have expanded the range of your skills, deepened your knowledge, and gained more confidence in your teaching abilities.
        </p>

        <div className="text-center text-xs md:text-6xl font-bold mb-8">
          <TypewriterComponent
            options={{
              strings: ['Yoga School in Rishikesh - Mira Yogashala '],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <p className="text-center p-4 m-4">
          Mira Yogashala is so much more than just a yoga school in Rishikesh. It is a place that gives you a real feel of Home away from home and where you will find your long-lost family. We are committed to share and spread the awareness of our Yoga lineage, proceeding to motivate and develop yoga practitioners everywhere in the world. Having a dream of the present and keep moving to the shapeless goal is the prime maxim of this Yoga teacher training school in Rishikesh.
          <br /><br />
          We at Mira Yogashala do not hoard our knowledge gained from our gurus, but believe in spreading it to everyone, which will surely benefit the lives of people. Our yoga certification Courses are designed and formed with this in mind as it will provide the students a deep knowledge of yoga and its philosophies. The YTT certification program is customized to provide Hatha Yoga and Ashtanga Vinyasa yoga that would help the students in learning yoga, improvement of their skills and become a certified yoga instructor. We are internationally certified Yogashala, registered with Yoga Alliance USA and holds global recognition. The optimum standards which means anyone can practice and impart the knowledge of yoga TTC courses across world-wide boundaries. Our Main Aim is to provide first-class yoga training to the practitioners and train well yoga teachers by improving their skills to next levels with the purpose of spreading the awareness and understanding of yoga to the world-wide. Our mission is to get rid of nervousness, depression, anxiety from the society as well. Furthermore, we try to focus on family problems and remedial personal by practicing a modest, accurate, and traditional form of multi-style yoga poses.
          <br /><br />
          Our yoga teacher and instructor certification training in Rishikesh, India will give you a chance to experience the serene location also known as the gateway of Himalayas. Located in Rishikesh, the yoga capital of the world, and nestled in the foothills of the Himalayas where the Ganga River flows, makes this a truly unique place to practice yoga.
          <br /><br />
          We at Mira Yogashala, are committed to educational yoga teaching standards around the world with our 200 Hour Yoga TTC, 300 Hour Yoga TTC and 500-hour yoga TTC programs in Rishikesh. Our Yoga TTC in Rishikesh isn’t just for aspiring yogis, but for anyone who wants to deepen their personal practice or skill and gain improvement in a better way of understanding of yoga philosophy and its origins. We deal with an ideal spiritual and healthy environment for Yoga teacher training.
          <br /><br />
          Whatever your reasons for embarking on this journey, we are here to guide you. You will explore the depth of yoga beyond the physical practice and learn about the origin of yoga, philosophy, anatomy, and so much more.
          <br /><br />
          Yoga Teacher Training is the beginning of a life-transforming journey Through yoga or a new chapter in your life. It is not the final objective or goal in your life, but a beautiful step towards life on the path of Yoga.
          <br /><br />
          When you leave Mira Yogashala, you will have expanded the range of your skills, deepened your knowledge, and gained more confidence in your teaching abilities.
        </p>
      </div>

      {/* About Rishikesh heading */}
      <div className="w-full p-4 m-4 bg-green-300 rounded-lg">
        <div className="text-center mb-8 text-5xl">
          <h1>Experienced Yoga Teachers Of Mira Yogshala</h1>
        </div>
        <div>
          <p>
            Teacher is the one who shows the path to its Students. We are Glad to tell you that we have a great and experienced team of More than 10 yoga gurus (masters). Who are very well experienced, knowledgeable And Master About their Specific Yoga Subjects. We offer a friendly environment between our Yoga teachers and students so that learning becomes so easy with a fun and happy Atmosphere. All of our Teachers are registered yoga teachers, Mastered in yoga science & PhD with many years of yoga teaching experience in various countries around the world. Some are also gold medalists in their Specific Yoga Subjects. and come from the descent of the Traditional Himalayan yogis.
          </p>
        </div>
      </div>
    </div>
  );
};

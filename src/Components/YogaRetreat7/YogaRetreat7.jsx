import React from 'react'
import Navbar from '../../MainComponents/Navbar'
import AiCard from '../Gallery/AiCard'
import Footer from '../../MainComponents/Footer'
import { HeroImage } from '../AboutUs/MainAbout'
import LogoHeading from '../../Pages/LogoHeading'
import { Typewriter } from "react-simple-typewriter";
import PriceGrid from '../../Pages/Parts/PriceGrid'
import FAQ from '../../Pages/Parts/FAQ'
import { FaClock } from 'react-icons/fa'
import { GrYoga } from 'react-icons/gr'
import { OnePagerSection } from '../YogaRetreat3/YogaRetreat3'
import RetreatForm from '../../Design/RetreatForm'

const YogaRetreat7 = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage wallpaper={"https://upload.wikimedia.org/wikipedia/commons/7/75/Rishikesh-Lakshman_Jhula_by_Kaustubh_Nayyar.jpg"} Heading={"Welcome to Yog Nagari Rishikesh"}/>
        <div className='mt-10 mb-10'>
        <LogoHeading heading={"7 Days Yoga Retreat in Rishikesh Overview"} />
      </div>
        {/* <div className='mt-10 mb-10'> */}
        
        {/* </div> */}
        <RetreatForm/>
        
        {/* <LogoHeading heading={"7 Days Yoga Retreat in Rishikesh Overview"}/> */}
        <TypewriterHeading/>
        {/* <OnePagerSection/> */}
        <WhyChoose/>
        <OnePagerSection/>
        <Content title={"Daily Yoga Classes"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://kanatalheights.com/wp-content/uploads/2022/06/yoga-capital-rishikesh.jpg"}/>
        <Content title={"Sound Healing Session"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://hips.hearstapps.com/hmg-prod/images/woman-playing-tibetan-singing-bowl-in-sound-healing-royalty-free-image-1673608575.jpg"}/>
        <Content title={"Body Movement Session"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://live.staticflickr.com/3018/2804103595_1cf4f96e6d_b.jpg"}/>
        <Content title={"Kirtan Session"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://kanatalheights.com/wp-content/uploads/2022/06/yoga-capital-rishikesh.jpg"}/>
        <Content title={"Ayurvedic Therapy / Massage"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://professionalskincareguide.com/wp-content/uploads/2021/04/Ayurvedic-Massage-Featured.jpg"}/>
        <Content title={"Sunrise Excursion"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://images.myguide-cdn.com/bali/companies/bali-full-package-jeep-sunrise-expedition-with-hot-spring/large/bali-full-package-jeep-sunrise-expedition-with-hot-spring-3465276.jpg"}/>
        {/* <Content title={"Sunset Excursion"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://www.etnaexperience.com/wp-content/uploads/2019/01/trekking-sulletna-scaled.jpg"}/> */}
        <Content title={"World famous Ganga Arti"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://static.toiimg.com/photo/106179549.cms"}/>
        {/* <Content title={"Beatles Ashram Tour ( Optional )"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://rishikesh.app/_vercel/image?url=%2Fte%2Fattractions%2Fbeatles-ashram%2Fbeatles-ashram-banner.jpeg&w=1280&q=100"}/> */}
        <Content title={"Cave Exploring"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://www.mirayogashala.com/images/cave.webp"}/>
        <Content title={"Waterfall Trekking"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://i.ibb.co/X3sQZBt/waterfall-Treking.jpg"}/>
        <Content title={"⁠Himalayas Sightseeing"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://i.ibb.co/wCnDB53/gallery6.jpg"}/>
        <Content title={"Ram Jhula / Laxman jhula Tour"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://www.justahotels.com/wp-content/uploads/2022/09/image-44.png"}/>
        <Content title={"Temple Visiting"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://i.ibb.co/1Q0TfDV/temple-Visiting.jpg"}/>
        {/* <Content title={"Devprayag Sanagam Visit ( Optional )"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://kanatalheights.com/wp-content/uploads/2022/06/yoga-capital-rishikesh.jpg"}/> */}
        <PriceGrid heading={"Normal rooms included in this package"} inr={"15000rs"} usd={"250$"}/>
        <LogoHeading heading={"Itinerary of 7 Days Yoga Retreat"}/>
        <DailySchedule1/>
        <DailySchedule2/>
        <DailySchedule3/>
        <DailySchedule4/>
        <DailySchedule5/>
        <DailySchedule6/>
        <DailySchedule7/>
        <FAQ/>
        <Footer/>
        
    </div>
  )
}


const DailySchedule1 = () => {
  const schedule = [
    
    { time: '12:00 - 1:00pm', activity: 'Check in Time' },
    { time: '1:00 - 2:00pm', activity: 'Lunch Time' },
    { time: '2:00 - 3:00pm', activity: 'Rest' },
    { time: '3:00 - 4:00pm', activity: 'Orientation' },
    { time: '7:00 - 8:00pm', activity: 'Dinner Time' },
    { time: '9:00pm',        activity:'Go to Sleep'},
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
     
      <h3 className="text-xl font-semibold text-center mb-6 text-gray-600">Day 01</h3>
      
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <div className="min-w-full bg-white border border-gray-200">
          <div className="flex bg-gray-100 py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">
            <div className="w-1/2">Time</div>
            <div className="w-1/2">Activity</div>
          </div>
          {schedule.map((item, index) => (
            <div key={index} className="flex py-3 px-4 border-b border-gray-200 hover:bg-gray-50 transition duration-300 ease-in-out">
              <div className="w-1/2 text-sm text-gray-600 flex items-center">
                <FaClock className="mr-2 text-gray-500" /> {item.time}
              </div>
              <div className="w-1/2 text-sm text-gray-800 flex items-center">
                <GrYoga className="mr-2 text-gray-500" /> {item.activity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DailySchedule2 = () => {
  const schedule = [
    
    { time: '12:00 - 1:00pm', activity: 'Check in Time' },
    { time: '1:00 - 2:00pm', activity: 'Lunch Time' },
    { time: '2:00 - 3:00pm', activity: 'Rest' },
    { time: '3:00 - 4:00pm', activity: 'Orientation' },
    { time: '7:00 - 8:00pm', activity: 'Dinner Time' },
    { time: '9:00pm',        activity:'Go to Sleep'},
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
     
      <h3 className="text-xl font-semibold text-center mb-6 text-gray-600">Day 02</h3>
      
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <div className="min-w-full bg-white border border-gray-200">
          <div className="flex bg-gray-100 py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">
            <div className="w-1/2">Time</div>
            <div className="w-1/2">Activity</div>
          </div>
          {schedule.map((item, index) => (
            <div key={index} className="flex py-3 px-4 border-b border-gray-200 hover:bg-gray-50 transition duration-300 ease-in-out">
              <div className="w-1/2 text-sm text-gray-600 flex items-center">
                <FaClock className="mr-2 text-gray-500" /> {item.time}
              </div>
              <div className="w-1/2 text-sm text-gray-800 flex items-center">
                <GrYoga className="mr-2 text-gray-500" /> {item.activity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DailySchedule3 = () => {
  const schedule = [
    
    { time: '12:00 - 1:00pm', activity: 'Check in Time' },
    { time: '1:00 - 2:00pm', activity: 'Lunch Time' },
    { time: '2:00 - 3:00pm', activity: 'Rest' },
    { time: '3:00 - 4:00pm', activity: 'Orientation' },
    { time: '7:00 - 8:00pm', activity: 'Dinner Time' },
    { time: '9:00pm',        activity:'Go to Sleep'},
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
     
      <h3 className="text-xl font-semibold text-center mb-6 text-gray-600">Day 03</h3>
      
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <div className="min-w-full bg-white border border-gray-200">
          <div className="flex bg-gray-100 py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">
            <div className="w-1/2">Time</div>
            <div className="w-1/2">Activity</div>
          </div>
          {schedule.map((item, index) => (
            <div key={index} className="flex py-3 px-4 border-b border-gray-200 hover:bg-gray-50 transition duration-300 ease-in-out">
              <div className="w-1/2 text-sm text-gray-600 flex items-center">
                <FaClock className="mr-2 text-gray-500" /> {item.time}
              </div>
              <div className="w-1/2 text-sm text-gray-800 flex items-center">
                <GrYoga className="mr-2 text-gray-500" /> {item.activity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DailySchedule4 = () => {
  const schedule = [
    
    { time: '12:00 - 1:00pm', activity: 'Check in Time' },
    { time: '1:00 - 2:00pm', activity: 'Lunch Time' },
    { time: '2:00 - 3:00pm', activity: 'Rest' },
    { time: '3:00 - 4:00pm', activity: 'Orientation' },
    { time: '7:00 - 8:00pm', activity: 'Dinner Time' },
    { time: '9:00pm',        activity:'Go to Sleep'},
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
     
      <h3 className="text-xl font-semibold text-center mb-6 text-gray-600">Day 04</h3>
      
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <div className="min-w-full bg-white border border-gray-200">
          <div className="flex bg-gray-100 py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">
            <div className="w-1/2">Time</div>
            <div className="w-1/2">Activity</div>
          </div>
          {schedule.map((item, index) => (
            <div key={index} className="flex py-3 px-4 border-b border-gray-200 hover:bg-gray-50 transition duration-300 ease-in-out">
              <div className="w-1/2 text-sm text-gray-600 flex items-center">
                <FaClock className="mr-2 text-gray-500" /> {item.time}
              </div>
              <div className="w-1/2 text-sm text-gray-800 flex items-center">
                <GrYoga className="mr-2 text-gray-500" /> {item.activity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const DailySchedule5 = () => {
  const schedule = [
    
    { time: '12:00 - 1:00pm', activity: 'Check in Time' },
    { time: '1:00 - 2:00pm', activity: 'Lunch Time' },
    { time: '2:00 - 3:00pm', activity: 'Rest' },
    { time: '3:00 - 4:00pm', activity: 'Orientation' },
    { time: '7:00 - 8:00pm', activity: 'Dinner Time' },
    { time: '9:00pm',        activity:'Go to Sleep'},
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
     
      <h3 className="text-xl font-semibold text-center mb-6 text-gray-600">Day 05</h3>
      
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <div className="min-w-full bg-white border border-gray-200">
          <div className="flex bg-gray-100 py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">
            <div className="w-1/2">Time</div>
            <div className="w-1/2">Activity</div>
          </div>
          {schedule.map((item, index) => (
            <div key={index} className="flex py-3 px-4 border-b border-gray-200 hover:bg-gray-50 transition duration-300 ease-in-out">
              <div className="w-1/2 text-sm text-gray-600 flex items-center">
                <FaClock className="mr-2 text-gray-500" /> {item.time}
              </div>
              <div className="w-1/2 text-sm text-gray-800 flex items-center">
                <GrYoga className="mr-2 text-gray-500" /> {item.activity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DailySchedule6 = () => {
  const schedule = [
    
    { time: '12:00 - 1:00pm', activity: 'Check in Time' },
    { time: '1:00 - 2:00pm', activity: 'Lunch Time' },
    { time: '2:00 - 3:00pm', activity: 'Rest' },
    { time: '3:00 - 4:00pm', activity: 'Orientation' },
    { time: '7:00 - 8:00pm', activity: 'Dinner Time' },
    { time: '9:00pm',        activity:'Go to Sleep'},
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
     
      <h3 className="text-xl font-semibold text-center mb-6 text-gray-600">Day 06</h3>
      
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <div className="min-w-full bg-white border border-gray-200">
          <div className="flex bg-gray-100 py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">
            <div className="w-1/2">Time</div>
            <div className="w-1/2">Activity</div>
          </div>
          {schedule.map((item, index) => (
            <div key={index} className="flex py-3 px-4 border-b border-gray-200 hover:bg-gray-50 transition duration-300 ease-in-out">
              <div className="w-1/2 text-sm text-gray-600 flex items-center">
                <FaClock className="mr-2 text-gray-500" /> {item.time}
              </div>
              <div className="w-1/2 text-sm text-gray-800 flex items-center">
                <GrYoga className="mr-2 text-gray-500" /> {item.activity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DailySchedule7 = () => {
  const schedule = [
    
    { time: '12:00 - 1:00pm', activity: 'Check in Time' },
    { time: '1:00 - 2:00pm', activity: 'Lunch Time' },
    { time: '2:00 - 3:00pm', activity: 'Rest' },
    { time: '3:00 - 4:00pm', activity: 'Orientation' },
    { time: '7:00 - 8:00pm', activity: 'Dinner Time' },
    { time: '9:00pm',        activity:'Go to Sleep'},
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
     
      <h3 className="text-xl font-semibold text-center mb-6 text-gray-600">Day 07</h3>
      
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <div className="min-w-full bg-white border border-gray-200">
          <div className="flex bg-gray-100 py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">
            <div className="w-1/2">Time</div>
            <div className="w-1/2">Activity</div>
          </div>
          {schedule.map((item, index) => (
            <div key={index} className="flex py-3 px-4 border-b border-gray-200 hover:bg-gray-50 transition duration-300 ease-in-out">
              <div className="w-1/2 text-sm text-gray-600 flex items-center">
                <FaClock className="mr-2 text-gray-500" /> {item.time}
              </div>
              <div className="w-1/2 text-sm text-gray-800 flex items-center">
                <GrYoga className="mr-2 text-gray-500" /> {item.activity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};








const FAQSection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="px-8 mx-auto max-w-7xl md:px-12 lg:px-32">
        <div className="text-center">
          <p className="text-4xl font-semibold tracking-tighter text-green-700">
            Frequently Asked Questions
          </p>
          <p className="mt-4 text-base font-medium text-gray-600">
            Answers to commonly asked questions about our yoga classes and services.
          </p>
        </div>

        <dl className="grid gap-12 mt-12 lg:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <dt className="text-lg font-medium text-green-700">
              What kind of support can I expect?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-600">
              We offer comprehensive support including live chat, email, and phone. Our support team is available 24/7 to assist with any issues or questions you might have.
            </dd>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <dt className="text-lg font-medium text-green-700">
              How secure is my payment information?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-600">
              Your payment information is extremely secure. We use industry-standard encryption and comply with PCI standards to ensure your details are protected.
            </dd>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <dt className="text-lg font-medium text-green-700">
              Can I cancel my subscription at any time?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-600">
              Yes, you can cancel your subscription at any time. There are no cancellation fees, though no refunds are provided for partial months.
            </dd>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <dt className="text-lg font-medium text-green-700">
              How often are platform updates released?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-600">
              We regularly update the platform to introduce new features and improvements. Major updates are released quarterly, while minor updates and bug fixes are rolled out as needed.
            </dd>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <dt className="text-lg font-medium text-green-700">
              Is there a community or forum where I can discuss with other users?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-600">
              Yes, we have a community forum where users can share tips, ask questions, and connect with others. It's a great place to learn from fellow users and contribute your own insights.
            </dd>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <dt className="text-lg font-medium text-green-700">
              Do you offer training or resources for new users?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-600">
              Absolutely! We provide a comprehensive knowledge base, video tutorials, and live webinars to help you get started and make the most out of our platform.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};



const TypewriterHeading = () => {
  return (
    <section className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
      <div>
        <h1 className="text-4xl text-center font-semibold tracking-tighter text-gray-900 lg:text-5xl text-balance">
          Yoga School in Rishikesh - Mahakaal{" "}
          <span className=" bg-indigo-300 shadow shadow-gray-100 border rounded-lg text-black">
            <Typewriter
              words={["Yogpeeth"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={10}
            />
          </span>
        </h1>
        <p className="mt-4 text-base font-medium text-gray-500 text-balance">
        Mahakaal Yogpeeth is so much more than just a yoga school in Rishikesh.
          It is a place that gives you a real feel of Home away from home and
          where you will find your long-lost family. We are committed to share
          and spread the awareness of our Yoga lineage, proceeding to motivate
          and develop yoga practitioners everywhere in the world. Having a dream
          of the present and keep moving to the shapeless goal is the prime
          maxim of this Yoga teacher training school in Rishikesh. We at Mahakaal Yogpeeth like do not hoard our knowledge gained from our gurus, but
          believe in spreading it to everyone, which will surely benefit the
          lives of people. Our yoga certification Courses are designed and
          formed with this in mind as it will provide the students a deep
          knowledge of yoga and its philosophies. The YTT certification program
          is customised to provide Hatha Yoga and Ashtanga Vinyasa yoga that
          would help the students in learning yoga, improvement of their skills
          and become a certified yoga instructor. We are internationally
          certified Yogashala, registered with Yoga Alliance USA and holds
          global recognition. The optimum standards which means anyone can
          practice and impart the knowledge of yoga TTC courses across
          world-wide boundaries. Our Main Aim is to provide first-class yoga
          training to the practitioners and train well yoga teachers by
          improving their skills to next levels with the purpose of spreading
          the awareness and understanding of yoga to the world-wide. Our mission
          is to get rid of nervousness, depression, anxiety from the society as
          well. Furthermore, we try to focus on family problems and remedial
          personal by practicing a modest, accurate, and traditional form of
          multi-style yoga poses. Our yoga teacher and instructor certification
          training in Rishikesh, India will give you a chance to experience the
          serene location also known as the gateway of Himalayas. Located in
          Rishikesh, the yoga capital of the world, and nestled in the foothills
          of the Himalayas where the Ganga River flows, makes this a truly
          unique place to practice yoga. We at Mahakaal Yogpeeth, are committed to
          educational yoga teaching standards around the world with our 200 Hour
          Yoga TTC, 300 Hour Yoga TTC and 500-hour yoga TTC programs in
          Rishikesh. Our Yoga TTC in Rishikesh isn’t just for aspiring yogis,
          but for anyone who wants to deepen their personal practice or skill
          and gain improvement in a better way of understanding of yoga
          philosophy and its origins. We deal with an ideal spiritual and
          healthy environment for Yoga teacher training. Whatever your reasons
          for embarking on this journey, we are here to guide you. You will
          explore the depth of yoga beyond the physical practice and learn about
          the origin of yoga, philosophy, anatomy, and so much more. Yoga
          Teacher Training is the beginning of a life-transforming journey
          Through yoga or a new chapter in your life. It is not the final
          objective or goal in your life, but a beautiful step towards life on
          the path of Yoga. When you leave Mahakaal Yogpeeth, you will have
          expanded the range of your skills, deepened your knowledge, and gained
          more confidence in your teaching abilities.
        </p>
        <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl text-center text-balance mt-12">
          Rishikesh | Your Dream Destination for{" "}
          <span className="bg-indigo-300 shadow shadow-gray-100 border rounded-lg text-black">
            <Typewriter
              words={["Yoga!", "Ambience!", "Peace!"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={0}
            />
          </span>
        </h1>
        <p className="mt-4 text-base font-medium text-gray-500 text-balance">
          Rishikesh is the gateway of Himalaya which is the most popular
          spiritual place for seekers in Uttrakhand. Rishikesh is also known for
          “Yoga capital of world.” An International yoga festival is held by
          Uttarakhand tourism every year in March first week. Every year
          thousands of practitioner from 50 countries come to celebrate this
          festival to practice Yoga Meditation. This festival gives an
          opportunity to attend a yoga classees in Rishikesh with world-famous
          yoga teachers. There are several yoga institute in Rishikesh as well.
          Mahakaal Yogpeeth always aims in keeping the originality of the Yoga as
          it is. The main purpose of starting Mahakaal Yogpeeth is to provide
          proper yoga training in Rishikesh and help people to re-experience
          their physique and transform it in a balanced way that you will yet
          again connect with your soul. Great Sages and Yogis have been
          practiced in Rishikesh and this is what makes this place special and
          full of energies. As Rishikesh is the foothills of Himalaya, Holy
          Ganges is flowing all the way from its origin place called “Gangotri”,
          which is only 250km far away from Rishikesh. According to Vedic and
          Hindu culture, it is said that if you have 3 dips in the holy Ganges
          removes all impurities and sins. This is what makes this place
          special. Rishikesh is surrounded by Ashrams and Temples where always
          some yoga activities and rituals going on. Several ancient temples and
          caves belong to this ancient place. Every year most popular pilgrimage
          begins from Rishikesh to the Himalayas oldest and ancient temples. So,
          Rishikesh acts as an entry point which leads to the sacred places deep
          in the Himalayas. Once people come to Rishikesh it would touch to
          their hearts and changes their mind and soul for better. Rishikesh has
          succeeded to get the position of a spiritual destination of the
          highest standing, because of its numerous yoga and meditation schools,
          ashrams and places of worship. You will know how many yogis, sages and
          students who are coming far from their homes to look for harmony.
          Rishikesh is known as the land of yoga and meditation in the world and
          people come far away to learn yoga and meditation. It is a good
          destination to have an experience with India’s ancient and traditional
          form of yoga. The eco-friendly and peaceful environment that
          fascinates the spiritual and religious seekers over the world. Come
          and Get experience the spirituality of the Holy Ganga River, Temples,
          Yogshalas, Ashrams, Chaurasi Kutiyas, famous Ram and Laxman Jhulas,
          etc. The voyage does not complete here by way of you can enjoy the
          experienced sports in which includes trekking, river rafting, bungee
          jumping, jungle safari, and camping. Visit this heavenly place to get
          a pause in your hectic life and savor the holy attraction of
          Rishikesh.
        </p>
      </div>
    </section>
  );
};




export const Content = ({title,img,content}) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <a
            href="/"
            aria-label="Go Home"
            title="Logo"
            className="inline-block mb-5"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <h5 className="mb-4 text-4xl font-extrabold leading-none">
          {title}
           
          </h5>
          <p className="mb-6 text-gray-900">
          {content}
          </p>
          <hr className="mb-5 border-gray-300" />
         
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};


const WhyChoose = () => {
  return (
    <section>
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div>
          <p className="text-4xl font-semibold tracking-tighter text-indigo-600">
          Why Choose Mahakaal Yogpeeth for Your Yoga Retreat
          </p>
          <p className="mt-4 text-base font-medium text-gray-500">
          Choosing Mahakaal Yogpeeth for your Yoga Retreat is an investment in a transformative and enriching experience. Here are compelling reasons why Mahakaal Yogpeeth stands out as a premier destination for those seeking a holistic and authentic yoga retreat:
          </p>
        </div>

        <dl className="grid gap-12 mt-12 lg:grid-cols-2">
          <div>
            <dt className="text-lg font-medium text-black">
            Holistic Approach to Well-Being:
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-500">
            Mahakaal Yogpeeth is committed to providing more than just traditional yoga classes. Our retreats incorporate a diverse range of activities, including meditation, sound healing, Ayurvedic therapies, and cultural excursions. This holistic approach ensures a comprehensive journey toward physical, mental, and spiritual well-being.
            </dd>
          </div>
          <div>
            <dt className="text-lg font-medium text-black">
            Experienced and Passionate Instructors:
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-500">
            Our team of instructors is not only highly qualified but also deeply passionate about sharing the transformative power of yoga. They bring a wealth of experience and a genuine commitment to guiding participants through their yoga journey, ensuring that every individual receives personalized attention and support.
            </dd>
          </div>
          <div>
            <dt className="text-lg font-medium text-black">
            Serene and Spiritual Setting:
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-500">
            Nestled in the spiritual haven of Rishikesh, Mahakaal Yogpeeth provides a tranquil and serene environment conducive to self-discovery and healing. The picturesque landscapes and proximity to the sacred Ganges River create an ideal backdrop for a transformative retreat experience.
            </dd>
          </div>
          <div>
            <dt className="text-lg font-medium text-black">
            Comprehensive Yoga Curriculum:
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-500">
            Our yoga retreats include a diverse curriculum covering Hatha Yoga, Meditation, Pranayama, mindful body movement, and Ayurvedic yoga therapies. This comprehensive approach allows participants to explore various facets of yoga, catering to all experience levels.
            </dd>
          </div>
          <div>
            <dt className="text-lg font-medium text-black">
            Emphasis on Mindfulness and Meditation:
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-500">
            Mahakaal Yogpeeth recognizes the importance of mindfulness and meditation in promoting stress reduction and concentration. Our retreats include dedicated sessions to cultivate these practices, providing participants with valuable tools for navigating the challenges of daily life.
            </dd>
          </div>
          <div>
            <dt className="text-lg font-medium text-black">
            Cultural and Spiritual Immersion:
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-500">
            Beyond yoga, our retreats offer cultural excursions to iconic places like the Beatles Ashram, Ram Jhula, and Devprayag Sangam. These experiences enrich the overall journey, allowing participants to connect with the cultural and spiritual essence of Rishikesh.
            </dd>
          </div>
          <div>
            <dt className="text-lg font-medium text-black">
            Small Group Setting for Personalized Attention:
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-500">
            Our retreats maintain small group sizes to ensure an intimate and personalized experience. This approach enables our instructors to cater to the individual needs of each participant, fostering a sense of community and support.
            </dd>
          </div>
          <div>
            <dt className="text-lg font-medium text-black">
            Focus on Ayurvedic Wellness:
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-500">
            Mahakaal Yogpeeth integrates Ayurvedic principles into the retreat experience. Ayurvedic yoga therapies and wellness practices complement the yoga sessions, providing a holistic approach to health and healing.
            </dd>
          </div>
          <div>
            <dt className="text-lg font-medium text-black">
            Nature-Infused Excursions
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-500">
            Immersive excursions to witness the sunrise and sunset over the Himalayas, trek to waterfalls, and explore the region's natural beauty enhance the connection with nature, contributing to stress relief and overall well-being.
            </dd>
          </div>
          <div>
            <dt className="text-lg font-medium text-black">
            Positive Community and Support System:
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-500">
            Choosing Mahakaal Yogpeeth means becoming part of a positive and supportive community. The connections formed during the retreat create a network of like-minded individuals who share the same journey of self-discovery and well-being.


            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default YogaRetreat7
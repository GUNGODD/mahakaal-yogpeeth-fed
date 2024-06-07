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


const YogaRetreat10 = () => {
  return (
    <div>
      <Navbar />
      <HeroImage wallpaper={"https://upload.wikimedia.org/wikipedia/commons/7/75/Rishikesh-Lakshman_Jhula_by_Kaustubh_Nayyar.jpg"} Heading={"This is Heading"} />
      <div className='mt-10 mb-10'>
        <LogoHeading heading={"10 Days Yoga Retreat in Rishikesh Overview"} />
      </div>
      <RetreatForm />
      <TypewriterHeading />
      <OnePagerSection />
      <WhyChoose />
      <Content title={"Daily Yoga Classes"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://kanatalheights.com/wp-content/uploads/2022/06/yoga-capital-rishikesh.jpg"} />
      <Content title={"Sound Healing Session"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://hips.hearstapps.com/hmg-prod/images/woman-playing-tibetan-singing-bowl-in-sound-healing-royalty-free-image-1673608575.jpg"} />
      <Content title={"Body Movement Session"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://live.staticflickr.com/3018/2804103595_1cf4f96e6d_b.jpg"} />
      <Content title={"Kirtan Session"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://kanatalheights.com/wp-content/uploads/2022/06/yoga-capital-rishikesh.jpg"} />
      <Content title={"Ayurvedic Therapy / Massage"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://professionalskincareguide.com/wp-content/uploads/2021/04/Ayurvedic-Massage-Featured.jpg"} />
      <Content title={"Sunrise Excursion"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://images.myguide-cdn.com/bali/companies/bali-full-package-jeep-sunrise-expedition-with-hot-spring/large/bali-full-package-jeep-sunrise-expedition-with-hot-spring-3465276.jpg"} />
      <Content title={"Sunset Excursion"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://www.etnaexperience.com/wp-content/uploads/2019/01/trekking-sulletna-scaled.jpg"} />
      <Content title={"World famous Ganga Arti"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://static.toiimg.com/photo/106179549.cms"} />
      <Content title={"Beatles Ashram Tour ( Optional )"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://rishikesh.app/_vercel/image?url=%2Fte%2Fattractions%2Fbeatles-ashram%2Fbeatles-ashram-banner.jpeg&w=1280&q=100"} />
      <Content title={"Cave Exploring"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://kanatalheights.com/wp-content/uploads/2022/06/yoga-capital-rishikesh.jpg"} />
      <Content title={"Waterfall Trekking"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://kanatalheights.com/wp-content/uploads/2022/06/yoga-capital-rishikesh.jpg"} />
      <Content title={"⁠Himalayas Sightseeing"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://kanatalheights.com/wp-content/uploads/2022/06/yoga-capital-rishikesh.jpg"} />
      <Content title={"Ram Jhula / Laxman jhula Tour"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://kanatalheights.com/wp-content/uploads/2022/06/yoga-capital-rishikesh.jpg"} />
      <Content title={"Temple Visiting"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://kanatalheights.com/wp-content/uploads/2022/06/yoga-capital-rishikesh.jpg"} />
      <Content title={"Devprayag Sanagam Visit ( Optional )"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://kanatalheights.com/wp-content/uploads/2022/06/yoga-capital-rishikesh.jpg"} />
      <PriceGrid />
      <LogoHeading heading={"Itinerary of 10 Days Yoga Retreat"} />
      <DailySchedule1 />
      <DailySchedule2 />
      <DailySchedule3 />
      <DailySchedule4 />
      <DailySchedule5 />
      <DailySchedule6 />
      <DailySchedule7 />
      <DailySchedule8 />
      <DailySchedule9 />
      <DailySchedule10 />
      <FAQ />
      <Footer />
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
    { time: '9:00pm', activity: 'Go to Sleep' },
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
    { time: '9:00pm', activity: 'Go to Sleep' },
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
    { time: '9:00pm', activity: 'Go to Sleep' },
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
    { time: '9:00pm', activity: 'Go to Sleep' },
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
    { time: '9:00pm', activity: 'Go to Sleep' },
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
    { time: '9:00pm', activity: 'Go to Sleep' },
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
    { time: '9:00pm', activity: 'Go to Sleep' },
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

const DailySchedule8 = () => {
  const schedule = [

    { time: '12:00 - 1:00pm', activity: 'Check in Time' },
    { time: '1:00 - 2:00pm', activity: 'Lunch Time' },
    { time: '2:00 - 3:00pm', activity: 'Rest' },
    { time: '3:00 - 4:00pm', activity: 'Orientation' },
    { time: '7:00 - 8:00pm', activity: 'Dinner Time' },
    { time: '9:00pm', activity: 'Go to Sleep' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h3 className="text-xl font-semibold text-center mb-6 text-gray-600">Day 08</h3>

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

const DailySchedule9 = () => {
  const schedule = [

    { time: '12:00 - 1:00pm', activity: 'Check in Time' },
    { time: '1:00 - 2:00pm', activity: 'Lunch Time' },
    { time: '2:00 - 3:00pm', activity: 'Rest' },
    { time: '3:00 - 4:00pm', activity: 'Orientation' },
    { time: '7:00 - 8:00pm', activity: 'Dinner Time' },
    { time: '9:00pm', activity: 'Go to Sleep' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h3 className="text-xl font-semibold text-center mb-6 text-gray-600">Day 09</h3>

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

const DailySchedule10 = () => {
  const schedule = [

    { time: '12:00 - 1:00pm', activity: 'Check in Time' },
    { time: '1:00 - 2:00pm', activity: 'Lunch Time' },
    { time: '2:00 - 3:00pm', activity: 'Rest' },
    { time: '3:00 - 4:00pm', activity: 'Orientation' },
    { time: '7:00 - 8:00pm', activity: 'Dinner Time' },
    { time: '9:00pm', activity: 'Go to Sleep' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h3 className="text-xl font-semibold text-center mb-6 text-gray-600">Day 10</h3>

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


export const Content = ({ title, img, content }) => {
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
            Choosing Mira Yogashala for your Yoga Retreat is an investment in a transformative and enriching experience. Here are compelling reasons why Mira Yogashala stands out as a premier destination for those seeking a holistic and authentic yoga retreat:
          </p>
        </div>

        <dl className="grid gap-12 mt-12 lg:grid-cols-2">
          <div>
            <dt className="text-lg font-medium text-black">
              Holistic Approach to Well-Being:
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-500">
              Mira Yogashala is committed to providing more than just traditional yoga classes. Our retreats incorporate a diverse range of activities, including meditation, sound healing, Ayurvedic therapies, and cultural excursions. This holistic approach ensures a comprehensive journey toward physical, mental, and spiritual well-being.
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
              Nestled in the spiritual haven of Rishikesh, Mira Yogashala provides a tranquil and serene environment conducive to self-discovery and healing. The picturesque landscapes and proximity to the sacred Ganges River create an ideal backdrop for a transformative retreat experience.
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
              Mira Yogashala recognizes the importance of mindfulness and meditation in promoting stress reduction and concentration. Our retreats include dedicated sessions to cultivate these practices, providing participants with valuable tools for navigating the challenges of daily life.
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
              Mira Yogashala integrates Ayurvedic principles into the retreat experience. Ayurvedic yoga therapies and wellness practices complement the yoga sessions, providing a holistic approach to health and healing.
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
              Choosing Mira Yogashala means becoming part of a positive and supportive community. The connections formed during the retreat create a network of like-minded individuals who share the same journey of self-discovery and well-being.


            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export const RetreatForm = () => {
  return (

    <section className="bg-white">
      <div className="lg:grid lg:grid-cols-12">
        <section className="relative flex h-32 items-end rounded-lg bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6 ">
          <img
            alt=""
            src="https://img.etimg.com/thumb/msid-77107804,width-640,height-480,imgsize-574047,resizemode-4/pictures-shared.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
              <svg
                className="h-8 sm:h-10"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Contact Now
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
              quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>

        <main
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#"
              >
                <span className="sr-only">Home</span>
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Squid 🦑
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.
              </p>
            </div>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>

                <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>



              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                <input
                  type="email"
                  id="Email"
                  name="mail"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="Address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>

                <input
                  type="text"
                  id="Address"
                  name="address"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>


              <div className="col-span-6">
                <label htmlFor="WPnum" className="block text-sm font-medium text-gray-700"> Whatsapp Number </label>

                <input
                  type="text"
                  id="WPnum"
                  name="whatsappNumber"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="Message" className="block text-sm font-medium text-gray-700"> Message </label>

                <input
                  type="text"
                  id="Message"
                  name="text"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>



              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  We'll reach out to you ASAP!
                  <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                  and
                  <a href="#" className="text-gray-700 underline">privacy policy</a>.
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Submit
                </button>


              </div>
            </form>
          </div>
        </main>
      </div>
    </section>

  );
}


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
          Mira Yogashala is so much more than just a yoga school in Rishikesh.
          It is a place that gives you a real feel of Home away from home and
          where you will find your long-lost family. We are committed to share
          and spread the awareness of our Yoga lineage, proceeding to motivate
          and develop yoga practitioners everywhere in the world. Having a dream
          of the present and keep moving to the shapeless goal is the prime
          maxim of this Yoga teacher training school in Rishikesh. We at Mira
          Yogashala like do not hoard our knowledge gained from our gurus, but
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
          unique place to practice yoga. We at Mira Yogashala, are committed to
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
          the path of Yoga. When you leave Mira Yogashala, you will have
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
          Mira Yogashala always aims in keeping the originality of the Yoga as
          it is. The main purpose of starting Mira Yogashala is to provide
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

export const OnePagerSection = () => {
  return (
    <section>
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div>
          <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl text-balance">
            Building one pagers together
            <span className="text-gray-600">wherever and anywhere</span>
          </h1>
          <p className="mt-4 text-base font-medium text-gray-500 text-balance">
            Control and added security. With decentralization, users have more
            control over their data and transactions, and the platform is less
            susceptible to malicious attacks.
          </p>
          <div className="grid mt-12 gap-y-12 gap-x-2 md:grid-cols-2">
            <div>
              <div className="p-2 overflow-hidden border rounded-3xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="#"
                  className="w-full h-full mx-auto rounded-2xl"
                />
              </div>
              <div className="mt-4">
                <p className="font-medium text-gray-900">
                  No warranty disclaimer
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  The license comes with no warranties. The licensor provides
                  the work "as is," and users must use it at their own risk.
                </p>
              </div>
            </div>
            <div>
              <div className="p-2 overflow-hidden border rounded-3xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="#"
                  className="w-full h-full mx-auto rounded-2xl"
                />
              </div>
              <div className="px-8 mt-4">
                <p className="font-medium text-gray-900">
                  Modification Freedom
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  You can adapt, remix, transform, and build upon the licensed
                  work.
                </p>
              </div>
            </div>
            <div>
              <div className="p-2 overflow-hidden border rounded-3xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="#"
                  className="w-full h-full mx-auto rounded-2xl"
                />
              </div>
              <div className="px-8 mt-4">
                <p className="font-medium text-gray-900">
                  Commercial use allowed
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  You are allowed to use the licensed work for both
                  non-commercial and commercial purposes.
                </p>
              </div>
            </div>
            <div>
              <div className="p-2 overflow-hidden border rounded-3xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="#"
                  className="w-full h-full mx-auto rounded-2xl"
                />
              </div>
              <div className="px-8 mt-4">
                <p className="font-medium text-gray-900">
                  Share alike (SA) absence
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  The CC BY 3.0 License does not include a "Share Alike" (SA)
                  provision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default YogaRetreat10

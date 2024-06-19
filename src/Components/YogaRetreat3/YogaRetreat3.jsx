import React from 'react'
import Navbar from '../../MainComponents/Navbar'
import AiCard from '../Gallery/AiCard'
import Footer from '../../MainComponents/Footer'
import { HeroImage } from '../AboutUs/MainAbout'
import LogoHeading from '../../Pages/LogoHeading'
import TypewriterComponent from 'typewriter-effect'
import { Typewriter } from "react-simple-typewriter";
import PriceGrid from '../../Pages/Parts/PriceGrid'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { FaClock } from 'react-icons/fa'
import { GrYoga } from 'react-icons/gr'
import RetreatForm from '../../Design/RetreatForm'

const YogaRetreat3 = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage wallpaper={"https://upload.wikimedia.org/wikipedia/commons/7/75/Rishikesh-Lakshman_Jhula_by_Kaustubh_Nayyar.jpg"} Heading={"Welcome to Yog Nagari Rishikesh"}/>
        <div className='mt-10 mb-10'>
        <LogoHeading heading={"3 Days Yoga Retreat in Rishikesh Overview"}/>
        </div>
        <RetreatForm/>
        <TypewriterHeading/>
        <WhyChoose/>
        <OnePagerSection/>
        <Content title={"Daily Yoga Classes"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://kanatalheights.com/wp-content/uploads/2022/06/yoga-capital-rishikesh.jpg"}/>
      
        <Content title={"Body Movement Session"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://i.ibb.co/VTdgctp/bodymove1.jpg"}/>
        
        <Content title={"Sunrise Excursion"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://images.myguide-cdn.com/bali/companies/bali-full-package-jeep-sunrise-expedition-with-hot-spring/large/bali-full-package-jeep-sunrise-expedition-with-hot-spring-3465276.jpg"}/>
        
        <Content title={"World famous Ganga Arti"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://static.toiimg.com/photo/106179549.cms"}/>
        
        <Content title={"Waterfall Trekking"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://i.ibb.co/X3sQZBt/waterfall-Treking.jpg"}/>
        <Content title={"⁠Himalayas Sightseeing"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://i.ibb.co/wCnDB53/gallery6.jpg"}/>
        <Content title={"Ram Jhula / Laxman jhula Tour"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://www.justahotels.com/wp-content/uploads/2022/09/image-44.png"}/>
        <Content title={"Temple Visiting"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://i.ibb.co/1Q0TfDV/temple-Visiting.jpg"}/>
          <LogoHeading heading={"Upcoming Dates for 03 Days Yoga Retreat in Rishikesh"}/>
        
        <PriceGrid/>
        <LogoHeading heading={"Itinerary of 03 Days Yoga Retreat"}/>
        <DailySchedule1/>
        <DailySchedule2/>
        <DailySchedule3/>
        <DailySchedule4/>
        {/* <div className='p-16'>
        <ScheduleDay1/>
        <ScheduleDay2/>
        </div> */}
        <InfiniteIMGAcc/>
        <InfiniteIMGFood/>
        <FAQSection/>
        <Footer/>
    </div>
  ) 
}



const InfiniteIMGAcc = () => {
  return (
    <>

      <div>

        <h1 className='text-4xl m-2 font-bold text-center text-indigo-500 capitalize p-auto'>
          <TypewriterComponent

            options={{
              strings: ['Accomodation'],
              autoStart: true,
              loop: true,
              delay: 36,
              changeDelay: 12,

            }}
          />
        </h1>
      </div>
      <div class="wrapper">
        <div class="itemLeft item1">
          <img src="https://images.unsplash.com/photo-1716369413898-852306c79bcb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemLeft item2">
          <img src="https://images.unsplash.com/photo-1716369413898-852306c79bcb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemLeft item3">
          <img src="https://images.unsplash.com/photo-1716369413898-852306c79bcb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemLeft item4">
          <img src="https://images.unsplash.com/photo-1716369413898-852306c79bcb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemLeft item5">
          <img src="https://images.unsplash.com/photo-1716369413898-852306c79bcb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemLeft item6">
          <img src="https://images.unsplash.com/photo-1716369413898-852306c79bcb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemLeft item7">
          <img src="https://images.unsplash.com/photo-1716369413898-852306c79bcb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemLeft item8">
          <img src="https://images.unsplash.com/photo-1716369413898-852306c79bcb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
      <div class="wrapper">
        <div class="itemRight item1">
          <img src="https://images.unsplash.com/photo-1603361513137-219be38712ed?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemRight item2">
          <img src="https://images.unsplash.com/photo-1603361513137-219be38712ed?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemRight item3">
          <img src="https://images.unsplash.com/photo-1603361513137-219be38712ed?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemRight item4">
          <img src="https://images.unsplash.com/photo-1603361513137-219be38712ed?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemRight item5">
          <img src="https://images.unsplash.com/photo-1603361513137-219be38712ed?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemRight item6">
          <img src="https://images.unsplash.com/photo-1603361513137-219be38712ed?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemRight item7">
          <img src="https://images.unsplash.com/photo-1603361513137-219be38712ed?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemRight item8">
          <img src="https://images.unsplash.com/photo-1603361513137-219be38712ed?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </>
  )
}


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



const InfiniteIMGFood = () => {
  return (
    <>

      <div>

        <h1 className='text-4xl m-2 font-bold text-center text-indigo-500 capitalize p-auto'>
          <TypewriterComponent

            options={{
              strings: ['Healty and Yogic Food'],
              autoStart: true,
              loop: true,
              delay: 36,
              changeDelay: 12,

            }}
          />
        </h1>
      </div>
      <div class="wrapper">
        <div class="itemLeft item1">
          <img src="https://images.unsplash.com/photo-1716369413898-852306c79bcb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemLeft item2">
          <img src="https://images.unsplash.com/photo-1716369413898-852306c79bcb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemLeft item3">
          <img src="https://images.unsplash.com/photo-1716369413898-852306c79bcb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemLeft item4">
          <img src="https://images.unsplash.com/photo-1716369413898-852306c79bcb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemLeft item5">
          <img src="https://images.unsplash.com/photo-1716369413898-852306c79bcb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemLeft item6">
          <img src="https://images.unsplash.com/photo-1716369413898-852306c79bcb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemLeft item7">
          <img src="https://images.unsplash.com/photo-1716369413898-852306c79bcb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemLeft item8">
          <img src="https://images.unsplash.com/photo-1716369413898-852306c79bcb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
      <div class="wrapper">
        <div class="itemRight item1">
          <img src="https://images.unsplash.com/photo-1603361513137-219be38712ed?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemRight item2">
          <img src="https://images.unsplash.com/photo-1603361513137-219be38712ed?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemRight item3">
          <img src="https://images.unsplash.com/photo-1603361513137-219be38712ed?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemRight item4">
          <img src="https://images.unsplash.com/photo-1603361513137-219be38712ed?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemRight item5">
          <img src="https://images.unsplash.com/photo-1603361513137-219be38712ed?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemRight item6">
          <img src="https://images.unsplash.com/photo-1603361513137-219be38712ed?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemRight item7">
          <img src="https://images.unsplash.com/photo-1603361513137-219be38712ed?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="itemRight item8">
          <img src="https://images.unsplash.com/photo-1603361513137-219be38712ed?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </>
  )
}





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
    { time: '5:30', activity: 'Sun rise Excursion At Balkumari Temple' },
    { time: '7:00 - 8:30am', activity: 'Meditation class in Sunrise' },
    { time: '9:30 - 10:00am', activity: 'Breakfast' },
    { time: '10:00 - 12:30am', activity: ' Patna waterfall Trekking' },
    { time: '1:00 - 2:00pm', activity: 'Lunch Time' },
    { time: '2:00 - 4:00pm', activity: 'Rest / Self Study / Audios' },
    { time: '4:00 - 5:00pm', activity: 'Sound healing Session' },
    { time: '6:00 - 6:45pm', activity: 'Mantra / Meditation' },
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
    { time: '6:00', activity: ' Wake Up & Start a new fresh day' },
    { time: '7:00 - 8:15am', activity: ' Body Movement Session' },
    { time: '9:00 - 10:00am', activity: 'Breakfast' },
    { time: '10:00 - 12:30am', activity: 'Excursion – Ram Jhula Tour' },
    { time: '1:00 - 2:00pm', activity: 'Lunch Time' },
    { time: '2:00 - 4:00pm', activity: 'Rest / Self Study / Audios' },
    { time: '4:00 - 5:00pm', activity: 'Mediation' },
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
    { time: '6:00am', activity: 'Wake Up & Start a new fresh day' },
    { time: '7:00am - 8:30am', activity: 'Traditional Hatha' },
    { time: '9:00am - 10:00am', activity: 'Breakfast' },
    { time: '10:00am - 12:30pm', activity: ' Free Time' },
    { time: '1:00pm - 2:00pm', activity: 'Lunch Time' },
    { time: '2:00pm - 3:00pm', activity: 'Self Study / Rest' },
    { time: '4:00pm - 5:00pm ', activity: 'Mediation' },
    { time: '5:00pm - 6:30pm', activity: 'Ganga Aarti' },
    { time: '7:00pm - 8:00pm', activity: 'Dinner Time' },
    { time: '9:00pm ', activity: 'Go to Sleep' },

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
          unique place to practice yoga.
        </p>
        <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl text-center text-balance mt-12">
          Rishikesh | Your Dream Destination for{" "}
          <span className="bg-indigo-300 shadow shadow-gray-100 border rounded-lg text-black">
            <Typewriter
              words={["Yoga!", "Ambience!", "Peace!"]}
              loop={true}
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
          <h1 className="text-4xl font-semibold tracking-tighter text-indigo-600 lg:text-5xl text-balance">
          Subjects/Topics covered in Yoga Retreat
            <span className="text-gray-600"></span>
          </h1>
          <p className="mt-4 text-base font-medium text-gray-500 text-balance">
          Topics/Subjects To Be Covered In This Retreat
          </p>
          <div className="grid mt-12 gap-y-12 gap-x-2 md:grid-cols-2">
            <div>
              <div className="p-2 overflow-hidden border rounded-3xl">
                <img
                  src="https://images.ctfassets.net/1tp0n7niw68j/UDd7ttIlStE9HX3w98A3h/d493f8a20f67b67741d5bdaee36241d2/04.jpg"
                  alt="#"
                  className="w-full h-full mx-auto rounded-2xl"
                />
              </div>
              <div className="mt-4">
                <p className="font-medium text-gray-900">
                Traditional Hatha Yoga (Practical Yoga Classes)
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
                  src="https://miro.medium.com/v2/resize:fit:1400/1*tLnoj0ekQB7foCQiRmM8OQ.jpeg"
                  alt="#"
                  className="w-full h-full mx-auto rounded-2xl"
                />
              </div>
              <div className="px-8 mt-4">
                <p className="font-medium text-gray-900">
                Traditional & An Ancient Meditation (Dhyana)
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
                  src="https://www.yogabasics.com/yogabasics2017/wp-content/uploads/2005/06/chanting-mantras.jpeg"
                  alt="#"
                  className="w-full h-full mx-auto rounded-2xl"
                />
              </div>
              <div className="px-8 mt-4">
                <p className="font-medium text-gray-900">
                Mantra Chanting (Recitation of Sacred Sound)
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
                  src="https://goqii.com/blog/wp-content/uploads/shutterstock_635284154.jpg"
                  alt="#"
                  className="w-full h-full mx-auto rounded-2xl"
                />
              </div>
              <div className="px-8 mt-4">
                <p className="font-medium text-gray-900">
                Pranayama ( Breathing Exercises)
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

export default YogaRetreat3
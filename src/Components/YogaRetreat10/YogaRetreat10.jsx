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
import RetreatForm from '../../Design/RetreatForm'
import { OnePagerSection } from '../YogaRetreat3/YogaRetreat3'
import WhatsappButton from '../Contact/WhatsappButton'



const YogaRetreat10 = () => {
  return (
    <div>
      <Navbar />
      <HeroImage wallpaper={"https://upload.wikimedia.org/wikipedia/commons/7/75/Rishikesh-Lakshman_Jhula_by_Kaustubh_Nayyar.jpg"} Heading={"Welcome to Yog Nagari Rishikesh"} />
      <div className='mt-10 mb-10'>
        <LogoHeading heading={"10 Days Yoga Retreat in Rishikesh Overview"} />
      </div>
      <RetreatForm />
      <TypewriterHeading />
      {/* <OnePagerSection /> */}
      <WhyChoose />
      <OnePagerSection/>
      <Content title={"Daily Yoga Classes"} content={"Immerse yourself in daily rejuvenation for your mind, body, and spirit through our enriching yoga classes. Led by seasoned instructors, our sessions in Rishikesh encompass Hatha Yoga, Meditation, and Pranayama, tailored to suit all levels of experience. Emphasizing precise alignment, mindful breathing, and holistic well-being, these classes offer a transformative experience amidst our serene setting.Our Daily Yoga Classes extend beyond physical postures, embracing a holistic approach to wellness. Explore the integration of breath and movement, fostering a deeper mind-body connection. These sessions serve as a sanctuary for self-reflection, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that nurtures harmonious balance in your life, regardless of whether you're a seasoned yogi or a beginner.Step onto the mat and embark on a journey of balance, flexibility, and inner peace with us. Experience the essence of yoga as it enhances your overall well-being, inspiring rejuvenation and elevation in every aspect of your life."} img={"https://kanatalheights.com/wp-content/uploads/2022/06/yoga-capital-rishikesh.jpg"} />
      <Content title={"Sound Healing Session"} content={"Experience the profound benefits of our Sound Healing Sessions, designed to harmonize your mind, body, and spirit. Led by skilled practitioners, these sessions in Rishikesh offer a unique blend of ancient healing techniques and modern therapeutic practices. Through the vibrational frequencies of sound, including Tibetan singing bowls and other instruments, you will embark on a transformative journey of relaxation and inner peace.Our Sound Healing Sessions go beyond traditional therapies, aiming to restore balance and promote holistic well-being. Each session is tailored to induce deep relaxation, release tension, and rejuvenate your energy centers. Join us in our tranquil setting in Rishikesh to discover the therapeutic power of sound, allowing you to align with your natural rhythms and find profound serenity.Whether you are seeking stress relief, emotional healing, or simply a space to unwind, our Sound Healing Sessions offer a nurturing environment for personal growth and renewal. Embrace the healing vibrations and embark on a journey towards greater harmony and well-being."} img={"https://hips.hearstapps.com/hmg-prod/images/woman-playing-tibetan-singing-bowl-in-sound-healing-royalty-free-image-1673608575.jpg"} />
      <Content title={"Body Movement Session"} content={"Engage in our invigorating Body Movement Sessions, meticulously crafted to enhance flexibility, strength, and overall vitality. Led by expert instructors in Rishikesh, these sessions encompass a variety of movement disciplines, from dynamic stretching to fluid dance-inspired exercises.Experience a holistic approach to fitness as you explore the art of mindful movement. Our sessions focus on fluidity, precision, and alignment, empowering you to reconnect with your body's natural rhythms. Whether you're a beginner or seasoned practitioner, our Body Movement Sessions cater to all levels, fostering a supportive environment for exploration and growth.Join us in Rishikesh, amidst serene surroundings and expert guidance, to discover the joy of movement. Each session is designed to awaken your senses, improve posture, and cultivate a deeper awareness of your body. Embrace the transformative power of movement and embark on a journey towards enhanced well-being and vitality."} img={"https://live.staticflickr.com/3018/2804103595_1cf4f96e6d_b.jpg"} />
      <Content title={"Kirtan Session"} content={"Experience the soul-stirring melodies of our Kirtan Sessions, a profound journey into the heart of devotional music and spiritual connection. Held in the tranquil ambiance of Rishikesh, these sessions are led by seasoned musicians and spiritual guides, creating an atmosphere of reverence and harmony.Join us as we chant sacred mantras and bhajans, uplifting the spirit and fostering a sense of community. Kirtan is more than music; it is a transformative practice that awakens the soul and invites inner peace. Whether you're new to Kirtan or a seasoned participant, our sessions welcome everyone to explore the power of sound and devotion.Immerse yourself in the rhythmic vibrations of traditional instruments and heartfelt vocals, transcending barriers and deepening your connection with the divine. Our Kirtan Sessions offer a sanctuary for spiritual growth, healing, and joyous celebration, leaving you refreshed and uplifted with each melodious chant."} img={"https://kanatalheights.com/wp-content/uploads/2022/06/yoga-capital-rishikesh.jpg"} />
      <Content title={"Ayurvedic Therapy / Massage"} content={"Embark on a journey of rejuvenation and healing with our Ayurvedic Therapy and Massage sessions, meticulously designed to restore balance and vitality to your mind, body, and spirit. Nestled in the serene surroundings of Rishikesh, these sessions are guided by skilled therapists trained in the ancient principles of Ayurveda.Experience the profound benefits of traditional Ayurvedic treatments tailored to your unique constitution and wellness goals. From soothing Abhyanga massages to detoxifying Panchakarma therapies, each session is crafted to harmonize your doshas and promote holistic well-being.Our Ayurvedic Therapy sessions go beyond relaxation, offering therapeutic remedies that address specific health concerns such as stress, fatigue, and muscle tension. Through the use of natural oils, herbs, and healing touch, these treatments stimulate circulation, cleanse toxins, and rejuvenate your entire being.Join us at Mahakaal Yogpeeth for a transformative Ayurvedic experience that revitalizes your senses, nurtures inner harmony, and restores vitality to your life. Whether you seek rejuvenation, detoxification, or simply a moment of profound relaxation, our Ayurvedic Therapy sessions provide a sanctuary for healing and renewal."} img={"https://professionalskincareguide.com/wp-content/uploads/2021/04/Ayurvedic-Massage-Featured.jpg"} />
      <Content title={"Sunrise Excursion"} content={"Embark on a serene and uplifting journey with our Sunrise Excursion experience at Mahakaal Yogpeeth in Rishikesh. As the first rays of sunlight gently illuminate the Himalayan foothills and the sacred Ganges River, immerse yourself in the tranquil beauty of dawn.Join our guided excursion to witness the breathtaking spectacle of nature awakening. Feel the cool morning breeze and listen to the gentle flow of the river as you meditate or practice yoga amidst this picturesque setting. Our experienced guides will lead you through pathways that offer panoramic views of the surrounding mountains and lush greenery.Capture the essence of a new day dawning as you connect with the natural world and embrace the peaceful energy of sunrise. Whether you seek spiritual introspection, a moment of contemplation, or simply the beauty of nature unfolding, our Sunrise Excursion promises a memorable experience that rejuvenates the soul and invigorates the senses.Join us at Mahakaal Yogpeeth for a transformative journey at sunrise, where each moment offers an opportunity for reflection, renewal, and connection with the pristine beauty of Rishikesh and the Himalayas."} img={"https://images.myguide-cdn.com/bali/companies/bali-full-package-jeep-sunrise-expedition-with-hot-spring/large/bali-full-package-jeep-sunrise-expedition-with-hot-spring-3465276.jpg"} />
      <Content title={"Sunset Excursion"} content={"Embark on a captivating journey with our Sunset Excursion at Mahakaal Yogpeeth in Rishikesh, where the tranquil beauty of nature meets spiritual serenity. As the sun begins its descent behind the majestic Himalayan foothills and casts a golden hue over the sacred Ganges River, immerse yourself in this awe-inspiring spectacle.Join our guided excursion to witness the breathtaking colors of the evening sky and the peaceful ambiance of dusk. Guided by experienced facilitators, stroll along pathways that offer panoramic views of the surrounding mountains and lush greenery. Feel the gentle breeze and listen to the soothing sounds of the flowing river as you meditate or practice yoga amidst nature's embrace.Capture the essence of tranquility and introspection as you connect with the natural world and embrace the peaceful energy of sunset. Whether you seek spiritual rejuvenation, a moment of reflection, or simply the beauty of nature unfolding, our Sunset Excursion promises a profound experience that revitalizes the spirit and nurtures the soul.Join us at Mahakaal Yogpeeth for an unforgettable journey at sunset, where each moment invites you to pause, reflect, and appreciate the serene beauty of Rishikesh and the Himalayas."} img={"https://www.etnaexperience.com/wp-content/uploads/2019/01/trekking-sulletna-scaled.jpg"} />
      <Content title={"World famous Ganga Arti"} content={"Experience the world-renowned Ganga Aarti, a mesmerizing ritual that celebrates the sacred Ganges River, in the heart of Rishikesh at Mahakaal Yogpeeth. This ancient ceremony takes place at the banks of the Ganges, where priests perform intricate rituals with fire, lamps, and chanting, creating a spiritual ambiance that resonates with divine energy.Join us for this soul-stirring event as we gather at the riverbank to witness the evening Ganga Aarti. As the sun sets behind the Himalayas, immerse yourself in the enchanting melodies of hymns and the rhythmic movements of the priests. Feel the profound connection to the elements and the spiritual significance of the Ganges, revered as the lifeline of India's spiritual heritage.Engage in this deeply moving experience that transcends cultures and beliefs, offering a moment of reverence and reflection amidst the serene atmosphere of Rishikesh. Whether you seek spiritual enlightenment, cultural immersion, or a transformative journey, the Ganga Aarti at Mahakaal Yogpeeth promises an unforgettable encounter with the divine essence of the Ganges River."} img={"https://static.toiimg.com/photo/106179549.cms"} />
      <Content title={"Beatles Ashram Tour ( Optional )"} content={"Embark on an optional journey through music and history with the Beatles Ashram Tour at Mahakaal Yogpeeth in Rishikesh. This iconic site, also known as Chaurasi Kutia, holds a special place in cultural history as the former retreat of the legendary band, The Beatles.During this guided tour, explore the serene surroundings that once inspired the band's creativity and spiritual exploration. Wander through the tranquil ashram grounds, adorned with graffiti and remnants of its vibrant past. Learn about the ashram's significance in the evolution of Western interest in Eastern spirituality and yoga.Experience a blend of nostalgia and spiritual discovery as you delve into the Beatles' transformative journey in Rishikesh. Whether you're a fan of their music or drawn to the spiritual atmosphere, the Beatles Ashram Tour offers a unique glimpse into a cultural landmark where music, art, and spirituality converge."} img={"https://rishikesh.app/_vercel/image?url=%2Fte%2Fattractions%2Fbeatles-ashram%2Fbeatles-ashram-banner.jpeg&w=1280&q=100"} />
      <Content title={"Cave Exploring"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://rishikeshdaytour.com/blog/wp-content/uploads/2024/03/Best-Places-To-Visit-In-Dehradun-Why-Robbers-Cave.jpg"} />
      <Content title={"Waterfall Trekking"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://i.ibb.co/X3sQZBt/waterfall-Treking.jpg"} />
      <Content title={"⁠Himalayas Sightseeing"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://i.ibb.co/wCnDB53/gallery6.jpg"} />
      <Content title={"Ram Jhula / Laxman jhula Tour"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://www.justahotels.com/wp-content/uploads/2022/09/image-44.png"} />
      <Content title={"Temple Visiting"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://i.ibb.co/1Q0TfDV/temple-Visiting.jpg"} />
      <Content title={"Devprayag Sanagam Visit ( Optional )"} content={"Indulge in a daily rejuvenation of mind, body, and spirit with our yoga classes. Led by experienced instructors, our classes encompass Hatha Yoga, Meditation, and Pranayama. Tailored for all levels, these sessions emphasize precise alignment, mindful breathing, and holistic well-being. With personalized guidance and a serene setting in Rishikesh, our Daily Yoga Classes offer a transformative experience, fostering a deeper connection with yourself and the essence of yoga. Join us on the mat for a journey of balance, flexibility, and inner peace.Our Daily Yoga Classes extend beyond physical postures, offering a holistic approach to wellness. Embrace the mind-body connection as you explore the integration of breath and movement. These classes provide a sanctuary for self-reflection and rejuvenation, promoting stress relief and mental clarity. Join our community in Rishikesh for a daily ritual that goes beyond the mat, nurturing a harmonious balance in your life. Whether you're a seasoned yogi or a beginner, our Daily Yoga Classes are designed to inspire, rejuvenate, and elevate your overall well-being."} img={"https://www.ragaontheganges.com/assets/img/devprayag-package/1.jpg"} />
      <PriceGrid heading={"Normal Rooms included in this package"} inr={"18000rs"} usd={"300$"} sub1={"Indian"} sub2={"Foreigners"} />
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
      <WhatsappButton/>
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
        
At Mahakaal Yogpeeth, we redefine the essence of a yoga school in Rishikesh. It's not just a place; it's a sanctuary that embraces you like family, offering a sense of belonging far from home. Our mission is to share the profound lineage of yoga, inspiring and nurturing practitioners worldwide. We believe in the continuous pursuit of our dreams, guided by our principles of knowledge sharing and community upliftment. Our meticulously crafted yoga certification courses are designed to impart deep understanding of yoga philosophy and practice. With a focus on Hatha Yoga and Ashtanga Vinyasa yoga, our programs empower students to hone their skills and become certified yoga instructors.

We proudly hold international certification from Yoga Alliance USA, ensuring global recognition and adherence to the highest standards of yoga education. Our primary goal is to elevate yoga training to its zenith, fostering skilled teachers who can spread the essence of yoga worldwide. Beyond physical health, we strive to alleviate societal issues like anxiety and depression through traditional yoga practices, addressing personal and familial challenges with compassion and authenticity.

Nestled in the serene foothills of the Himalayas, Rishikesh serves as our tranquil backdrop, renowned as the Yoga Capital of the World and the gateway to the Himalayas. Whether you join our 200 Hour, 300 Hour, or 500-hour Yoga Teacher Training programs, you'll experience a transformative journey into yoga's depths. Our holistic approach encompasses yoga philosophy, anatomy, and spiritual growth, offering not just a training but a profound life-changing experience.

Mahakaal Yogpeeth invites you to embark on this transformative journey, where each step leads you closer to a deeper understanding of yoga and yourself.
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
        Rishikesh, nestled at the gateway of the Himalayas in Uttarakhand, is renowned as a spiritual haven and is often referred to as the "Yoga Capital of the World." Each year, the Uttarakhand tourism hosts an International Yoga Festival in the first week of March, attracting thousands of practitioners from over 50 countries. This festival offers a unique opportunity to participate in yoga classes led by renowned teachers amidst the serene backdrop of Rishikesh. The city boasts numerous yoga institutes, including Mahakaal Yogpeeth, committed to preserving the authenticity of yoga.

Mahakaal Yogpeeth was founded with the vision of providing authentic yoga training in Rishikesh, aiming to rejuvenate both the body and soul. Rishikesh's spiritual significance stems from its history as a place where great sages and yogis have practiced for centuries, infusing it with profound energy. Situated at the foothills of the Himalayas, Rishikesh is graced by the holy Ganges, flowing from its source at Gangotri, just 250 kilometers away. According to Vedic and Hindu traditions, bathing in the sacred Ganges is believed to cleanse one of impurities and sins, making Rishikesh a place of immense spiritual importance.

Surrounded by ashrams and temples, Rishikesh is a hub of continuous yoga activities and rituals. Its ancient temples and caves bear witness to its rich cultural heritage. Every year, pilgrimages commence from Rishikesh to some of the oldest temples in the Himalayas. The city's allure lies in its ability to deeply touch the hearts and minds of visitors, transforming them for the better.


Rishikesh has earned its reputation as a premier spiritual destination due to its myriad yoga and meditation schools, ashrams, and places of worship. People from around the world flock here to seek harmony and enlightenment through yoga and meditation. It serves as an ideal destination to experience India's ancient and traditional forms of yoga in an eco-friendly and tranquil environment that captivates spiritual seekers worldwide.

Come and immerse yourself in the spirituality of the holy Ganges, the serenity of the ashrams and yogashalas, and the iconic landmarks like Ram and Laxman Jhulas. Rishikesh offers not only spiritual rejuvenation but also exciting adventure sports such as trekking, river rafting, bungee jumping, jungle safaris, and camping. Visit this heavenly place to take a break from your hectic life and savor the divine allure of Rishikesh.
        </p>
      </div>
    </section>
  );
};

export default YogaRetreat10

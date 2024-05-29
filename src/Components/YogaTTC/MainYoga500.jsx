import React from "react";
import Navbar from "../../MainComponents/Navbar";
import PriceGrid from "../../Pages/Parts/PriceGrid";
import Footer from "../../MainComponents/Footer";
import LogoHeading from "../../Pages/LogoHeading";
import { Hero } from "../../Pages/Parts/Hero";
import MainForm from "../FormArea/MainForm";
import AiCard from "../Gallery/AiCard";
import MainGallery from "../Gallery/MainGallery";
import ImageGallery from "../../Design/ImageGallery";
import { Card } from "@chakra-ui/react";
import MovingCards from "../../MainComponents/MovingCards";
import { MainAbout } from "../AboutUs/MainAbout";
import GallerySection from "../../Pages/Parts/GallerySection";
import ImgScroll from "../../Pages/Parts/ImgScroll";
import Content from "../AboutUs/TextArea";
import { Typewriter } from "react-simple-typewriter";
import  { useState, useEffect } from 'react';



const MainYoga500 = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="mt-28">
        <LogoHeading heading="Upcoming classes" />
      </div>
   
      <Content />
      <TypewriterHeading />
      <YoutubeGrids />
      <OnePagerSection />
      <DailySchedule />
      <FoldBlog />
      <FAQSection />
      <PriceGrid />
      <FullGallery />
      <Carousel />
      <Footer />
    </div>
  );
};

export default MainYoga500;




import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    quote: "This yoga teacher training was life-changing. The instructors were knowledgeable and supportive.",
    name: "John Doe",
    title: "Yoga Enthusiast",
    image: "https://i.pinimg.com/564x/1a/2b/3c/1a2b3c4d5e6f7g8h9i0j.jpg" // Replace with actual Pinterest image URL
  },
  {
    quote: "I learned so much about yoga and myself. The environment was perfect for growth.",
    name: "Jane Smith",
    title: "Aspiring Yoga Teacher",
    image: "https://i.pinimg.com/564x/2b/3c/4d/2b3c4d5e6f7g8h9i0j1k.jpg" // Replace with actual Pinterest image URL
  },
  {
    quote: "An amazing experience! The curriculum was well-rounded and the community was wonderful.",
    name: "Emily Johnson",
    title: "Yoga Practitioner",
    image: "https://i.pinimg.com/564x/3c/4d/5e/3c4d5e6f7g8h9i0j1k2l.jpg" // Replace with actual Pinterest image URL
  },
  {
    quote: "This yoga teacher training was life-changing. The instructors were knowledgeable and supportive.",
    name: "John Doe",
    title: "Yoga Enthusiast",
    image: "https://i.pinimg.com/564x/1a/2b/3c/1a2b3c4d5e6f7g8h9i0j.jpg" // Replace with actual Pinterest image URL
  },
  {
    quote: "I learned so much about yoga and myself. The environment was perfect for growth.",
    name: "Jane Smith",
    title: "Aspiring Yoga Teacher",
    image: "https://i.pinimg.com/564x/2b/3c/4d/2b3c4d5e6f7g8h9i0j1k.jpg" // Replace with actual Pinterest image URL
  },
  {
    quote: "An amazing experience! The curriculum was well-rounded and the community was wonderful.",
    name: "Emily Johnson",
    title: "Yoga Practitioner",
    image: "https://i.pinimg.com/564x/3c/4d/5e/3c4d5e6f7g8h9i0j1k2l.jpg" // Replace with actual Pinterest image URL
  },
  // Add more testimonials as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Testimonials</h2>
      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          initial={{ x: '0%' }}
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full flex-shrink-0 p-4">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center h-72 w-full transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-4"
                />
                <div className="flex items-center mb-4">
                  <FaQuoteLeft className="text-gray-400 mr-2" />
                  <p className="text-gray-600 italic text-sm md:text-base">{testimonial.quote}</p>
                  <FaQuoteRight className="text-gray-400 ml-2" />
                </div>
                <p className="text-gray-800 font-semibold text-sm md:text-base">{testimonial.name}</p>
                <p className="text-gray-500 text-xs md:text-sm">{testimonial.title}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

import { FaClock } from 'react-icons/fa';
import { GrYoga } from 'react-icons/gr';

const DailySchedule = () => {
  const schedule = [
    { time: '6:30 - 7:00am', activity: 'Pranayama' },
    { time: '7:00 - 8:30am', activity: 'Ashtanga Yoga (Mysore & Led class)' },
    { time: '8:30 - 9:30am', activity: 'Breakfast' },
    { time: '9:30 - 10:00am', activity: 'Break Time' },
    { time: '10:00 - 11:30am', activity: 'Yoga Anatomy' },
    { time: '11:30 - 12:00pm', activity: 'Break Between Sessions' },
    { time: '12:00 - 1:00pm', activity: 'Alignment & Adjustment' },
    { time: '1:00 - 2:00pm', activity: 'Lunch Time' },
    { time: '2:00 - 3:00pm', activity: 'Self Study / Rest' },
    { time: '3:00 - 4:00pm', activity: 'Break Between Sessions' },
    { time: '4:15 - 5:45pm', activity: 'Hatha Yoga' },
    { time: '6:00 - 6:45pm', activity: 'Mantra / Meditation' },
    { time: '7:15 - 8:00pm', activity: 'Dinner Time' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Daily Schedule Of 200 Hour Yoga TTC In Bali</h2>
      <h3 className="text-xl font-semibold text-center mb-6 text-gray-600">200 Hour Yoga Teacher Training In Bali Course Schedule</h3>
      <p className="text-justify mb-8 text-gray-500">
        Our Curriculum is articulately formulated in order to incorporate both the theoretical and practical sessions. Along with providing free time to the students to reflect, analyze, and retrospect on what they have learned so far, they will also get time to explore them. Mirayogashala retains academic excellence and professionalism in the school and expects the students to be receptive to the change.
      </p>
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


import ReactPlayer from "react-player";

const YoutubeGrids = () => {
  const videoUrl1 = "https://www.youtube.com/watch?v=aC_EFwr6GJs";
  const videoUrl2 = "https://www.youtube.com/watch?v=aC_EFwr6GJs";

  return (
    <>
      <div className="flex flex-wrap justify-between bg-gray-100 p-4">
        <div className="p-2 w-full sm:w-1/2 lg:w-1/2 xl:w-1/2">
          <div
            className="relative bg-gray-200 rounded-lg overflow-hidden"
            style={{ paddingTop: "56.25%" }} // 16:9 Aspect Ratio for widescreen
          >
            <ReactPlayer
              className="absolute top-0 left-0"
              url={videoUrl1}
              width="100%"
              height="100%"
              controls
            />
          </div>
        </div>
        <div className="p-2 w-full sm:w-1/2 lg:w-1/2 xl:w-1/2">
          <div
            className="relative bg-gray-200 rounded-lg overflow-hidden"
            style={{ paddingTop: "56.25%" }} // 16:9 Aspect Ratio for widescreen
          >
            <ReactPlayer
              className="absolute top-0 left-0"
              url={videoUrl2}
              width="100%"
              height="100%"
              controls
            />
          </div>
        </div>
      </div>
    </>
  );
};




export const OnePagerSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="px-8 mx-auto max-w-7xl md:px-12 lg:px-32">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tighter text-green-800 lg:text-5xl text-balance">
            Building one pagers together
            <span className="block text-gray-600">wherever and anywhere</span>
          </h1>
          <p className="mt-4 text-base font-medium text-gray-600 text-balance">
            Control and added security. With decentralization, users have more
            control over their data and transactions, and the platform is less
            susceptible to malicious attacks.
          </p>
        </div>
        <div className="grid gap-x-8 gap-y-12 mt-12 md:grid-cols-2">
          <div className="bg-gray-50 p-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="overflow-hidden rounded-3xl border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1780&q=80"
                alt="Zen Image"
                className="mx-auto w-full h-48 object-cover rounded-2xl"
              />
            </div>
            <div className="mt-4">
              <p className="font-medium text-green-800">No warranty disclaimer</p>
              <p className="mt-2 text-sm text-gray-600">
                The license comes with no warranties. The licensor provides the work "as is," and users must use it at their own risk.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="overflow-hidden rounded-3xl border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1780&q=80"
                alt="Zen Image"
                className="mx-auto w-full h-48 object-cover rounded-2xl"
              />
            </div>
            <div className="mt-4">
              <p className="font-medium text-green-800">Modification Freedom</p>
              <p className="mt-2 text-sm text-gray-600">
                You can adapt, remix, transform, and build upon the licensed work.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="overflow-hidden rounded-3xl border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1780&q=80"
                alt="Zen Image"
                className="mx-auto w-full h-48 object-cover rounded-2xl"
              />
            </div>
            <div className="mt-4">
              <p className="font-medium text-green-800">Commercial use allowed</p>
              <p className="mt-2 text-sm text-gray-600">
                You are allowed to use the licensed work for both non-commercial and commercial purposes.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="overflow-hidden rounded-3xl border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1780&q=80"
                alt="Zen Image"
                className="mx-auto w-full h-48 object-cover rounded-2xl"
              />
            </div>
            <div className="mt-4">
              <p className="font-medium text-green-800">Share alike (SA) absence</p>
              <p className="mt-2 text-sm text-gray-600">
                The CC BY 3.0 License does not include a "Share Alike" (SA) provision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
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





import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import FullGallery from "../Video Gallery/GridGallery";
import Form from "../../Design/Form";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Jane Cooper"}
              title={"CEO at ABC Corporation"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Intuitive Design</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Jane Cooper"}
              title={"CEO at ABC Corporation"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Jane Cooper"}
              title={"CEO at ABC Corporation"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}


const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

export function FoldBlog() {
  return (
    <div className="py-24 bg-gray-50 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Yoga Testimonials
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Hear from our satisfied clients about their yoga journey.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 pt-10 mx-auto mt-10 max-w-2xl border-t border-gray-200 sm:pt-16 sm:mt-16 lg:grid-cols-3 lg:mx-0 lg:max-w-none">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col justify-between items-start max-w-xl p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex gap-x-4 items-center text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 py-1.5 px-3 font-medium text-green-600 bg-green-50 rounded-full hover:bg-green-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="relative group mt-4">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-green-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600 line-clamp-3">
                  {post.description}
                </p>
              </div>
              <div className="flex relative gap-x-4 items-center mt-8">
                <img
                  src={post.author.imageUrl}
                  alt={post.author.name}
                  className="w-10 h-10 bg-gray-50 rounded-full"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}


const TypewriterHeading = () => {
  return (
    <section className="py-24 px-4 mx-auto max-w-7xl md:px-12 lg:px-32">
      <div>
        <h1 className="text-3xl font-semibold tracking-tighter text-center text-gray-900 sm:text-4xl lg:text-5xl text-balance">
          Yoga School in Rishikesh - Mahakaal{" "}
          <span className="text-black bg-indigo-300 rounded-lg border shadow shadow-gray-100 px-2">
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
        <p className="mt-4 text-sm font-medium text-gray-500 sm:text-base lg:text-lg text-balance">
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
        <h1 className="mt-12 text-3xl font-semibold tracking-tighter text-center text-gray-900 sm:text-4xl lg:text-5xl text-balance">
          Rishikesh | Your Dream Destination for{" "}
          <span className="text-black bg-indigo-300 rounded-lg border shadow shadow-gray-100 px-2">
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
        <p className="mt-4 text-sm font-medium text-gray-500 sm:text-base lg:text-lg text-balance">
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


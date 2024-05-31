import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Michael Andreuzza",
    title: "Creator of Windstatic.com",
    image: "https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "Being in the financial industry, we were always looking for ways to enhance our transactions' security and efficiency.",
  }, {
    name: "Michael Andreuzza",
    title: "Creator of Windstatic.com",
    image: "https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "Being in the financial industry, we were always looking for ways to enhance our transactions' security and efficiency.",
  }, {
    name: "Michael Andreuzza",
    title: "Creator of Windstatic.com",
    image: "https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "Being in the financial industry, we were always looking for ways to enhance our transactions' security and efficiency.",
  }, {
    name: "Michael Andreuzza",
    title: "Creator of Windstatic.com",
    image: "https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "Being in the financial industry, we were always looking for ways to enhance our transactions' security and efficiency.",
  }, {
    name: "Michael Andreuzza",
    title: "Creator of Windstatic.com",
    image: "https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "Being in the financial industry, we were always looking for ways to enhance our transactions' security and efficiency.",
  }, {
    name: "Michael Andreuzza",
    title: "Creator of Windstatic.com",
    image: "https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "Being in the financial industry, we were always looking for ways to enhance our transactions' security and efficiency.",
  }, {
    name: "Michael Andreuzza",
    title: "Creator of Windstatic.com",
    image: "https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "Being in the financial industry, we were always looking for ways to enhance our transactions' security and efficiency.",
  }, {
    name: "Michael Andreuzza",
    title: "Creator of Windstatic.com",
    image: "https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "Being in the financial industry, we were always looking for ways to enhance our transactions' security and efficiency.",
  },
  {
    name: "Gege Piazza",
    title: "Creator of Pizza Piazza",
    image: "https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "Implementing Semplice's blockchain technology has been a game-changer for our supply chain management.",
  },
  {
    name: "Jenson Button",
    title: "Founder of Benji and Tom",
    image: "https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "We were initially hesitant about integrating blockchain technology into our existing systems.",
  },
  // Add more testimonials as needed
];

export const TeacherCard = () => {
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 0.5) % testimonials.length);
    }, 600000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({ x: `-${progress * 1}%`, transition: { duration: 120, ease: "easeInOut" } });
  }, [progress, controls]);

  return (
    <section className="bg-gray-100 py-12">
      <div className="px-4 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div className="flex flex-col w-full">
          <div
            className="flex flex-col w-full"
            aria-labelledby="carousel-label"
            role="region"
            tabIndex="0"
          >
            <h2 className="sr-only" id="carousel-label">
              Carousel
            </h2>
            <span className="sr-only" id="carousel-content-label">
              Carousel
            </span>
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  className="flex w-full"
                  ref={sliderRef}
                  animate={controls}
                  initial={{ x: "0%" }}
                  key={progress}
                >
                  {testimonials.concat(testimonials).map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-2"
                    >
                      <figure className="relative flex flex-col justify-between h-full max-w-xs p-6 mx-auto bg-white border shadow-lg rounded-2xl">
                        <figcaption className="relative flex flex-col justify-between items-center">
                          <img
                            alt={testimonial.name}
                            src={testimonial.image}
                            className="object-cover mx-auto rounded-full w-24 h-24 grayscale"
                          />
                          <div className="mt-4 text-center">
                            <div className="font-semibold text-gray-900 text-lg">
                              {testimonial.name}
                            </div>
                            <div className="mt-1 text-sm text-gray-500">
                              {testimonial.title}
                            </div>
                          </div>
                        </figcaption>
                        <blockquote className="mt-4 text-center">
                          <p className="text-base font-medium text-gray-500">
                            {testimonial.quote}
                          </p>
                        </blockquote>
                      </figure>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherCard;

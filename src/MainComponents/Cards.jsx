import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../Card.css"; // Ensure this path is correct

const Cards = () => {
  const initialImages = [
    {
      id: 1,
      url: "https://i.pinimg.com/236x/cf/8b/15/cf8b151b97a22739420bed84aaa4703d.jpg",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/236x/cf/8b/15/cf8b151b97a22739420bed84aaa4703d.jpg",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/236x/cf/8b/15/cf8b151b97a22739420bed84aaa4703d.jpg",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/236x/cf/8b/15/cf8b151b97a22739420bed84aaa4703d.jpg",
    },
    {
      id: 5,
      url: "https://i.pinimg.com/236x/cf/8b/15/cf8b151b97a22739420bed84aaa4703d.jpg",
    },
    {
      id: 6,
      url: "https://i.pinimg.com/236x/cf/8b/15/cf8b151b97a22739420bed84aaa4703d.jpg",
    },
    {
      id: 7,
      url: "https://i.pinimg.com/236x/cf/8b/15/cf8b151b97a22739420bed84aaa4703d.jpg",
    },
    {
      id: 8,
      url: "https://i.pinimg.com/236x/cf/8b/15/cf8b151b97a22739420bed84aaa4703d.jpg",
    },
  ];

  const [images, setImages] = useState(initialImages);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
        const maxScrollLeft = scrollWidth - clientWidth;

        if (scrollLeft >= maxScrollLeft) {
          setImages((prevImages) => [...prevImages, ...initialImages]);
          scrollContainer.scrollLeft = 0; // Reset the scroll position
        }
      }
    };

    const interval = setInterval(() => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1; // Adjust the scroll speed as needed
        handleScroll();
      }
    }, 20); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="flex rounded-lg w-full h-full text-center border border-gradient from-blue-800 via-blue-700 to-rose-950 text-white">
      <motion.div
        ref={scrollContainerRef}
        className="scroll-container"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 40, // Adjust duration based on the number of images
          ease: "linear",
        }}
      >
        {images.map((d, index) => (
          <div key={index}>
            <img src={d.url} alt={`pfp.img-${d.id}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Cards;

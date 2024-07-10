import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ai1, Ai2, Ai3, Ai4, Ai5 } from '../../utils';

const AiCard = ({title}) => {
  const initialCards = [
    Ai1,
    Ai2,
    Ai3,
    Ai4,
    Ai5,
  ];

  const [cards, setCards] = useState(initialCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(450);
  const [cardHeight, setCardHeight] = useState(550);

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      moveCard();
    }, 4000);
    return () => clearInterval(autoplayInterval);
  }, []);

  const moveCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handleCardClick = () => {
    moveCard();
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 640) {
        setCardWidth(300);
        setCardHeight(400);
      } else {
        setCardWidth(400);
        setCardHeight(500);
      }
    };

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className=" mt-36 md:mt-0 mb-24 min-h-screen flex items-center justify-center text-black">
      <main className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center min-h-screen">
        <div className="content p-10 lg:p-20 text-center lg:text-left">
          <h1 className="font-dancing-script text-4xl lg:text-6xl font-bold bg-clip-text text-indigo-500 bg-gradient-to-r from-pink-400 to-yellow-400 mb-8">
            {title}
          </h1>
          <p className="text-lg lg:text-xl mb-8">
            Welcome content
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, magni blanditiis! Eaque hic dolorem exercitationem voluptatem veritatis accusamus, assumenda dicta, quibusdam repudiandae eum cumque natus, iusto omnis dolor aspernatur nostrum.
          </p>
          <button className="btn font-medium  text-black  bg-indigo-500  font-semibold py-2 px-6 rounded shadow-md hover:shadow-lg transition transform hover:scale-95">
            Explore More
          </button>
        </div>
        <div className="stack relative w-full h-96 lg:h-auto flex justify-center items-center" style={{ top: '10%' }}>
          <AnimatePresence>
            {cards.map((src, index) => (
              <motion.div
                key={index}
                className={`card absolute ${index === currentIndex ? 'z-10' : 'z-0'}`}
                onClick={handleCardClick}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: index === currentIndex ? 0 : -300, opacity: index === currentIndex ? 1 : 0 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transform: `translate(-50%, -50%) scale(${index === currentIndex ? 1.05 : 1})`,
                }}
              >
                <img src={src} alt={`Card ${index}`} className="w-full h-full object-cover rounded-2xl lg:w-300px h-400px" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default AiCard;

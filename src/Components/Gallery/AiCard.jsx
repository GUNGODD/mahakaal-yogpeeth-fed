import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AiCard = () => {
  const initialCards = [
    "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/a36d2695-58f8-4644-9e19-71988334e345",
    "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/9f9148ad-74c2-4ebc-a769-bb90fec7b9a5",
    "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/ff35104e-3a7e-458f-8077-7ea2780706fa",
    "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/060546fb-1cbb-428e-b48d-eae2711a0c83",
    "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7feb903b-33f7-4326-90eb-a4f54c86c68e",
    "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/417d1d6b-4100-4419-9e01-37561a354b80",
  ];

  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      moveCard();
    }, 4000);
    return () => clearInterval(autoplayInterval);
  }, []); // Empty dependency array to run only once

  const moveCard = () => {
    setCards(prevCards => {
      const newCards = [...prevCards];
      const lastCard = newCards.pop();
      newCards.unshift(lastCard);
      return newCards;
    });
  };

  const handleCardClick = (index) => {
    if (index === cards.length - 1) {
      moveCard();
    }
  };

  return (
    <div className="bg- min-h-screen flex items-center justify-center text-black">
      <main className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center min-h-screen">
        <div className="content p-10 lg:p-20 text-center lg:text-left">
          <h1 className="font-dancing-script text-4xl lg:text-6xl font-bold bg-clip-text text-indigo-500 bg-gradient-to-r from-pink-400 to-yellow-400 mb-8">
            heading or title goofy
          </h1>
          <p className="text-lg lg:text-xl mb-8">
            Welcome content
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, magni blanditiis! Eaque hic dolorem exercitationem voluptatem veritatis accusamus, assumenda dicta, quibusdam repudiandae eum cumque natus, iusto omnis dolor aspernatur nostrum.
          </p>
          <button className="btn font-medium  text-black  bg-indigo-500  font-semibold py-2 px-6 rounded shadow-md hover:shadow-lg transition transform hover:scale-95">
            Explore More
          </button>
        </div>
        <div className="stack relative w-full h-96 lg:h-auto flex justify-center items-center">
          {cards.map((src, index) => (
            <motion.div
              key={index}
              className={`card absolute ${index === cards.length - 1 ? 'z-10 scale-105 shadow-lg' : 'z-0'}`}
              onClick={() => handleCardClick(index)}
              style={{
                top: '50%',
                // Change the left position to adjust the gap between images
                left: `calc(50% + ${(index - (cards.length - 1)) * 30}px)`,
                width: '300px',
                height: '400px',
                transform: `translate(-50%, -50%) ${index === cards.length - 1 ? 'scale(1.05)' : 'scale(1)'}`,
              }}
              whileHover={{ scale: 1.05 }} // Scale up on hover
              transition={{ duration: 0.5 }} // Transition duration
            >
              <img src={src} alt={`Card ${index}`} className="w-full h-full object-cover rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default AiCard;

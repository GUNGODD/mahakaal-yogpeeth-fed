import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import img1 from "../assets/glimpse/teachers/img1.jpg"

const ShuffleHero = () => {

  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-600 font-medium">
        Welcome to Mahakaal Yogpeeth
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          The Best Yoga School in Rishikesh
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus Sad.
        </p>
        <a 
          href="/enroll" 
           
          className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-65"
        >
          Enroll now!!
        </a>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://i.ibb.co/VTdgctp/bodymove1.jpg",
  },
  {
    id: 2,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOIpaGdsBSiNkfwRNkS2HvOiCO_UMbyk7iA&s",
  },

  {
    id: 3,
    src: "https://preview.redd.it/september-batch-yttc-rishikesh-india-v0-gjto0l4jpyq91.jpg?width=640&crop=smart&auto=webp&s=714465b16b4d9913522f90e611deb434d2976311",
  },
  {
    id: 4,
    src: "https://rishikeshyogisyogshala.org/wp-content/uploads/2024/01/rishikesh-yoga-teacher-training-curriculum.webp",
  },
  {
    id: 5,

    src: "https://i.pinimg.com/564x/ce/00/28/ce00280533cff5de234c97718258432e.jpg",
  },

  {
    id: 6,

    src: "https://media.istockphoto.com/id/1270273473/photo/river-ganga-in-rishikesh-during-monsoon.jpg?s=612x612&w=0&k=20&c=JW5XOyr9PwbDsj2kP4997UXr_2FA1k03cy4yVcRlr8k=",
  },

  {
    id: 7,

    src: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2016/06/Lakshman_Jhula_Hanging_Bridge_Rishikesh_India.jpg",
  },

  {
    id: 8,

    src: "https://upload.wikimedia.org/wikipedia/commons/1/15/Rishikesh_temple_side_view_of_canal.jpg",
  },

  {
    id: 9,

    src: "https://www.euttaranchal.com/tourism/photos/rishikesh-1350859.jpg",
  },

  {
    id: 10,

    src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },

  {
    id: 11,

    src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
  },

  {
    id: 12,

    src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
  },

  {
    id: 13,

    src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },

  {
    id: 14,

    src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },

  {
    id: 15,

    src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
  },

  {
    id: 16,

    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,

        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;

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
        Namaste and a heartfelt welcome from Mahakaal Yogpeeth! We are thrilled to have you join us as you delve into the world of yoga and begin a transformative journey toward self-discovery and comprehensive well-being. Located in the tranquil and spiritual town of Rishikesh, we provide premier yoga teacher training in India.
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
    src: "https://img.veenaworld.com/wp-content/uploads/2021/12/10-Places-to-Visit-Near-Rishikesh.jpg",
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

    src: "https://www.justahotels.com/wp-content/uploads/2023/05/Top-10-Things-to-Do-in-Rishikesh.jpg",
  },

  {
    id: 11,

    src: "https://www.euttaranchal.com/tourism/photos/rishikesh-4515333.jpg",
  },

  {
    id: 12,

    src: "https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1607406374368-809f8ec7f118%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Drishikesh%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8M3x8cmlzaGlrZXNofGVufDB8fHx8MTcxODM3MTE4MXww%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60",
  },

  {
    id: 13,

    src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },

  {
    id: 14,

    src: "https://i.pinimg.com/564x/0f/68/71/0f6871a57a731e806c2cea974aa06bd7.jpg",
  },

  {
    id: 15,

    src: "https://www.shutterstock.com/image-photo/beautiful-view-rishikesh-uttarakhand-india-600nw-2362484861.jpg",
  },

  {
    id: 16,

    src: "https://t3.ftcdn.net/jpg/04/74/52/86/360_F_474528672_vpQtkeor5wF3bF8wkm7Fbt3BOhlEoBRh.jpg",
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

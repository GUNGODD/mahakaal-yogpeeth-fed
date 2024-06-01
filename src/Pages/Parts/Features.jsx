import { TbYoga } from "react-icons/tb";
import { FaRunning } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { GiPrayer } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { GiChestnutLeaf } from "react-icons/gi";
import { GiAnatomy } from "react-icons/gi";
import { FaPersonWalking } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";

// import { GiMeditation } from "react-icons/gi";

const features = [
    { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
    { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
    { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ];
  
  export default function Features() {
    return (
      <div className="mb-10">
     <section class="bg-gray-900 text-white">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div class="mx-auto max-w-lg text-center">
      <h2 class="text-3xl font-bold sm:text-4xl">Yoga TTC in Rishikesh</h2>

      <p class="mt-4 text-gray-300">
        The Topics/Syllabus to be Covered in this Course
      </p>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
       <TbYoga size={40}/>

        <h2 class="mt-4 text-xl font-bold text-white">Hatha Yoga</h2>

        <p class="mt-1 text-sm text-gray-300">
        Hatha Yoga is a preparatory process of Yoga.
        </p>
      </a>

      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <GrYoga size={40}/>

        <h2 class="mt-4 text-xl font-bold text-white">Ashtanga Yoga</h2>

        <p class="mt-1 text-sm text-gray-300">
        Ashtanga is a very dynamic and athletic form of Hatha yoga.
        </p>
      </a>

      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <GiMeditation size={40}/>

        <h2 class="mt-4 text-xl font-bold text-white">Meditation</h2>

        <p class="mt-1 text-sm text-gray-300">
        Heel Your Body, Mind and soul through Meditation.
        </p>
      </a>

      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <GiPrayer size={40}/>

        <h2 class="mt-4 text-xl font-bold text-white">Pranayama</h2>

        <p class="mt-1 text-sm text-gray-300">
        Pranayama is an ancient breath techniques and method.
        </p>
      </a>

      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <GiChestnutLeaf size={40}/>


        <h2 class="mt-4 text-xl font-bold text-white">Yoga Philosophy</h2>

        <p class="mt-1 text-sm text-gray-300">
        Yoga Philosophy is a Theoretical Study of Yoga.
        </p>
      </a>

      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <GiAnatomy size={40}/>


        <h2 class="mt-4 text-xl font-bold text-white">Yoga Anatomy</h2>

        <p class="mt-1 text-sm text-gray-300">
        Human body Study to understand safe and stable physical alignment in yoga poses.
        </p>
      </a>

      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <FaPersonWalking size={40}/>


        <h2 class="mt-4 text-xl font-bold text-white">Kundalini Yoga</h2>

        <p class="mt-1 text-sm text-gray-300">
        Type of yoga that involves chanting, singing, breathing exercises and Kriyas
        </p>
      </a>

      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <GiMeditation size={40}/>


        <h2 class="mt-4 text-xl font-bold text-white">Mantra Chanting</h2>

        <p class="mt-1 text-sm text-gray-300">
        Be in Peace of Mind with anicient and sacred Mantra chanting.
        </p>
      </a>

      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <GiBrain size={40}/>

        <h2 class="mt-4 text-xl font-bold text-white">Mindfullness</h2>

        <p class="mt-1 text-sm text-gray-300">
        Learn how you can be in Fully present in the current moment.
        </p>
      </a>
    </div>

    <div class="mt-12 text-center">
      <a
        href="/enroll"
        class="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Get Started Today
      </a>
    </div>
  </div>
</section>
      </div>
    );
  }
  
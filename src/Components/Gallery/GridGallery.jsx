export default function GridGallery() {
  return (
    <>
      <PundGallery />
      <CarouselComponent />
    </>
  );
}

const PundGallery = () => {
  return (
    <>
      <div className="border border-blue-400  shadow shadow-sky-200/55 gap-4 mb-12 w-full h-96 rounded-lg m-4 p-4">
        <div className="border border-pink-700 gap-4 h-80 m-4 flex flex-row  rounded-lg  ">
          <div className="flex flex-row">
            <div className="border border-green-700   m-4 w-24 h-24 rounded-lg  p-5">
              <div className="rounded-lg  border border-purple-700 w-24 h-24"></div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import { useState, useEffect } from "react";

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      src: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp",
      alt: "Motorbike Smoke",
      label: "First slide label",
      description:
        "Some representative placeholder content for the first slide.",
    },
    {
      src: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp",
      alt: "Mountaintop",
      label: "Second slide label",
      description:
        "Some representative placeholder content for the second slide.",
    },
    {
      src: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp",
      alt: "Woman Reading a Book",
      label: "Third slide label",
      description:
        "Some representative placeholder content for the third slide.",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="carouselDarkVariant" className="relative">
      {/* Carousel indicators */}
      <div className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${activeIndex === index ? "opacity-100" : ""}`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel items */}
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`relative float-left -mr-[100%] w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none ${activeIndex === index ? "opacity-100" : "opacity-0"}`}
          >
            <img src={slide.src} className="block w-full" alt={slide.alt} />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
              <h5 className="text-xl">{slide.label}</h5>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls - prev item */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={prevSlide}
      >
        <span className="inline-block h-8 w-8 dark:grayscale">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      {/* Carousel controls - next item */}
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={nextSlide}
      >
        <span className="inline-block h-8 w-8 dark:grayscale">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};

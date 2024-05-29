import React from "react";
import ReactPlayer from "react-player";

const Content = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="mb-4">
          <p className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="pattern"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#pattern)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{' '}
          quick, brown fox jumps over a lazy dog
        </h2>
      </div>
      <div className="relative w-full max-w-2xl mx-auto border bg-gray-500 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
        <ReactPlayer
          url={videoUrl}
          controls
          width="100%"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Content;
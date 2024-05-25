import React from 'react';
import ReactPlayer from 'react-player/youtube';

const VideoCard = () => (
  <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
    <div className="aspect-w-16 aspect-h-9 sm:aspect-w-16 sm:aspect-h-9 md:aspect-w-16 md:aspect-h-9 lg:aspect-w-16 lg:aspect-h-9">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=iV2UJPwueEk"
        controls
        width="100%"
        height="100%"
      />
    </div>
  </div>
);

export const Content = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="679d5905-e08c-4b91-a66c-84aefbb9d2f5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{' '}
          quick, brown fox jumps over a lazy dog
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="mx-auto lg:max-w-2xl">
        <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
          <div className="relative rounded-lg w-full aspect-w-16 aspect-h-16 sm:aspect-w-16 sm:aspect-video md:aspect-w-16 md:aspect-video lg:aspect-w-16 lg:aspect-video bg-gray-500 border border-gray-500 shadow-lg shadow-indigo-500">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=iV2UJPwueEk"
              controls
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Content


import React from 'react';
const ImgContent = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-[60vh] lg:grid-cols-2"> {/* Adjusted height here */}
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt=""
                src="https://i.ibb.co/k9pDbXM/carousel3.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span
              className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
            ></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                100 Hours Yoga Teacher Training in Rishikesh
              </h2>

              <p className="mt-4 text-gray-600">
              The 100 hour Yoga TTC in Rishikesh is an Beginner yoga teacher training course for people who want to get started practicing Yoga , its knowledge and understanding of yoga practice and enhance their skills as well as enlightening to others of this holistic way of life.
              </p>

              <a
                href="/Yoga100"
                className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Enroll Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ImgContentMid = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-[60vh] lg:grid-cols-2"> {/* Adjusted height here */}
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt=""
                src="https://i.ibb.co/k9pDbXM/carousel3.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span
              className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
            ></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
              200 Hour Yoga Teacher Training in Rishikesh
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
                esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
                architecto eius quis quibusdam fugiat dicta.
              </p>

              <a
                href="/Yoga300"
                className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Enroll Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ImgContentLast = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-[60vh] lg:grid-cols-2"> {/* Adjusted height here */}
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt=""
                src="https://i.ibb.co/k9pDbXM/carousel3.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span
              className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
            ></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
              500 hours Yoga Teacher Training in Rishikesh
              </h2>

              <p className="mt-4 text-gray-600">
              The 500 hours Yoga Teacher Training Rishikesh will provide an opportunity to take you on the yoga journey where you will get a complete or clear vision of yoga, without any concerns. This course will certainly give you a chance of becoming a master in Yoga !
              </p>

              <a
                href="/Yoga500  "
                className="mt-8 inline-block rounded border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Coming Soon!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Content = () => {
  return (
    <div>
      <ImgContent />
      <ImgContentMid />
      <ImgContentLast />
    </div>
  );
};

export default ImgContent;

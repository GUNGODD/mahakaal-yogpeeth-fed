import React from "react";
import ReactPlayer from "react-player";

const GridGallery = ({ url }) => {
  return (
    <div className="flex justify-center mt-10 flex-col items-center">
      <div
        className="flex flex-col md:flex-row gap-4 m-4 w-full max-w-7xl"
        style={{ height: "auto" }}
      >
        <div
          className="relative w-full md:w-1/3"
          style={{ paddingBottom: "56.25%" }}
        >
          <ReactPlayer
            className="absolute top-0 left-0"
            url={url}
            controls={true}
            playing={true}
            width="100%"
            height="100%"
          />
        </div>

        <div className="inline-block gap-4 justify-center rounded-lg border text-center p-4 w-full md:w-2/3">
          <h1 className="text-2xl font-bold">Watch our Videos</h1>
          <p className="mt-2 text-base">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

const FullGallery = ({ url }) => {
  return (
    <>
      <GridGallery url={"https://www.youtube.com/watch?v=-tI4Ix8jvFA"} />
      <GridGallery url={"https://www.youtube.com/watch?v=-tI4Ix8jvFA"} />
      <GridGallery url={"https://www.youtube.com/watch?v=-tI4Ix8jvFA"} />
      <GridGallery url={"https://www.youtube.com/watch?v=-tI4Ix8jvFA"} />
    </>
  );
};

export default FullGallery;

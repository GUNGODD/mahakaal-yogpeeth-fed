import React from "react";
import ReactPlayer from "react-player";

const YoutubeGrids = () => {
  const videos = [
    {
      url: "https://youtube.com/shorts/S0i3mjIjGrQ",
      description: "Yoga for Beginners - Start Your Journey"
    },
    {
      url: "https://youtube.com/shorts/oPOA7DyzSLw",
      description: "Advanced Yoga Techniques"
    },
    {
      url: "https://youtube.com/shorts/QyYlTpz9dsg?feature=share",
      description: "Yoga for Flexibility and Strength"
    },
    {
      url: "https://youtube.com/shorts/-tI4Ix8jvFA",
      description: "Morning Yoga Routine"
    }
  ];

  return (
    <div className="bg-gray-100 p-4">
      <div className="flex flex-wrap -mx-2">
        {videos.map((video, index) => (
          <div key={index} className="p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div
                className="relative bg-gray-200"
                style={{ paddingTop: "56.25%" }} // 16:9 Aspect Ratio for widescreen
              >
                <ReactPlayer
                  className="absolute top-0 left-0"
                  url={video.url}
                  width="100%"
                  height="100%"
                  controls
                />
              </div>
              <div className="p-4">
                <p className="text-gray-800 text-sm">{video.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeGrids;
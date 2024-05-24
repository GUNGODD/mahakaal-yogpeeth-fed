import React from 'react';

const ImgContent = () => {
  return (
    <div id="imgContent" className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 p-4">
      <img
        src="https://plus.unsplash.com/premium_photo-1669144690665-17dde1269f68?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Yoga Training"
        className="w-full h-auto lg:w-auto lg:h-auto lg:max-w-none"
      />
      <div id="textArea" className="mt-4 lg:mt-0">
        <h1 className="text-2xl font-bold">YOGA TTC 100 HOURS</h1>
        <h4 className="mt-2 text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates fuga, quam temporibus, quo magnam fugit at id ex repellendus quos nulla? Quia assumenda dolores minus maiores accusamus odio eius similique doloribus nulla ad quos, exercitationem, perspiciatis deserunt. Unde voluptate libero repudiandae quis! Sed voluptatum, quas nostrum enim quod aliquam necessitatibus.
        </h4>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Enroll now!!</button>
      </div>
    </div>
  );
};

export const ImgContentMid = () => {
  return (
    <div id="imgContent" className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 p-4">
      <div id="textArea" className="mt-4 lg:mt-0">
        <h1 className="text-2xl font-bold">Lorem ipsum dolor sit.</h1>
        <h4 className="mt-2 text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates fuga, quam temporibus, quo magnam fugit at id ex repellendus quos nulla? Quia assumenda dolores minus maiores accusamus odio eius similique doloribus nulla ad quos, exercitationem, perspiciatis deserunt. Unde voluptate libero repudiandae quis! Sed voluptatum, quas nostrum enim quod aliquam necessitatibus.
        </h4>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Enroll now!!</button>
      </div>
      <img
        src="https://plus.unsplash.com/premium_photo-1669144690665-17dde1269f68?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Yoga Training"
        className="w-full h-auto lg:w-auto lg:h-auto lg:max-w-none"
      />
    </div>
  );
};

export const Content = () => {
  return (
    <div id="content" className="space-y-8">
      <ImgContent />
      <ImgContentMid />
      <ImgContent />
    </div>
  );
};

export default ImgContent;
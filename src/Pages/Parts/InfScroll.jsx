  import React from 'react';
  import TypewriterComponent from 'typewriter-effect';

  const InfScroll = () => {
    const items = [
      {
        title: 'Lead Teacher',
        author: 'Kapil Sajwan',
        date: '31st June, 2021',
        time: '3 minute',
        img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        description: 'Expertise from last 10 years'
      },
      {
          title: 'Pranayama Expert ',
          author: 'Vikal Sajwan',
          date: '31st June, 2021',
          time: '3 minute',
          img: 'https://github.com/anuragnegi000/mahakaal-yogpeeth-fed/blob/main/src/assets/glimpse/teachers/img1.jpg?raw=true',
          description: 'Expertise from last 10 years'
        },
        {
          title: 'Hatha Yoga ',
          author: 'Yogi Subham Rana',
          date: '31st June, 2021',
          time: '3 minute',
          img: 'https://github.com/anuragnegi000/mahakaal-yogpeeth-fed/blob/main/src/assets/glimpse/teachers/img4.jpg?raw=true',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.'
        },
        {
          title: 'Strech and twist ',
          author: 'Ajay ji',
          date: '31st June, 2021',
          time: '3 minute',
          img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.'
        },
        {
          title: 'Ashtanga',
          author: 'Sanjay Rawat',
          date: '31st June, 2021',
          time: '3 minute',
          img: 'https://github.com/anuragnegi000/mahakaal-yogpeeth-fed/blob/main/src/assets/glimpse/teachers/img2.jpg?raw=true',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.'
        },
        {
          title: 'Mantra Meditation',
          author: 'Bipin Rawat',
          date: '31st June, 2021',
          time: '3 minute',
          img: 'https://github.com/anuragnegi000/mahakaal-yogpeeth-fed/blob/main/src/assets/glimpse/teachers/img3.jpg?raw=true',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.'
        },
      // Add more items as needed
    ];

    // Duplicate items to ensure smooth infinite scrolling
    const repeatedItems = [...items, ...items, ...items];

    return (
      <>
        <div>
          <h1 className='hidden md:text-4xl m-2 font-bold text-center capitalize p-auto'>
            <TypewriterComponent
              options={{
                strings: ['Our Talents!!'],
                autoStart: true,
                loop: true,
                delay: 36,
                changeDelay: 12,
              }}
            />
          </h1>
        </div>

        <div className="hidden md:scroll-container mb-10">
          <div className="scroll-content">
            {repeatedItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-4 mx-2 w-96"
              >
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
                <div className="sm:flex sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-gray-600">{item.author}</p>
                  </div>
                  <div className="hidden sm:block sm:shrink-0">
                    <img
                      alt=""
                      src={item.img}
                      className="size-16 rounded-lg object-cover shadow-sm"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-pretty text-sm text-gray-500">
                    {item.description}
                  </p>
                </div>
                <dl className="mt-6 flex gap-4 sm:gap-6">
                  <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">Published</dt>
                    <dd className="text-xs text-gray-500">{item.date}</dd>
                  </div>
                  <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                    <dd className="text-xs text-gray-500">{item.time}</dd>
                  </div>
                </dl>
              </a>
            ))}
          </div>
        </div>
      </>
    );
  };

  export default InfScroll;

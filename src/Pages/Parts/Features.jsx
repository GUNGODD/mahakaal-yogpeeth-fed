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
      <>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section>
  <div className="md:ml-20 max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
      <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
        <h2 className="text-3xl font-bold sm:text-4xl">Yoga Teacher Training Classes</h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio
          iure ipsum cupiditate? Quis, odit assumenda? Deleniti quasi inventore, libero reiciendis
          minima aliquid tempora. Obcaecati, autem.
        </p>

        <a
          href="/enroll"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-400"
        >
          Get Started Today
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-indigo-500 hover:ring-1 hover:ring-indigo-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
          <img height={40} width={50} src="https://i.ibb.co/JKngSW4/Mahakaal-Logo2.png" alt="" />
          </span>

          <h2 className="mt-2 font-bold">Hatha Yoga</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-indigo-500 hover:ring-1 hover:ring-indigo-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
          <img height={40} width={50} src="https://i.ibb.co/JKngSW4/Mahakaal-Logo2.png" alt="" />
          </span>

          <h2 className="mt-2 font-bold">Ashtanga Yoga</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-indigo-500 hover:ring-1 hover:ring-indigo-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <img height={40} width={50} src="https://i.ibb.co/JKngSW4/Mahakaal-Logo2.png" alt="" />
          </span>

          <h2 className="mt-2 font-bold">Yoga Anatomy</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-indigo-500 hover:ring-1 hover:ring-indigo-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
          <img height={40} width={50} src="https://i.ibb.co/JKngSW4/Mahakaal-Logo2.png" alt="" />
          </span>

          <h2 className="mt-2 font-bold">Yoga Philosophy</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-indigo-500 hover:ring-1 hover:ring-indigo-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
          <img height={40} width={50} src="https://i.ibb.co/JKngSW4/Mahakaal-Logo2.png" alt="" />
          </span>

          <h2 className="mt-2 font-bold">Pranayama</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-indigo-500 hover:ring-1 hover:ring-indigo-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
          <img height={40} width={50} src="https://i.ibb.co/JKngSW4/Mahakaal-Logo2.png" alt="" />
          </span>

          <h2 className="mt-2 font-bold">Meditation</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>
      </div>
    </div>
  </div>
</section>
      </>
    );
  }
  
export const Hero = () => {
  return (
    <div>
      <section
        className="relative bg-[url(https://lh5.googleusercontent.com/proxy/4IymKiIIccGb9QxgjJ45S8U38zStNQXHYmyUruMOAiwQANrRTNtTNkt6v0LDlznAdb15yAKYghBBv4q1-kCWnBZG_Jsn8WI447dB4oPhIQ7A1bJzbhwLuRM_Ghm1)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-white/35"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-indigo-700"> Forever Home. </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
              numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="rounded-lg block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="rounded-lg block w-full rounded bg-white px-12 py-3 text-sm font-medium text-indigo-600 shadow hover:text-indigo-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

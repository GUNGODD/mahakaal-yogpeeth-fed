import React from 'react';

const Form = () => {
  return (
    <div className='mb-20'>
      {/*
        Heads up! 👋

        Plugins:
          - @tailwindcss/forms
      */}

      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
              ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="firstname" className="sr-only">First Name</label>
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="First Name"
                id="firstname"
              />
            </div>

            <div>
              <label htmlFor="lastname" className="sr-only">Last Name</label>
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Last Name"
                id="lastname"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Email"
                id="email"
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className="sr-only">WhatsApp Number</label>
              <input
                type="tel"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="WhatsApp Number"
                id="whatsapp"
              />
            </div>

            <div>
              <label htmlFor="gender" className="sr-only">Gender</label>
              <select
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                id="gender"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="month" className="sr-only">Month</label>
              <select
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                id="month"
              >
                <option value="">Select Month</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </div>

            <div>
              <label htmlFor="course" className="sr-only">Course Name</label>
              <select
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                id="course"
              >
                <option value="">Select Course</option>
                <option value="course1">Course 1</option>
                <option value="course2">Course 2</option>
                <option value="course3">Course 3</option>
              </select>
            </div>

            <div>
              <label htmlFor="country" className="sr-only">Country</label>
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Country"
                id="country"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Message"
                id="message"
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                No account?
                <a className="underline" href="#">Sign up</a>
              </p>

              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Form;

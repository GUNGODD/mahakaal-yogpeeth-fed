import React from 'react';
import TypewriterComponent from 'typewriter-effect';

const ContactForm = () => {
  return (
    <div className='mb-20'>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-50 px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <div className='sm:text-6xl text-3xl md:text-5xl font-bold mb-4'>
              <TypewriterComponent
                options={{
                  strings: ['Get in Touch!'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="mt-4 text-black m-2">
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
              <label htmlFor="country" className="sr-only">Country</label>
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Country"
                id="country"
              />
            </div>

            <div>
              <label htmlFor="subject" className="sr-only">Subject</label>
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Subject"
                id="subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Message"
                rows="8"
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

export default ContactForm;

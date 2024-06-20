import emailjs from '@emailjs/browser';
import { useState } from 'react';
import TypewriterComponent from 'typewriter-effect';

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [gender, setGender] = useState("");
  const [month, setMonth] = useState("");
  const [course, setCourse] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start the loader

    const serviceId = 'service_w3uhl3d';
    const templateId = 'template_ujh0s9i';
    const publicKey = 'VkJWkfkjPxDvdLiRA';

    const templateParams = {
      from_name: fullName,
      to_name: 'Mahakaal Yogpeeth',
      email: email,
      whatsapp: whatsapp,
      gender: gender,
      month: month,
      course: course,
      country: country,
      message: message
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) => {
      console.log("Email has been sent successfully!", response);
      setFullName('');
      setEmail('');
      setWhatsapp('');
      setGender('');
      setMonth('');
      setCourse('');
      setCountry('');
      setMessage('');
      alert("Form Submitted Successfully");
      setLoading(false); // Stop the loader
    }).catch((error) => {
      console.error('Error sending email: ', error);
      setLoading(false); // Stop the loader
    });
  };

  return (
    <div className='mb-20'>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <div className='sm:text-6xl text-3xl md:text-5xl font-bold mb-4'>
              <TypewriterComponent
                options={{
                  strings: ['Get Started Today!'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="mt-4 text-black m-2">
              Fill all the required details!
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center">
              <div className="loader"></div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
              <div>
                <label htmlFor="fullName" className="sr-only">Full Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                  placeholder="Full Name"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                  placeholder="Email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="sr-only">WhatsApp Number</label>
                <input
                  type="tel"
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                  placeholder="WhatsApp Number"
                  id="whatsapp"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="gender" className="sr-only">Gender</label>
                <select
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
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
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
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
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <option value="">Select Course</option>
                  <option value="course1">Yoga TTC 100 Hours</option>
                  <option value="course2">Yoga TTC 200 Hours</option>
                  <option value="course3">Yoga Retreat 10 Days</option>
                  <option value="course4">Yoga Retreat 7 Days</option>
                  <option value="course5">Yoga Retreat 3 Days</option>
                </select>
              </div>

              <div>
                <label htmlFor="country" className="sr-only">Country</label>
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                  placeholder="Country"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                  placeholder="Message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
          )}
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

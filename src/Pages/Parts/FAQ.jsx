
export default function FAQ  (){
  return (
    <section className="py-24 bg-gray-50">
      <div className="px-8 mx-auto max-w-7xl md:px-12 lg:px-32">
        <div className="text-center">
          <p className="text-4xl font-semibold tracking-tighter text-green-700">
            Frequently Asked Questions
          </p>
          <p className="mt-4 text-base font-medium text-gray-600">
            Answers to commonly asked questions about our yoga classes and
            services.
          </p>
        </div>

        <dl className="grid gap-12 mt-12 lg:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-md transition-shadow duration-300 transform hover:shadow-lg hover:-translate-y-1">
            <dt className="text-lg font-medium text-green-700">
              What kind of support can I expect?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-600">
              We offer comprehensive support including live chat, email, and
              phone. Our support team is available 24/7 to assist with any
              issues or questions you might have.
            </dd>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md transition-shadow duration-300 transform hover:shadow-lg hover:-translate-y-1">
            <dt className="text-lg font-medium text-green-700">
              How secure is my payment information?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-600">
              Your payment information is extremely secure. We use
              industry-standard encryption and comply with PCI standards to
              ensure your details are protected.
            </dd>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md transition-shadow duration-300 transform hover:shadow-lg hover:-translate-y-1">
            <dt className="text-lg font-medium text-green-700">
              Can I cancel my subscription at any time?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-600">
              Yes, you can cancel your subscription at any time. There are no
              cancellation fees, though no refunds are provided for partial
              months.
            </dd>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md transition-shadow duration-300 transform hover:shadow-lg hover:-translate-y-1">
            <dt className="text-lg font-medium text-green-700">
              How often are platform updates released?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-600">
              We regularly update the platform to introduce new features and
              improvements. Major updates are released quarterly, while minor
              updates and bug fixes are rolled out as needed.
            </dd>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md transition-shadow duration-300 transform hover:shadow-lg hover:-translate-y-1">
            <dt className="text-lg font-medium text-green-700">
              Is there a community or forum where I can discuss with other
              users?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-600">
              Yes, we have a community forum where users can share tips, ask
              questions, and connect with others. It's a great place to learn
              from fellow users and contribute your own insights.
            </dd>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md transition-shadow duration-300 transform hover:shadow-lg hover:-translate-y-1">
            <dt className="text-lg font-medium text-green-700">
              Do you offer training or resources for new users?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-600">
              Absolutely! We provide a comprehensive knowledge base, video
              tutorials, and live webinars to help you get started and make the
              most out of our platform.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

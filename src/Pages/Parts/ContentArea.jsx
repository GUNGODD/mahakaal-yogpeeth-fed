import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Personal Transformation.',
    description:
      'Yoga is a holistic practice that encompasses the mind, body, and spirit. Through dedicated teacher training, you embark on a personal journey of self-discovery. It is not just about mastering postures but understanding the underlying philosophy, embracing mindfulness, and cultivating a deeper connection with yourself.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Comprehensive Knowledge.',
    description: 'Yoga teacher training goes beyond the physical aspects of asanas. It equips you with a comprehensive understanding of yogic philosophy, anatomy, and teaching methodologies. This knowledge empowers you to guide others on their yoga journey, ensuring a well-rounded and enriching experience for your future students.',
    icon: LockClosedIcon,
  },
  {
    name: 'Spiritual Awakening.',
    description: 'Rishikesh, known as the Yoga Capital of the World, is a sacred space that amplifies the spiritual essence of yoga. Our teacher training program immerses you in this spiritual energy, fostering a deep connection with yogas ancient roots. The tranquil surroundings and spiritual guidance contribute to a transformative and enlightening experience.',
    icon: ServerIcon,
  },
]

export default function ContentArea() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Aim Of Yoga Teacher Training In Rishikesh India</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to the transformative world of yoga teacher training at the serene heart of Rishikesh, India. At our school, we believe that yoga is not just a practice but a way of life or a journey that goes beyond the mat and extends into self-discovery and profound transformation. So, let's delve into the objectives that make our yoga teacher training program a life-altering experience.


              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className='flex flex-col'>
          <img
            src="https://i.ibb.co/7pY1RGb/beach2.jpg"
            alt="Product screenshot"
            className="w-[24rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[44rem] md:-ml-4 lg:-ml-0 mb-10"
            width={2032}
            height={1442}
          />
          <img                                                // In small devices this should not be displayed; it should be hidden
            src="https://i.ibb.co/7pY1RGb/beach2.jpg"
            alt="Product screenshot"
            className="hidden sm:block w-[24rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[44rem] md:-ml-4 lg:-ml-0"
            width={2032}
            height={1442}
          />
          </div>
        </div>
      </div>
    </div>
  )
}

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { ContentArea1 } from '../../utils'

const features = [
  {
    name: 'Personal Transformation.',
    description:
      'Yoga is a holistic practice that integrates the mind, body, and spirit. Our dedicated teacher training program guides you on a personal journey of self-discovery. Its not just about mastering postures; its about understanding the underlying philosophy, embracing mindfulness, and cultivating a deeper connection with yourself.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Comprehensive Knowledge.',
    description: 'We recognize that each individuals journey is unique. To meet diverse needs, we provide a variety of yoga teacher training programs, including 100, 200, 300, and 500-hour courses. Whether you are looking for a foundational understanding or seeking advanced expertise, our structured curriculum ensures a seamless progression through the levels of yoga proficiency.',
    icon: LockClosedIcon,
  },
  {
    name: 'Spiritual Awakening.',
    description: 'Rishikesh, revered as the Yoga Capital of the World, is a sacred haven that magnifies the spiritual essence of yoga. Our teacher training program envelops you in this divine energy, nurturing a profound connection with yogas ancient roots. The serene environment   and spiritual guidance enrich your journey, fostering a transformative and enlightening experience.',
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
              
Welcome to the transformative journey of yoga teacher training in the tranquil heart of Rishikesh, India. At our school, we embrace yoga as a holistic way of life, extending beyond the mat into realms of self-discovery and profound transformation. Let's explore the objectives that make our yoga teacher training program a life-changing experience.


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
            src={ContentArea1}
            alt="Product screenshot"
            className="w-[24rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[44rem] md:-ml-4 lg:-ml-0 mb-10"
            width={2032}
            height={1442}
          />
          <img                                                // In small devices this should not be displayed; it should be hidden
            src={ContentArea1}
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

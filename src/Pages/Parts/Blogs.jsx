  const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },}
    // More posts...
  ]

  export default function Example() {
    return (
      <div className="py-24 bg-gray-50 sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Yoga Testimonials
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Hear from our satisfied clients about their yoga journey.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 pt-10 mx-auto mt-10 max-w-2xl border-t border-gray-200 sm:pt-16 sm:mt-16 lg:grid-cols-3 lg:mx-0 lg:max-w-none">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col justify-between items-start p-6 max-w-xl bg-white rounded-lg shadow-md transition-shadow duration-300 transform hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex gap-x-4 items-center text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 py-1.5 px-3 font-medium text-green-600 bg-green-50 rounded-full hover:bg-green-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="relative mt-4 group">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-green-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600 line-clamp-3">
                    {post.description}
                  </p>
                </div>
                <div className="flex relative gap-x-4 items-center mt-8">
                  <img
                    src={post.author.imageUrl}
                    alt={post.author.name}
                    className="w-10 h-10 bg-gray-50 rounded-full"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }

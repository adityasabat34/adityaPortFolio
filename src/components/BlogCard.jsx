const posts = [
  {
    id: 1,
    title: 'RST @ Mumbai',
    description:
      'I am a MERN stack developer with experience from an internship at RST, where I worked on industry-level applications and gained expertise in using React and Redux for efficient state management.',
    date: 'Aug 2023 - Oct 2023, 3 months ',
    datetime: '2020-03-16',
    category: { title: 'MERN, Full-Stack Dev' },
    author: {
      name: 'Aditya Sabat',
      role: 'Software Developer / Frontend Developer',
      imageUrl: 'https://i.postimg.cc/5658f8Kv/IMG-20240815-234910.jpg',
    },
  },
  {
    id: 2,
    title: 'Freelance',
    description:
      'As a freelance developer, I have experience building dynamic web applications using React, Tailwind CSS, Redux, and Node.js with Express. I focus on delivering efficient, scalable solutions tailored to client needs.',
    date: 'Mar 2024 - Oct 2024 , 5 months',
    datetime: '2020-03-16',
    category: { title: 'React, Tailwind, Redux, Node' },
    author: {
      name: 'Aditya Sabat',
      role: 'Software Developer / Frontend Developer',
      imageUrl: 'https://i.postimg.cc/5658f8Kv/IMG-20240815-234910.jpg',
    },
  },
  // More posts...
];

const BlogCard = () => (
  <div className="bg-darkClay py-20 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Experience
        </h2>
        <p className="mt-2 text-lg leading-20 text-gray-600">
          RST and Freelancer
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex max-w-xl flex-col items-start justify-between"
          >
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.datetime} className="text-gray-500">
                {post.date}
              </time>
              <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                {post.category.title}
              </span>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                {post.title}
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {post.description}
              </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <img
                alt=""
                src={post.author.imageUrl}
                className="h-10 w-10 rounded-full bg-gray-50"
              />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  {post.author.name}
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

export default BlogCard;

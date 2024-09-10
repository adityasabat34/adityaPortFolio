import { cn } from '../utils/cn';
import Marquee from './magicui/marquee';
import pngCSS from '../assets/CSS3.png';
import pngHTML from '../assets/html.png';
import pngJS from '../assets/JS.png';
import pngRedux from '../assets/redux.png';
import pngTS from '../assets/TS.png';
import pngReact from '../assets/react.png';
import pngMongoDB from '../assets/mongodb.png';
import pngNode from '../assets/nodejs.png';
import pngExpress from '../assets/Express.png';
import pngNext from '../assets/next.png';
import pngMongoose from '../assets/mongoose.png';
import pngTailwind from '../assets/tailwind.png';

// Review data
const reviews = [
  {
    name: 'HTML5',
    img: pngHTML,
  },
  {
    name: 'CSS',
    img: pngCSS,
  },
  {
    name: 'JavaScript',
    img: pngJS,
  },
  {
    name: 'TypeScript',
    img: pngTS,
  },
  {
    name: 'Redux',
    img: pngRedux,
  },
  {
    name: 'TailwindCSS',
    img: pngTailwind,
  },
  {
    name: 'MongoDB',
    img: pngMongoDB,
  },
  {
    name: 'Express.js',
    img: pngExpress,
  },
  {
    name: 'React.js',
    img: pngReact,
  },
  {
    name: 'Node.js',
    img: pngNode,
  },
  {
    name: 'Next.js',
    img: pngNext,
  },
  {
    name: 'Mongoose',
    img: pngMongoose,
  },
];

// Divide reviews into two rows for the marquee
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

// ReviewCard component
// ReviewCard component
const ReviewCard = ({ img, name }) => {
  return (
    <figure
      className={cn(
        'flex flex-col items-center w-64 cursor-pointer overflow-hidden rounded-xl p-4 gap-2',

        'border-2 border-black',
        'bg-[#e8e5e0]',

        'bg-gray-950/[.01] hover:bg-gray-950/[.05]',

        'dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
        'shadow-2xl'
      )}
      style={{ margin: '5px' }}
    >
      <img
        className="rounded-xl object-cover"
        width="70"
        height="70"
        alt={`${name}'s avatar`}
        src={img}
      />
      <figcaption className="text-md font-medium dark:text-black">
        {name}
      </figcaption>
    </figure>
  );
};

// MarqueeDemo component
export function MarqueeDemo() {
  return (
    <>
      <h2 className="text-center mt-5 text-2xl md:text-3xl p-4 font-bold bg-darkClay1">
        Technical Skills
      </h2>

      <div className="mt-5 bg-darkClay1 h-8"></div>
      <div className="relative flex h-[300px] sm:h-[400px] md:h-[500px] w-full flex-col items-center justify-center gap-5 overflow-hidden bg-darkClay1 md:shadow-xl">
        {/* First marquee row */}
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>

        {/* Second marquee row (reverse direction) */}
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
      </div>
    </>
  );
}

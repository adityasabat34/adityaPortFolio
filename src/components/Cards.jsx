// Card.jsx

const Card = ({ image, title, description, demoLink = false, githubLink }) => {
  return (
    <div className="relative flex flex-col  my-6 bg-black  shadow-2xl border  border-slate-100 rounded-lg w-96">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md border border-white">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-white text-xl font-semibold">{title}</h6>
        <p className="text-slate-300 leading-normal ">{description}</p>
      </div>
      {demoLink ? (
        <div className="px-4 pb-4 pt-0 mt-2 flex justify-between">
          <a
            href={demoLink}
            className="rounded-md bg-darkClay py-2 px-4 text-sm text-black font-semibold  shadow-md hover:shadow-lg hover:bg-darkClay1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo / App Link
          </a>
          <a
            href={githubLink}
            className="rounded-md bg-white py-2 px-4 text-sm text-black font-semibold  shadow-md hover:shadow-lg hover:bg-slate-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </div>
      ) : (
        <div className="px-4 pb-4 pt-0 mt-2 flex self-center">
          <a
            href={githubLink}
            className="rounded-md bg-white py-2 px-4 text-sm text-black font-semibold  shadow-md hover:shadow-lg hover:bg-slate-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code / GitHub Link
          </a>
        </div>
      )}
    </div>
  );
};

export default Card;

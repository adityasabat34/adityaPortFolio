const AboutMe = () => {
  return (
    <div className="bg-darkClay min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-darkClay2 rounded-lg shadow-2xl p-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
        <p className="text-lg text-gray-700 mb-6">
          Hi, I’m{' '}
          <span className="font-semibold text-gray-900">Aditya Sabat</span>, a
          passionate software developer with expertise in building robust and
          scalable web applications. I specialize in working with modern web
          technologies, including the MERN stack and more.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Tech Stack
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          I have a solid understanding and hands-on experience with the
          following technologies:
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-lg text-gray-900 font-semibold">Frontend:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>React.js</li>
              <li>(HTML, CSS, JavaScript)</li>
              <li>Next.js</li>
              <li>Redux</li>
              <li>TailwindCSS</li>
              <li>TypeScript</li>
            </ul>
          </div>

          <div>
            <p className="text-lg text-gray-900 font-semibold">Backend:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          My Approach
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          As a developer, I am dedicated to writing clean, efficient code and
          ensuring the best user experience. I constantly learn new technologies
          and best practices to improve the quality of the products I build.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {` Let's Connect`}
        </h2>
        <p className="text-lg text-gray-700">
          If you'd like to know more about my work or discuss any potential
          collaboration, feel free to reach out. I’m always excited to work on
          innovative projects and explore new opportunities.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

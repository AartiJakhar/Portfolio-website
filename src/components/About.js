const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-16 py-20 lg:flex-row flex-col items-center">
        <div className="lg:flex-grow lg:w-1/2 lg:pr-24  flex flex-col lg:items-start lg:text-left mb-16  items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Aarti Jakhar a frotend developer.
          </h1>
          <p className="mb-4 leading-relaxed">
            I have started learning programming after 12th by myself . almost a
            year ago. I'm a student who has many interests in life and passion
            to study programming and use it in a creative way
          </p>
          <p className="mb-8 leading-relaxed">
            I am constantly learning and exploring new tools and frameworks to
            improve my skills and deliver high-quality solutions to my clients .
            My skillset includes proficiency in JavaScript, HTML, CSS, and their
            related libraries and frameworks. I have experience in building
            responsive and mobile-optimized web applications, integrating with
            RESTful APIs, and working with databases such as MongoDB. I also
            have experience in using modern front-end libraries such as ReactJS,
            NextJS with TypeScript, and I am familiar with the latest features
            such as hooks, context, and suspense.
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/aarti-jakhar-developer/"
              target={"_blank"}
              rel="noreferrer"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="https://github.com/AartiJakhar?tab=repositories"
              target={"_blank"}
              rel="noreferrer"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://i.pinimg.com/originals/a7/2b/1a/a72b1aa94154e5ce6a1e1efaed96e424.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

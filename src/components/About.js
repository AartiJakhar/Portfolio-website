const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex lg:px-20 py-20 lg:flex-row flex-col items-center">
        <div className="lg:flex-grow lg:w-1/2 lg:pr-0  flex flex-col lg:items-start lg:text-left mb-16  items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Aarti Jakhar a full stack web developer.
          </h1>
          <p className="mb-4 leading-relaxed pt-10">
            Aspiring web developer currently undergoing a 3-month internship at GVR, Jaipur, where I am developing skills in MERN Stack, Next.js, GraphQL, and Apollo Server/Client.
          </p>
          <p className="mb-8 leading-relaxed pb-10">
          Demonstrated my ability to create and implement efficient and effective web solutions through completion of projects such as a full-featured e-commerce website using Next.js and MongoDB, A blogging website using MERN Stack, and a to-do list management type website using GraphQL. Possess excellent problem-solving skills, excellent written and verbal communication skills, and ability to work independently or in a team environment.
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
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative overflow-hidden bg-no-repeat bg-cover ">
          <img
            className="object-cover object-center rounded  hover:scale-125 transition duration-500 "
            alt="hero"
            src="/aartijakhar.svg"
          />
        </div>
        {/* <div class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
  <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" class="max-w-xs hover:scale-110 transition duration-300 ease-in-out" alt="Louvre" />
</div> */}
      </div>
    </section>
  );
};

export default About;

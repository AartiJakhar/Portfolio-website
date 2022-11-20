const About = () => {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Aarti Jakhar a frotend developer.
            </h1>
            <p className="mb-8 leading-relaxed">
              I have started learning programming after 12th by myself . 
              almost a year ago. I'm student who has many interests in life and
              passion to study programming and use it in a creative way...
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.linkedin.com/in/aarti-jakhar-819439250/"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Work With Me
              </a>
              <a
                href="https://github.com/AartiJakhar?tab=repositories"
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
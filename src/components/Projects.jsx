const Projects = () => {
    const projectData = [
      {
        name: "E-commerce Platform",
        description: "A platform to buy and sell products online with a payment gateway integration.",
        githubLink: "https://github.com/narendra883",
        liveLink: "https://easy-shop-self.vercel.app/",
      },
      {
        name: "Goal Tracker",
        description: "A website to track your day to day life goals",
        githubLink: "https://github.com/narendra883",
        liveLink: "https://github.com/narendra883",
      },
      {
        name: "Brain Stroke Prediction",
        description: "Developed a machine Learning algorithm to attain an accuracy of 93% in predicting the risk of strokes",
        githubLink: "https://github.com/narendra883",
        liveLink: "https://github.com/narendra883",
      },
      
    ];
  
    return (
      <div id="projects" className="p-8 bg-dark-blue text-black min-h-screen">
        <h1 className="text-white text-4xl font-bold mb-8 text-center">Projects</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105"
            >
              <h2 className="text-dark-blue text-2xl font-bold mb-4">{project.name}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex justify-between mt-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-blue font-bold hover:text-blue-700 font-semibold"
                >
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-700 font-semibold"
                >
                  Live Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  
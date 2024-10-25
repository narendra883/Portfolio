const Timeline = () => {
  const educationData = [
    {
      year: "2024",
      title: "Bachelor of Technology (B.Tech)",
      description: "Graduated with a degree in Electronics and Communication Engineering from Vasireddy Venkatadri Institute of Technology",
    },
    {
      year: "2020",
      title: "Intermediate (Inter)",
      description: "Completed Intermediate with a focus in Science at NRI Junior College.",
    },
    {
      year: "2018",
      title: "10th Grade",
      description: "Completed 10th grade with distinction at  Sri Chaitanya School.",
    }
    
    
  ];

  return (
    <section id="about" className="p-8 bg-gray-100 text-black">
      <h2 className="text-4xl font-bold mb-8 text-center">Education</h2>
      <div className="container mx-auto">
        <div className="relative border-l-4 border-blue-500">
          {educationData.map((item, index) => (
            <div key={index} className="mb-10 ml-6 group">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-3 flex items-center justify-center text-white font-bold">
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
                <p>{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

// HomePage.js
import React, { useState, useEffect } from 'react';
import software from '../assets/software.jpg';
import software1 from '../assets/software1.webp';
import person from '../assets/person.png';

const Home = () => {
  const [nameText, setNameText] = useState('');
  const [titleText, setTitleText] = useState('');

  const fullName = 'Naarendra';
  const fullTitle = 'Sooftware Developer';

  // Typing animation for "Narendra"
  useEffect(() => {
    let nameIndex = 0;
    const nameTimer = setInterval(() => {
      if (nameIndex < fullName.length) {
        setNameText((prev) => prev + fullName.charAt(nameIndex));
        nameIndex++;
      } else {
        clearInterval(nameTimer);
      }
    }, 150);

    return () => clearInterval(nameTimer);
  }, []);

  // Typing animation for "Software Developer"
  useEffect(() => {
    let titleIndex = 0;
    const titleTimer = setTimeout(() => {
      const titleInterval = setInterval(() => {
        if (titleIndex < fullTitle.length) {
          setTitleText((prev) => prev + fullTitle.charAt(titleIndex));
          titleIndex++;
        } else {
          clearInterval(titleInterval);
        }
      }, 150);
    }, 1500);

    return () => clearTimeout(titleTimer);
  }, []);

  return (
    <div className="min-h-screen flex flex-wrap bg-dark-blue text-white">
      {/* Left side */}
      <div className="w-full sm:w-1/2 flex justify-center items-center p-8">
        <div className="ml-4 mr-4">
          <h3 className="text-xl mb-2">Hello</h3>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4"> I'm {nameText}</h1>
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">{titleText}</h2>
          <p className="text-lg">
            Completed my Btech in Electronics and communication Engineering in 2024 from vasireddy Venkatadri Institute of Technology.
          </p>
          <p className='text-lg'>I have skills in Python, Java,JavaScript, React.JS, Spring Boot, SQl. </p>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full sm:w-1/2 flex justify-center items-center p-4">
        <div className="bg-dark-blue p-6 rounded">
          <h1 className="text-dark-blue text-2xl font-bold bg-white p-4 rounded">Why You Should Hire Me</h1>
          <p className="text-white text-lg mt-2">
            I bring a solid foundation in software development, hands-on experience in impactful projects, and a deep interest in learning new technologies. Proficient in Java, Python, and full-stack development, I can solve complex challenges efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

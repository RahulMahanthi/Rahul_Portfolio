import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faJs, faNode, faHtml5, faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { faBrain, faCode, faChartLine, faDatabase } from '@fortawesome/free-solid-svg-icons';
import myImage from '../assets/rahul.jpg';

export default function HeroPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <div 
      id='home' 
      className={`min-h-screen bg-gradient-to-r from-indigo-100 via-purple-50 to-teal-200 flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0 px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-purple-600">Rahul Mahanthi</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-700 mb-6">
            <TypeAnimation
              sequence={[
                'AIML Engineer', 2000,
                'Full Stack Web Developer', 2000,
                'Software Engineer', 2000,
                'MERN Stack Developer', 2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              className="text-indigo-500"
            />
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto lg:mx-0">
            I'm passionate about creating innovative solutions and bringing ideas to life through code. With expertise in AI/ML, full-stack development, and data science, I am ready to tackle complex challenges and drive impactful results.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 mb-6">
            <a href="https://www.linkedin.com/in/rahul-mahanthi-048a2623a/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors duration-300">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/RahulMahanthi" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
          <a href="#projects" className="bg-purple-600 text-white px-7 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300">
              View My Projects
          </a>
        </div>
        
        <div className="lg:w-1/2 flex justify-center lg:justify-end px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-pink-300 via-purple-500 to-blue-400 shadow-xl flex items-center justify-center">
              <img src={myImage} alt="Mahanthi Rahul" className="rounded-full w-52 h-52 sm:w-72 sm:h-72 object-cover border-4 border-white" />
            </div>
            
            <FloatingIconBubble icon={faReact} color="text-blue-500" position="-top-10 right-2" animationDelay="0s"/>
            <FloatingIconBubble icon={faNode} color="text-green-400" position="-bottom-12 left-2" animationDelay="0.5s"/>
            <FloatingIconBubble icon={faJs} color="text-yellow-500" position="top-16 -left-10" animationDelay="1s"/>
            <FloatingIconBubble icon={faDatabase} color="text-indigo-600" position="top-5 left-1/4" animationDelay="1.5s" />
            <FloatingIconBubble icon={faBrain} color="text-pink-400" position="bottom-10 right-1/4" animationDelay="2s"/>
            <FloatingIconBubble icon={faChartLine} color="text-teal-500" position="top-1/2 -right-10" animationDelay="2.5s"/>
            <FloatingIconBubble icon={faCode} color="text-gray-800" position="bottom-1/4 -left-10" animationDelay="3.5s"/>
          </div>
        </div>
      </div>
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white py-2 px-6 rounded-full shadow-lg text-center">
        <p className="font-semibold text-lg text-gray-800">30+ Projects Completed</p>
      </div>
    </div>
  );
}

const FloatingIconBubble = ({ icon, color, animationDelay, position, ...positionProps }) => (
  <div 
    className={`absolute ${position} bg-white p-2 rounded-full shadow-xl transform hover:scale-110 transition-transform duration-300`}
    style={{
      ...positionProps,
      animation: `bounce 4s ${animationDelay} ease-in-out infinite, rotate 6s linear infinite`,
    }}
  >
    <FontAwesomeIcon icon={icon} className={`${color} w-6 h-6`} />
  </div>
);

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Code, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Parking Spot Detection using YOLOv8",
    tech: "YOLOv8, OpenCV",
    description: "Developed a parking spot detection system using YOLOv8 to identify available parking spaces in real-time. Utilized OpenCV and YOLOv8 for object detection, achieving high accuracy in detecting parking spots. Applied image post-processing techniques including sharpening, color coding, and brightness/contrast adjustments to enhance image interpretation.",
    github: "https://github.com/RahulMahanthi/Parking_Spot_Detection" 
  },
  {
    title: "Potato Leaf Disease Detection",
    tech: "CNN, TensorFlow",
    description: "Developed a machine learning model using CNN to detect and classify potato leaf diseases. Utilized Python and TensorFlow for image processing and model training, demonstrating strong problem-solving skills. Conducted exploratory data analysis to identify patterns and improve model performance.",
    github: "https://github.com/RahulMahanthi/Potato_Leaf_Disease_Detection"  // Add the link to the repository if available
  },
  {
    title: "Movie Recommendation System",
    tech: "Python, Pandas, Scikit-learn",
    description: "Developed a recommendation system using Python, Pandas, and Scikit-learn, implementing content-based filtering with cosine similarity. Enhanced backend logic to improve recommendation accuracy and user experience.",
    github: "https://github.com/RahulMahanthi/Movie_Recomendation_System_Content_Based"  // Add the link to the repository if available
  },
  {
    title: "MERN Stack Workout Planner Application",
    tech: "MERN Stack",
    description: "Developed a comprehensive Workout Planner application using the MERN stack, enabling users to create and manage personalized workout routines and meal plans. Implemented secure user authentication and authorization with JWT, allowing seamless registration, login, and protected access to user-specific data. Built an intuitive user interface with React, ensuring a smooth user experience and efficient navigation between different sections of the application. Created a RESTful API using Node.js and Express, with MongoDB as the database, to handle Create, Read operations for user entries, routines, and meals efficiently.",
    github: ""  
  },
  {
    title: "Crop Recommendation System",
    tech: "Machine Learning",
    description: "Developed a crop recommendation system using machine learning algorithms to suggest the best crops based on soil conditions, weather data, and other environmental factors. Utilized Python, Pandas, and Scikit-learn for data processing and model building, providing farmers with tailored suggestions to optimize crop yield.",
    github: ""  
  }
];

const skills = [
  "C++",
  "Python",
  "Java",
  "C",
  "ReactJS",
  "NodeJS",
  "MongoDB",
  "ExpressJS",
  "HTML",
  "CSS",
  "JavaScript",
  "Machine Learning",
  "Deep Learning",
  "Artificial Intelligence"
];

const ProjectCard = ({ project }) => (
  <div className="bg-gradient-to-br from-blue-100 via-gray-100 to-blue-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 group">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
      <Code className="text-blue-600" size={28} />
    </div>
    <p className="text-md font-medium text-blue-500 mb-4">{project.tech}</p>
    <p className="text-gray-600 text-base mb-6 leading-relaxed">{project.description}</p>
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-base rounded-md hover:bg-blue-700 transition-colors duration-200 group"
    >
      <ExternalLink size={20} className="mr-2" />
      View on GitHub
      <ArrowUpRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
    </a>
  </div>
);

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const timer = setInterval(nextProject, 5000);  // Auto-scroll every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="projects" className="bg-gradient-to-br from-blue-50 to-gray-200 min-h-screen flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">
          <br></br>
          Projects
        </h2>
        <div className="relative">
          <ProjectCard project={projects[currentIndex]} />
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 bg-white rounded-full p-3 shadow-md hover:bg-blue-100 transition-colors duration-200"
            aria-label="Previous project"
          >
            <ChevronLeft className="text-blue-600" size={28} />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 bg-white rounded-full p-3 shadow-md hover:bg-blue-100 transition-colors duration-200"
            aria-label="Next project"
          >
            <ChevronRight className="text-blue-600" size={28} />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-2 focus:outline-none ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-400'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
        <section id="skills" className="bg-gradient-to-br from-gray-100 to-blue-50 min-h-screen flex flex-col justify-center py-16 px-4">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-lg"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

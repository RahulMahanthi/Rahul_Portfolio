import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import ipl from '../assets/experience/ipl.jpg';
import plant2 from '../assets/experience/plant2.jpg';
import work from '../assets/experience/work.jpg';

const experiences = [
  {
    title: "Data Analyst Intern - APSSDC",
    subtitle: "May 2023 - July 2023",
    description: [
      "Led a comprehensive data analysis project using Python, improving decision-making processes.",
      "Utilized libraries like Pandas, NumPy, and Matplotlib for data manipulation and visualization.",
      "Designed and implemented automated ETL processes for efficient data handling.",
      "Developed interactive dashboards and visual reports to communicate insights to stakeholders.",
      "Collaborated with cross-functional teams to identify data requirements and deliver actionable insights."
    ],
    link: "https://github.com/RahulMahanthi/Data-Driven-Analysis-of-IPL-2008-2023-",  
    image: ipl 
  },
  {
    title: "Undergraduate Researcher - UROP",
    subtitle: "Jan 2023 - Apr 2023",
    description: [
      "Conducted research on data-driven projects, focusing on data extraction and analysis.",
      "Developed and standardized report templates to support operational needs.",
      "Collaborated with cross-functional teams to translate business requirements into technical specifications.",
      "Performed statistical analysis to uncover trends and patterns in large datasets.",
      "Presented research findings to academic and industry audiences, receiving positive feedback for clarity and impact."
    ],
    link: "",  
    image: plant2 
  },
  {
    title: "Web Development Intern - CodSoft",
    subtitle: "Aug 2023 - Oct 2023",
    description: [
      "Developed a workout planner application using the MERN stack (MongoDB, Express, React, Node.js).",
      "Implemented user authentication and data management for workout plans and progress tracking.",
      "Created a responsive, user-friendly interface that allows users to create, view, and modify workout plans.",
      "Integrated third-party APIs to enhance the workout experience and suggest personalized routines.",
      "Collaborated with the team to ensure high-quality code and timely project delivery."
    ],
    link: "",  
    image: work 
  }
];

const ExperienceCard = ({ experience }) => (
  <a href={experience.link} target="_blank" rel="noopener noreferrer" className="block">
    <div className="bg-gradient-to-tl from-indigo-500 via-purple-600 to-pink-500 rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 group">
      <div className="flex flex-col md:flex-row items-start">
        <img src={experience.image} alt={experience.title} className="w-full md:w-80 h-48 md:h-64 object-cover mb-4 md:mb-0 md:mr-8 rounded-lg shadow-lg" />
        <div className="flex-1 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-3xl font-bold">{experience.title}</h3>
            <ArrowUpRight className="text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
          </div>
          <p className="text-lg font-semibold mb-4">{experience.subtitle}</p>
          <ul className="list-disc list-inside space-y-2">
            {experience.description.map((point, index) => (
              <li key={index} className="text-gray-200 text-sm">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </a>
);

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextExperience = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const prevExperience = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length);
  };

  useEffect(() => {
    const timer = setInterval(nextExperience, 5000);  // Auto-scroll every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="experience" className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-indigo-600 text-center mb-12">
          Experience
        </h2>
        <div className="relative">
          <ExperienceCard experience={experiences[currentIndex]} />
          <button
            onClick={prevExperience}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 bg-indigo-700 rounded-full p-3 shadow-lg hover:bg-indigo-600 transition-colors duration-200"
            aria-label="Previous experience"
          >
            <ChevronLeft className="text-white" size={28} />
          </button>
          <button
            onClick={nextExperience}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 bg-indigo-700 rounded-full p-3 shadow-lg hover:bg-indigo-600 transition-colors duration-200"
            aria-label="Next experience"
          >
            <ChevronRight className="text-white" size={28} />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-2 focus:outline-none transition-all duration-200 ${
                index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-indigo-400'
              }`}
              aria-label={`Go to experience ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

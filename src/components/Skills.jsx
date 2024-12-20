import React, { useState, useEffect } from 'react';
import { Code, Database, Globe, Brain, Eye, Wrench, PenTool, Monitor } from 'lucide-react';

const skillsData = [
  { Icon: Code, title: 'Programming Languages', skills: ['C', 'Python', 'Java', 'JavaScript', 'Assembly', 'Shell/Bash'] },
  { Icon: Database, title: 'Database', skills: ['MySQL', 'MongoDB'] },
  { Icon: Globe, title: 'Web Technologies', skills: ['HTML', 'CSS', 'JSON', 'NodeJS', 'ExpressJS', 'RESTful API', 'EJS', 'Mongoose', 'ReactJS'] },
  { Icon: Brain, title: 'Machine Learning', skills: ['Linear Regression', 'Logistic Regression', 'SVM', 'KNN', 'Decision Tree', 'Random Forest'] },
  { Icon: Brain, title: 'Deep Learning', skills: ['Artificial and Convolution Neural networks'] },
  { Icon: Eye, title: 'Computer Vision', skills: ['Object detection', 'YOLO Algorithms'] },
  { Icon: PenTool, title: 'MS Office', skills: ['Word', 'Excel', 'PowerPoint'] },
  { Icon: Monitor, title: 'Platforms', skills: ['Linux', 'Windows'] },
  { Icon: Wrench, title: 'Tools & Simulations', skills: ['Git', 'ROS 2.0'] },
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % skillsData.length);
    }, 4000); // Update every 4 seconds for smoother transition
    return () => clearInterval(interval);
  }, []);

  const displayedSkills = skillsData.slice(activeIndex, activeIndex + 3).concat(
    skillsData.slice(0, Math.max(0, (activeIndex + 3) - skillsData.length))
  );

  return (
    <div id="skills" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-100 to-purple-200">
      <div className="w-full max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-5xl font-extrabold text-center text-indigo-800 mb-8">Skills</h2>
        <div className="space-y-6 flex flex-wrap justify-center gap-6">
          {displayedSkills.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-xl w-72 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                <category.Icon size={56} className="text-indigo-600" />
              </div>
              <h3 className="text-2xl font-semibold text-center text-indigo-700 mb-3">{category.title}</h3>
              <ul className="text-center text-gray-700 space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-lg">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

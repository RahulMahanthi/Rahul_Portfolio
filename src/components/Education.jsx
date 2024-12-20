import React from 'react';

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      institution: "SRM University",
      description: "Computer Science and Engineering",
      grade: "CGPA: 8.96/10.0",
      period: "2021 - Present",
      align: "right"
    },
    {
      degree: "Senior Secondary",
      institution: "Narayana Junior College",
      grade: "975/1000",
      period: "2019 - 2021",
      align: "left"
    },
    {
      degree: "SSC",
      institution: "Swethachalapathi Samasthanam English Medium School",
      grade: "GPA: 10.00/10.00",
      period: "2018 - 2019",
      align: "right"
    }
  ];

  return (
    <section id="education" className="bg-gradient-to-br from-blue-100 to-blue-200 min-h-screen flex flex-col py-12">
      <div className="flex-grow flex flex-col justify-center px-6 sm:px-8 lg:px-10">
        <br></br>
        <h2 className="text-5xl font-extrabold text-center text-blue-700 mb-4">Education</h2>
        <hr className="w-20 h-1 bg-blue-600 border-0 rounded mb-8 mx-auto" />
        <div className="relative max-w-6xl mx-auto w-full">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-400"></div>
          {educationData.map((item, index) => (
            <div key={index} className={`mb-12 flex ${item.align === 'left' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-5/12 ${item.align === 'left' ? 'pl-6' : 'pr-6'}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.degree}</h3>
                  <p className="text-sm text-gray-600">{item.institution}</p>
                  {item.description && <p className="text-xs text-gray-500 my-1">{item.description}</p>}
                  <p className="text-sm font-semibold text-blue-600 mt-2">{item.grade}</p>
                </div>
              </div>
              <div className="w-2/12 flex justify-center items-center relative">
                <div className="absolute z-10 w-8 h-8 bg-red-600 rounded-full border-4 border-white"></div>
                <div className="absolute z-20 bg-white px-3 py-1 rounded-lg shadow-sm transform -translate-y-1/2 whitespace-nowrap">
                  <span className="text-xs font-semibold text-gray-700">{item.period}</span>
                </div>
              </div>
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

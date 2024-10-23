import React from 'react';
import WorkCardHolder from '../components/WorkCardHolder';
import experiences from '../json/workexperiences.json';

const WorkExperience = () => {

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="font-poppins text-3xl sm:text-4xl font-bold text-center mb-2 sm:mb-2">Work Experience</h1>
      <h6 className='font-poppins text-sm px-24 text-center mb-6 italic text-gray-500 sm:mb-8'>
        Throughout my career, I have gained valuable professional experience and am continually eager to expand my skills. I am always ready to embrace new challenges that foster growth and help me reach my full potential.
      </h6>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {experiences.map((experience, index) => (
          <WorkCardHolder
            key={index}
            title={experience.title}
            responsibilities={experience.responsibilities}
            company={experience.company}
            timeline={experience.timeline}
            icons={experience.technologies}
            className="max-w-sm mx-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
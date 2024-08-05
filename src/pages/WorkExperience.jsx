import React from 'react';
import WorkCardHolder from '../components/WorkCardHolder';
import experiences from '../json/workexperiences.json';

const WorkExperience = () => {

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="font-poppins text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">Work Experience</h1>
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
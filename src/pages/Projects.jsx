import React from 'react';
import CardHolder from '../components/CardHolder';
import projects from '../json/projects.json';

const Projects = () => {

    return (
        <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 ">
            <h1 className="font-poppins text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">Projects</h1>
            <h6 className='font-poppins text-sm px-24 text-center mb-6 italic text-gray-500 sm:mb-8'>
                These projects showcase the work I have completed during my academic journey, along with public and personal UI/UX design projects from my freelance experience. As a dedicated student of technology, I continually seek to stay informed about current industry trends. <strong>A work-in-progress Flutter app will be uploaded soon.</strong>
            </h6>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {projects.map((project, index) => (
                    <CardHolder
                        key={index}
                        title={project.title}
                        subtitle={project.description}
                        image={project.image}
                        parentFolder="img"
                        useApiImage={project.useApiImage}
                        cardWithImage={project.cardWithImage}
                        icons={project.technologies}
                        className="max-w-sm mx-auto"
                        buttonText={project.buttonText}
                        buttonUrl={project.buttonUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
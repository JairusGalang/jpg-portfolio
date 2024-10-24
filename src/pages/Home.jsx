import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'

const Home = () => {
    return (
        <>
            <div className="p-4 sm:p-8 flex flex-col md:flex-row items-center justify-center min-h-screen">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left md:pr-4 md:ml-6 mt-24 sm:mt-20 md:mt-0">
                    <div className="mb-4 px-2 sm:px-0">
                        <h1 className="font-poppins font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">
                            Hello<span className='animate-bounce transition duration-150 inline-block'>👋</span>, I'm <span className='text-dirtyPink'>Jairus Galang</span>
                        </h1>
                    </div>
                    <p className="font-poppins italic text-sm sm:text-base lg:text-lg mb-6 px-4 sm:px-0">
                        Systems Engineer at  <a href="#" className="font-poppins text-black cursor-pointer hover:text-dirtyPink">
                            First Datacorp
                        </a>. Flutter Mobile-Developer and a Front-end/Back-end Developer.
                    </p>
                    <div className="flex justify-center md:justify-start mb-6 px-4 sm:px-0">
                        <a href="https://drive.google.com/file/d/1twozs0mwRdV0shl4gY1TqlVAZjlB-5JF/view?usp=sharing" target='_blank' className="flex items-center bg-dirtyPink bg-opacity-50 text-white p-2 rounded-2xl hover:bg-dirtyPink transition-colors">
                            📋<span className="font-poppins font-medium mx-2 text-black text-sm sm:text-base">View Resume</span>
                        </a>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 px-4 sm:px-0">
                        <a href="https://www.linkedin.com/in/jairusgalang/" target='_blank' className="flex items-center bg-[#0A66C2] text-white p-2 rounded-md hover:bg-[#084d8f] transition-colors">
                            <FaLinkedin size={20} /><span className="font-poppins font-medium mx-2 text-sm sm:text-base">LinkedIn</span>
                        </a>
                        <a href="https://github.com/JairusGalang" target='_blank' className="flex items-center bg-[#24292e] text-white p-2 rounded-md hover:bg-[#1b1f23] transition-colors">
                            <FaGithub size={20} /><span className="font-poppins font-medium mx-2 text-sm sm:text-base">GitHub</span>
                        </a>
                        <a href="https://www.upwork.com/freelancers/~01eb3ad0a1989176dc?mp_source=share" target='_blank' className="flex items-center bg-[#6FDA44] text-white p-2 rounded-md hover:bg-[#5cc936] transition-colors">
                            <SiUpwork size={20} /><span className="font-poppins font-medium mx-2 text-sm sm:text-base">Upwork</span>
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                    <div className="max-w-xs sm:max-w-sm w-full p-2 sm:p-4 rounded-lg shadow-lg border-2 border-dirtyPink">
                        <img
                            src="/assets/images/jpg_image.jpg"
                            alt="Jairus Galang"
                            className="w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home
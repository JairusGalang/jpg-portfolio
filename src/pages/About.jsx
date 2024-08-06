import React from 'react'

const About = ({ children }) => {
    return (
        <div className='flex flex-col items-center min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-poppins'>
            <h1 className='text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8'>About Me</h1>
            <div className='bg-white shadow-md rounded-lg p-4 sm:p-6 max-w-[95%] sm:max-w-6xl'>
                <p className='mb-4 sm:mb-6 font-poppins text-base sm:text-lg text-gray-600'>
                    A passionate Software Developer from the Philippines. I am a graduate of Bachelor of Science in Information Technology and Major in Web Development. I previously worked as a Software Developer and developed a local based e-commerce app using Flutter and Firebase. I am currently searching for a Software Engineer/Developer role.
                </p>
                <ul className='list-disc pl-5 sm:pl-6 text-sm sm:text-base font-poppins text-gray-600 space-y-3 sm:space-y-2'>
                    <li>📖 - I'm currently learning <b>Flutter State Management</b>, <b>Firebase with Firebase Authentication</b> and <b>Cloud Firestore</b>, <b>React.js</b>, <b>Next.js</b> and <b>TailwindCSS.</b></li>
                    <li>👨‍💻 - Most of my details such <b>certifications</b>, <b>projects</b>, <b>updated resume</b>, or even my <b>contacts</b> or <b>platforms</b> to reach me are available here at my portfolio. </li>
                    <li>💬 - Ask me about <b>Flutter</b> and <b>Web Development</b> topics. </li>
                    <li>📧 - How to reach me <b>work@jairusgalang.com</b>.</li>
                    <li>✔️ - Fun fact I graduated with a Bachelor's Degree in Information Technology <b>Major of Web Development</b> but currently <b>working/upskilling</b> my skills in  <b>cross-platform such as Flutter</b>. </li>
                </ul>
            </div>
        </div>
    )
}

export default About
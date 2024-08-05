import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dirtyPinkTransparent py-4 px-4 sm:px-6 md:px-8">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                <div className="text-center sm:text-left mb-4 sm:mb-0">
                    <p className="font-poppins text-sm text-textBlack">
                        Made with React+Vite and TailwindCSS
                    </p>
                    <p className="font-poppins text-sm text-textBlack">
                        Made by Me
                    </p>
                </div>

                <div className="text-center mb-4 sm:mb-0">
                    <p className="font-poppins text-sm text-textBlack">
                        Contact me at: myname@domain.com
                    </p>
                </div>

                <div className="text-center sm:text-right">
                    <p className="font-poppins text-sm text-textBlack mb-2">
                        Connect with me thru:
                    </p>
                    <div className="flex justify-center sm:justify-end space-x-4">
                        <a href="#" className="text-textBlack hover:text-dirtyPink transition-colors">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="#" className="text-textBlack hover:text-dirtyPink transition-colors">
                            <FaGithub size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
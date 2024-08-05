import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('Home');
    const dropdownRef = useRef(null);

    const navItems = [
        { path: '#home', label: 'Home' },
        { path: '#about', label: 'About' },
        { path: '#projects', label: 'Projects' },
        { path: '#work-experience', label: 'Work' },
        { path: '#certificates', label: 'Certificates' },
        { path: '#contact-me', label: 'Contact Me' },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        // MODIFIED: Added scroll event listener to update currentPage based on scroll position
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const item of navItems) {
                const section = document.querySelector(item.path);
                if (section) {
                    const { offsetTop, offsetHeight } = section;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setCurrentPage(item.label);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once to set initial state

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navItems]);

    const handleNavigation = (path) => {
        setIsOpen(false);
        setCurrentPage(navItems.find(item => item.path === path).label);
        const section = document.querySelector(path);
        if (section) {
            const navbarHeight = document.querySelector('nav').offsetHeight;
            const topOffset = section.offsetTop - navbarHeight;
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="bg-dirtyPinkTransparent py-6 px-4 sm:px-6 md:px-8 fixed top-0 left-0 right-0 z-50 shadow-md">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <a href="#home" className="font-poppins font-medium textBlack text-lg sm:text-xl flex items-center">
                    <span className="mr-2">
                        <img src="/assets/images/img/logo-name.jpg" alt="Logo" className="h-6 w-6" />
                    </span>
                    <span>Jairus Galang</span>
                </a>
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="font-poppins font-medium textBlack text-sm sm:text-base flex items-center space-x-2 sm:space-x-4"
                    >
                        <span className='font-poppins font-medium textBlack hidden sm:inline'>{currentPage}</span>
                        <svg className="w-6 h-6 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                            {navItems.map((item) => (
                                <a
                                    key={item.path}
                                    href={item.path}
                                    className={`block px-4 py-2 text-sm capitalize font-poppins font-medium textBlack hover:bg-dirtyPink hover:textBlack rounded-md mx-2 transition-colors duration-200 ${currentPage === item.label ? 'bg-dirtyPink' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation(item.path);
                                    }}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
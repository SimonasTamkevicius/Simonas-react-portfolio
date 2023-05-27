import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

function NavBar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - 65 &&
          scrollPosition < sectionTop + sectionHeight - 65
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className='top-0 fixed left-0 right-0 z-10 bg-slate-100 rounded-lg'>
      <ul className='flex justify-center items-center py-5 mx-auto'>
        <li className={`text-md mr-5 cursor-pointer text-gray-700 sm:px-10 sm:text-lg md:px-15 md:text-lg lg:px-20 lg:text-xl ${activeSection === 'home' ? 'active' : ''}`}>
          <Link to='home' smooth={true} offset={-65} duration={1000}>
            Home
          </Link>
        </li>
        <li className={`text-md mr-5 cursor-pointer text-gray-700 sm:px-10 sm:text-lg md:px-15 md:text-lg lg:px-20 lg:text-xl ${activeSection === 'about' ? 'active' : ''}`}>
          <Link to='about' smooth={true} offset={-65} duration={1000}>
            About
          </Link>
        </li>
        <li className={`text-md mr-5 cursor-pointer text-gray-700 sm:px-10 sm:text-lg md:px-15 md:text-lg lg:px-20 lg:text-xl ${activeSection === 'projects' ? 'active' : ''}`}>
          <Link to='projects' smooth={true} offset={-65} duration={1000}>
            Projects
          </Link>
        </li>
        <li className={`text-md mr-5 cursor-pointer text-gray-700 sm:px-10 sm:text-lg md:px-15 md:text-lg lg:px-20 lg:text-xl ${activeSection === 'contact' ? 'active' : ''}`}>
          <Link to='contact' smooth={true} offset={-65} duration={1000}>
            Contact
          </Link>
        </li>
        <li>
          <button className='px-2 py-2 bg-cyan-500 hover:bg-cyan-600 rounded md sm:px-10 sm:text-lg md:text-lg lg:text-xl'>
            <a
              className='text-md text-white'
            >
              Resume
            </a>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;


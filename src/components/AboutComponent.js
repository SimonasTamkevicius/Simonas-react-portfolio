import React from 'react';
import Image from 'next/image';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import aboutIcon from '/public/abouticon.jpeg';

function AboutComponent() {
  return (
    <>
      <div className='flex flex-col items-center'>
        <ul className='flex justify-center gap-5 lg:pt-10'>
          <li>
            <h1 className='text-4xl text-center py-5 md:text-6xl md:pb-10 lg:6xl'>About Me</h1>
          </li>
          <li className=''>
            <div className='flex justify-center'>
              <Image src={aboutIcon} className='w-12 h-12 mt-4 md:w-16 md:h-16 m:mt-5 lg:w-20 lg:h-20 lg:mt-3' />
            </div>
          </li>
        </ul>
        <p className='text-md text-gray-700 flex text-center leading-10 mx-auto max-w-3xl md:text-lg md:leading-10 lg:text-xl lg:leading-10'>
          Hello! I'm an aspiring developer currently studying Computer Science at the University of Guelph. I'm passionate about web development and have been working with HTML, CSS, and vanilla JavaScript to create exciting projects. Recently, I've been exploring Node.js, React, and Tailwind CSS to expand my skills even further. When I'm not coding, I enjoy immersing myself in the world of sports, both as a spectator and a player. Basketball holds a special place in my heart, and I take pride in my collection of basketball memorabilia.
          <br />
          You can find me on LinkedIn and GitHub, where I actively engage with the developer community and share my projects and experiences. Feel free to connect and explore!
        </p>
      </div>
      <div className='text-5xl flex justify-center gap-20 py-5 md:py-10'>
        <a href='https://www.linkedin.com/in/simonas-ta' className='text-blue-500'>
          <AiFillLinkedin className='md:text-6xl lg:text-7xl' />
        </a>
        <a href='https://github.com/SimonasTamkevicius' className='text-gray-800'>
          <AiFillGithub className='md:text-6xl lg:text-7xl' />
        </a>
      </div>
    </>
  );
}

export default AboutComponent;

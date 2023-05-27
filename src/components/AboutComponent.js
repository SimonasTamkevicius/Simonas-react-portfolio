import React, { useEffect } from 'react';
import Image from 'next/image';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import aboutIcon from '/public/abouticon.jpeg';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

function AboutComponent() {
  const [sectionRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 40 });
    }
  }, [inView, controls]);

  return (
    <>
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <div className='flex flex-col items-center justify-center gap-5 lg:pt-10'>
          <h1 className='text-4xl text-center py-5 md:text-6xl md:pb-10 lg:6xl'>About Me</h1>
          <p className='text-md text-gray-700 flex text-center leading-10 mx-auto max-w-3xl md:text-lg md:leading-10 lg:text-xl lg:leading-10'>
            Hello! I'm an aspiring developer currently studying Computer Science at the University of Guelph. I'm
            passionate about web development and have been working with HTML, CSS, and vanilla JavaScript to create
            exciting projects. Recently, I've been exploring Node.js, React, and Tailwind CSS to expand my skills even
            further. When I'm not coding, I enjoy immersing myself in the world of sports, both as a spectator and a
            player. Basketball holds a special place in my heart, and I take pride in my collection of basketball
            memorabilia.
            <br />
            You can find me on LinkedIn and GitHub, where I actively engage with the developer community and share my
            projects and experiences. Feel free to connect and explore!
          </p>
        </div>
        <div className='text-5xl flex justify-center gap-20 py-5 md:py-10'>
          <a href='https://www.linkedin.com/in/simonas-ta' className='text-blue-500 hover:text-blue-600 hover:scale-110'>
            <AiFillLinkedin className='md:text-6xl lg:text-7xl' />
          </a>
          <a href='https://github.com/SimonasTamkevicius' className='text-gray-800 hover:text-gray-900 hover:scale-110'>
            <AiFillGithub className='md:text-6xl lg:text-7xl' />
          </a>
        </div>
      </motion.div>
    </>
  );
}

export default AboutComponent;

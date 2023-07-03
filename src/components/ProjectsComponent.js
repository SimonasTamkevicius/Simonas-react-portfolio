import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FireflyghtThumbnail from '/public/FireflyghtThumbnail.png';
import MVThumbnail from '/public/moleculeViewerThumbnail.png';
import F1Thumbnail from '/public/f1WebsiteThumbnail.png';
import EcommerceThumbnail from '/public/ecommerce-thumbnail.png';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import blogSiteThumbnail from'/public/blogSite.png';

function ProjectsComponent() {
  const [sectionRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1, // Adjust the threshold value as needed
  });
  const [scrollDirection, setScrollDirection] = useState(null);

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 40 });
    }
  }, [inView, controls]);

  const [cardRef1, cardInView1] = useInView({
    triggerOnce: false,
  });

  const [cardRef2, cardInView2] = useInView({
    triggerOnce: false,
  });

  const [cardRef3, cardInView3] = useInView({
    triggerOnce: false,
  });

  const [cardRef4, cardInView4] = useInView({
    triggerOnce: false,
  });

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > lastScrollPosition) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollPosition = currentPosition;
    };

    let lastScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (cardInView1) {
      if (scrollDirection === 'down') {
        controls1.start({ x: 0, opacity: 1 });
      } else {
        controls1.set({ x: 1, opacity: 1 });
      }
    } else {
      controls1.set({ x: '-100vw', opacity: 0 });
    }
  }, [cardInView1, scrollDirection, controls1]);
  

  useEffect(() => {
    if (cardInView2) {
      if (scrollDirection === 'down') {
        controls2.start({ x: 0, opacity: 1 });
      } else {
        controls2.set({ x: 1, opacity: 1 });
      }
    } else {
      controls2.set({ x: '-100vw', opacity: 0 });
    }
  }, [cardInView2, scrollDirection, controls2]);

  useEffect(() => {
    if (cardInView3) {
      if (scrollDirection === 'down') {
        controls3.start({ x: 0, opacity: 1 });
      } else {
        controls3.set({ x: 1, opacity: 1 });
      }
    } else {
      controls3.set({ x: '-100vw', opacity: 0 });
    }
  }, [cardInView3, scrollDirection, controls3]);

  useEffect(() => {
    if (cardInView4) {
      if (scrollDirection === 'down') {
        controls4.start({ x: 0, opacity: 1 });
      } else {
        controls4.set({ x: 1, opacity: 1 });
      }
    } else {
      controls4.set({ x: '-100vw', opacity: 0 });
    }
  }, [cardInView4, scrollDirection, controls4]);

  return (
    <>
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <div className='flex justify-center gap-5 lg:pt-10'>
          <h1 className='text-4xl text-center py-5 md:text-6xl md:pb-10 lg:6xl'>Projects</h1>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-10 pt-10'>
          <div className='pr-6 pl-6 pb-6 md:w-1/2 hover:transform hover:scale-105 transition-transform duration-250' style={{ minHeight: '400px' }}>
            <div ref={cardRef1}>
              <motion.div
                initial={{ x: '-100vw', opacity: 0 }}
                animate={controls1}
                transition={{ duration: 0.85, delay: 0.3 }}
              >
                <a href='https://ecommerce-react-website-six.vercel.app' target='_blank'>
                  <div className='max-w-m rounded overflow-hidden shadow-lg'>
                    <Image className='w-full h-60 md:w-full md:h-80' src={EcommerceThumbnail} alt='Ecommerce Site' />
                    <div className='px-6 py-4 bg-blue-50'>
                      <div className='font-bold text-xl mb-2'>Ecommerce React Website</div>
                      <p className='text-gray-700 text-base'>
                      This project is a React e-commerce website that utilizes context for a seamless shopping experience. With a robust cart system, it aims to provide an intuitive online shopping experience.
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
          <div className='p-6 md:w-1/2 hover:transform hover:scale-105 transition-transform duration-250' style={{ minHeight: '400px', marginTop: '-23px' }}>
            <div ref={cardRef2}>
              <motion.div
                initial={{ x: '-100vw', opacity: 0 }}
                animate={controls2}
                transition={{ duration: 0.85, delay: 0.3 }}
              >
                <Link href='/MoleculeViewer'>
                  <div className='max-w-m rounded overflow-hidden shadow-lg'>
                    <Image className='w-full h-60 md:w-full md:h-80' src={MVThumbnail} alt='Molecule Viewer' />
                    <div className='px-6 py-4 bg-green-100'>
                      <div className='font-bold text-xl mb-2'>Molecule Viewer</div>
                      <p className='text-gray-700 text-base'>
                        Molecule Viewer is a full-stack web application with which you can add/remove elements, upload
                        molecule files, and view and rotate them in your browser.
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-10 py-12'>
          <div className='pr-6 pl-6 pb-6 md:w-1/2 hover:transform hover:scale-105 transition-transform duration-250' style={{ minHeight: '400px' }}>
            <div ref={cardRef3}>
              <motion.div
                initial={{ x: '-100vw', opacity: 0 }}
                animate={controls3}
                transition={{ duration: 0.85, delay: 0.3 }}
              >
                <Link href='https://blog-website-app-15143c866564.herokuapp.com/' target='_blank'>
                  <div className='max-w-m rounded overflow-hidden shadow-lg'>
                    <Image className='w-full h-60 md:w-full md:h-80' src={blogSiteThumbnail} alt='Blog Website' />
                    <div className='px-6 py-4 bg-gray-200'>
                      <div className='font-bold text-xl mb-2'>Blog Website</div>
                      <p className='text-gray-700 text-base'>
                        This is a full stack blog website where users can view the blog posts, and the administrator can login and create posts effortlessly.
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
          <div className='pr-6 pl-6 pb-6 md:w-1/2 hover:transform hover:scale-105 transition-transform duration-250' style={{ minHeight: '400px'}}>
            <div ref={cardRef4}>
              <motion.div
                initial={{ x: '-100vw', opacity: 0 }}
                animate={controls4}
                transition={{ duration: 0.85, delay: 0.3 }}
              >
                <Link href='/Fireflyght'>
                  <div className='max-w-m rounded overflow-hidden shadow-lg'>
                    <Image className='w-full h-60 md:w-full md:h-80' src={FireflyghtThumbnail} alt='Fireflyght' />
                    <div className='px-6 py-4 bg-blue-200'>
                      <div className='font-bold text-xl mb-2'>Fireflyght</div>
                      <p className='text-gray-700 text-base'>
                        Fireflyght is a game modeled after the uber popular mobile game Flappy Bird. I created this game
                        in pygame with the aim of exploring the basics of game development.
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ProjectsComponent;

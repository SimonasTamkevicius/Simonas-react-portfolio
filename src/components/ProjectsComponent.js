import React, { useEffect } from 'react';
import Image from 'next/image';
import ProjectIcon from '/public/projectsIcon.jpeg';
import FireflyghtThumbnail from '/public/FireflyghtThumbnail.png';
import MVThumbnail from '/public/moleculeViewerThumbnail.png';
import F1Thumbnail from '/public/f1WebsiteThumbnail.png';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

function ProjectsComponent() {
  const { ref: cardRef1, inView: cardInView1, onEnter: onEnter1, onLeave: onLeave1 } = useInView({
    triggerOnce: false,
  });

  const { ref: cardRef2, inView: cardInView2, onEnter: onEnter2, onLeave: onLeave2 } = useInView({
    triggerOnce: false,
  });

  const { ref: cardRef3, inView: cardInView3, onEnter: onEnter3, onLeave: onLeave3 } = useInView({
    triggerOnce: false,
  });

  const { ref: cardRef4, inView: cardInView4, onEnter: onEnter4, onLeave: onLeave4 } = useInView({
    triggerOnce: false,
  });

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  useEffect(() => {
    if (cardInView1) {
      controls1.start({ x: 0, opacity: 1 });
    }
  }, [controls1, cardInView1]);

  useEffect(() => {
    if (!cardInView1) {
      controls1.set({ x: '-100vw', opacity: 0 });
    }
  }, [controls1, cardInView1]);

  useEffect(() => {
    if (cardInView2) {
      controls2.start({ x: 0, opacity: 1 });
    }
  }, [controls2, cardInView2]);

  useEffect(() => {
    if (!cardInView2) {
      controls2.set({ x: '-100vw', opacity: 0 });
    }
  }, [controls2, cardInView2]);

  useEffect(() => {
    if (cardInView3) {
      controls3.start({ x: 0, opacity: 1 });
    }
  }, [controls3, cardInView3]);

  useEffect(() => {
    if (!cardInView3) {
      controls3.set({ x: '-100vw', opacity: 0 });
    }
  }, [controls3, cardInView3]);

  useEffect(() => {
    if (cardInView4) {
      controls4.start({ x: 0, opacity: 1 });
    }
  }, [controls4, cardInView4]);

  useEffect(() => {
    if (!cardInView4) {
      controls4.set({ x: '-100vw', opacity: 0 });
    }
  }, [controls4, cardInView4]);

  return (
    <>
      <div>
        <ul className='flex justify-center gap-5 lg:pt-10'>
          <li>
            <h1 className='text-4xl text-center py-5 md:text-6xl md:pb-10 lg:6xl'>Projects</h1>
          </li>
          <li className=''>
            <Image
              src={ProjectIcon}
              className='w-12 h-12 mt-4 md:w-20 md:h-20 m:mt-2 lg:w-20 lg:h-20 lg:mt-3'
            />
          </li>
        </ul>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-10 pt-10'>
        <div className='pr-6 pl-6 pb-6 md:w-1/2' style={{ minHeight: '400px' }}>
          <div ref={cardRef1} onEnter={onEnter1} onLeave={onLeave1}>
            <motion.div
              initial={{ x: '-100vw', opacity: 0 }}
              animate={controls1}
              transition={{ duration: 0.85, delay: 0.3 }}
            >
              <div className='max-w-m rounded overflow-hidden shadow-lg'>
                <Image className='w-full h-60 md:w-full md:h-80' src={FireflyghtThumbnail} alt='Fireflyght' />
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>Fireflyght</div>
                  <p className='text-gray-700 text-base'>
                    Fireflyght is a game modeled after the uber popular mobile game Flappy Bird. I created this game
                    in pygame with the aim of exploring the basics of game development.
                  </p>
                </div>
                <div className='px-6 pt-4 pb-2'>
                  <h3 className=''>
                    Feel free to{' '}
                    <a href='https://github.com/SimonasTamkevicius/Fireflyght-Game' className='text-cyan-500'>
                      download
                    </a>{''}
                    , experiment, and play it yourself!
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className='p-6 md:w-1/2' style={{ minHeight: '400px', marginTop: '-23px' }}>
          <div ref={cardRef2} onEnter={onEnter2} onLeave={onLeave2}>
            <motion.div
              initial={{ x: '-100vw', opacity: 0 }}
              animate={controls2}
              transition={{ duration: 0.85, delay: 0.3 }}
            >
              <div className='max-w-m rounded overflow-hidden shadow-lg'>
                <Image className='w-full h-60 md:w-full md:h-80' src={MVThumbnail} alt='Molecule Viewer' />
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>Molecule Viewer</div>
                  <p className='text-gray-700 text-base'>
                    Molecule Viewer is a full-stack web application with which you can add/remove elements, upload
                    molecule files, and view and rotate them in your browser.
                  </p>
                </div>
                <div className='px-6 pt-4 pb-2'>
                  <h3 className=''>
                    Visit my GitHub to{' '}
                    <a href='https://github.com/SimonasTamkevicius/Fireflyght-Game' className='text-cyan-500'>
                      download
                    </a>{' '}
                    and try it for yourself!
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className='mx-auto flex flex-col md:flex-row justify-center items-center gap-10 pt-10'>
        <div className='pr-6 pl-6 pb-6 md:w-1/2' style={{ minHeight: '400px' }}>
            <div ref={cardRef3} onEnter={onEnter3} onLeave={onLeave3}>
              <motion.div
                initial={{ x: '-100vw', opacity: 0 }}
                animate={controls3}
                transition={{ duration: 0.85, delay: 0.3 }}
              >
                <div className='max-w-m rounded overflow-hidden shadow-lg'>
                  <Image className='w-full h-60 md:w-full md:h-80' src={F1Thumbnail} alt='Fireflyght' />
                  <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>Fireflyght</div>
                    <p className='text-gray-700 text-base'>
                      Fireflyght is a game modeled after the uber popular mobile game Flappy Bird. I created this game
                      in pygame with the aim of exploring the basics of game development.
                    </p>
                  </div>
                  <div className='px-6 pt-4 pb-2'>
                    <h3 className=''>
                      Feel free to{' '}
                      <a href='https://github.com/SimonasTamkevicius/Fireflyght-Game' className='text-cyan-500'>
                        download
                      </a>{''}
                      , experiment, and play it yourself!
                    </h3>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className='pr-6 pl-6 pb-6 md:w-1/2' style={{ minHeight: '400px' }}>
          <div ref={cardRef4} onEnter={onEnter4} onLeave={onLeave4}>
            <motion.div
              initial={{ x: '-100vw', opacity: 0 }}
              animate={controls4}
              transition={{ duration: 0.85, delay: 0.3 }}
            >
              <div className='max-w-m rounded overflow-hidden shadow-lg'>
                <Image className='w-full h-60 md:w-full md:h-80' src={FireflyghtThumbnail} alt='Fireflyght' />
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>Fireflyght</div>
                  <p className='text-gray-700 text-base'>
                    Fireflyght is a game modeled after the uber popular mobile game Flappy Bird. I created this game
                    in pygame with the aim of exploring the basics of game development.
                  </p>
                </div>
                <div className='px-6 pt-4 pb-2'>
                  <h3 className=''>
                    Feel free to{' '}
                    <a href='https://github.com/SimonasTamkevicius/Fireflyght-Game' className='text-cyan-500'>
                      download
                    </a>{''}
                    , experiment, and play it yourself!
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsComponent;

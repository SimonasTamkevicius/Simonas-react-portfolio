import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function HomeAboutTransition() {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
        rootMargin: '-100px 0px',
      });
      const [scrollDirection, setScrollDirection] = useState(null);
      const controls = useAnimation();
    
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
        if (inView) {
            if (scrollDirection === 'down') {
                controls.start({ opacity: 1, x: '100vw' });
            } else if (scrollDirection === 'up') {
                controls.start({ opacity: 1, x: '-100vw' });
            }
        }
      }, [inView, scrollDirection, controls]);

  return (
    <div ref={sectionRef} style={{ overflowX: 'hidden'}}>
        <motion.div
        animate={controls}
        transition={{ duration: 1.5 }}
        >
        <div className="border-t-8 border-black"></div>
        </motion.div>
    </div>
  );
}

export default HomeAboutTransition;

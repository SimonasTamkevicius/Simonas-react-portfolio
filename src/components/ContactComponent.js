import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import profileImg from '/public/simonasImg1.jpeg';

function ContactComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to server
      const response = await fetch('https://getform.io/f/573f957b-978b-4c11-9aa8-06a3c178ce1d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(true);
      } else {
        throw new Error('Error occurred while submitting the form.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <>
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
      {submitted ? (
        <div className='flex justify-center mt-80'>
          <div className='bg-cyan-100 md:mt-0 p-10 rounded-lg border-4 border-cyan-600'>
            <h1 className='text-4xl text-center'>Thanks for reaching out!</h1>
            <p className='text-center pt-10'>I will get back to you as soon as possible.</p>
          </div>
        </div>
      ) : (
        <>
          <div className='flex flex-col items-center'>
            <ul className='flex justify-center gap-5 lg:pt-10'>
              <li>
                <h1 className='text-4xl text-center py-5 md:text-6xl md:pb-20 lg:text-6xl'>Contact Me</h1>
              </li>
              <li className=''></li>
            </ul>
          </div>
          <div className='flex justify-center'>
            <form
              action='https://getform.io/f/573f957b-978b-4c11-9aa8-06a3c178ce1d'
              method='POST'
              className='relative bg-cyan-100 mt-20 md:mt-0 p-10 rounded-lg border-4 border-cyan-600 flex flex-col items-center'
              onSubmit={handleSubmit}
            >
              <div
                className='absolute -top-10 border-4 border-cyan-600 bg-gradient-to-b from-teal-500 rounded-full overflow-hidden animate-bounce shadow-2xl'
                style={{ width: '125px', height: '125px !important', animationDuration: '2s' }}
              >
                <Image src={profileImg} />
              </div>
              <h1 className='flex justify-center text-2xl text-cyan-600 pt-10 md:text-4xl'>Simonas Tamkevicius</h1>
              <div className='mb-4 mt-10 flex flex-col md:flex-row md:items-center'>
                <div className='mb-4 md:mr-4'>
                  <label htmlFor='name' className='text-lg md:text-xl font-medium'>
                    Name
                  </label>
                  <input
                    required
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Enter name'
                    className='w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor='email' className='text-lg md:text-xl font-medium'>
                    Email
                  </label>
                  <input
                    required
                    type='email'
                    id='email'
                    placeholder='Enter email'
                    name='email'
                    className='w-full px-4 py-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <label htmlFor='message' className='w-full text-lg md:text-xl font-medium'>
                Message
              </label>
              <textarea
                required
                id='message'
                rows='4'
                name='message'
                placeholder='Enter message'
                className='auto-rows-auto w-full px-4 py-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className='flex justify-end w-full'>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  type='submit'
                  className='px-2 py-1 mt-5 text-sm font-medium text-white bg-cyan-500 rounded-md hover:bg-cyan-600'
                  style={{ minWidth: '6rem', minHeight: '2.5rem' }}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </>
      )}
      </motion.div>
    </>
  );
}

export default ContactComponent;

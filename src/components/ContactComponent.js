import React from 'react';
import { useState } from 'react';

function ContactComponent() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message successfully submitted!');
  };

  return (
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
        <form onSubmit={handleSubmit} className='bg-cyan-100 p-20 rounded-lg border-4 border-cyan-600'>
          <label htmlFor='name' className='text-xl font-medium'>
            Name
          </label>
          <input
            required='true'
            type='text'
            id='name'
            className='w-full px-4 py-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor='message' className='text-xl font-medium'>
            Message
          </label>
          <textarea
            id='message'
            rows='7'
            className='w-full px-4 py-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type='submit'
            className='px-4 py-2 mt-10 text-lg font-medium text-white bg-cyan-500 rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-cyan-600'
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactComponent;

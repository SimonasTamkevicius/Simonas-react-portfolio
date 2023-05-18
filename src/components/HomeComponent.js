import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import simonasImg from 'public/simonasImg1.jpeg';
import imgScrollArrow from 'public/right-arrow.png';

function HomeComponent() {
  return (
    <div className="flex flex-col items-center md:flex-row md:py-10">
      <div className="w-full md:w-1/2">
        <div className="mx-auto flex justify-center">
          <Image src={simonasImg} className="pt-20 md:max-w-m lg:max-w-xl" />
        </div>
      </div>
      <div className="w-full md:w-1/2 md:mt-0 lg:mt-0">
        <div className="pt-4 mx-auto flex justify-center">
          <h1 className="text-4xl text-center md:text-6xl lg:text-7xl text-cyan-600">Simonas Tamkevicius</h1>
        </div>
        <div className="pt-10 mx-auto flex justify-center">
          <p className="text-md text-gray-700 leading-10 text-center md:max-w-m md:text-lg lg:max-w-xl lg:text-xl">
            Welcome! I'm Simonas, a developer building remarkable digital experiences. Explore my portfolio and let's create something awesome together!
          </p>
        </div>
      </div>
      <div className="mx-auto flex flex-col justify-center items-center pt-5 md:pt-80 lg:pt-96">
        <Link to='about' smooth={true} offset={-65} duration={500}><Image src={imgScrollArrow} className="w-8 h-8 animate-bounce md:w-18 md:h-18 lg:w-16 lg:h-16 cursor-pointer" /></Link>
      </div>
    </div>
  );
}

export default HomeComponent;


import Head from 'next/head';
import { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import HomeComponent from '@/components/HomeComponent';
import AboutComponent from '@/components/AboutComponent';
import ProjectsComponent from '@/components/ProjectsComponent';
import ContactComponent from '@/components/ContactComponent';
import HomeAboutTransition from '@/components/HomeAboutTransition';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  return (
    <div>
      <Head>
        <title>Simonas Tamkevicius Portfolio</title>
        <meta name='description' content='' />
      </Head>

      <NavBar />
      <main className=''>
        <section id='home' className='min-h-screen px-5 md:px-20 lg:px-40 bg-white'>
          <div>
            <HomeComponent />
          </div>
        </section>
        <section id='homeAboutTransition' className='bg-white'>
          <HomeAboutTransition />
        </section>
        <section id='about' className='min-h-screen px-5 md:px-20 lg:px-40 bg-cyan-200'>
          <div className=''>
            <AboutComponent />
          </div>
        </section>
        <section id='projects' className='min-h-screen px-5 md:px-20 lg:px-40 bg-white'>
          <ProjectsComponent />
        </section>
        <section id='contact' className='min-h-screen px-5 md:px-20 lg:px-40 bg-gray-200'>
          <ContactComponent />
        </section>
      </main>
    </div>
  );
}

import Head from 'next/head';
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import HomeComponent from '@/components/HomeComponent';
import AboutComponent from '@/components/AboutComponent';
import ProjectsComponent from '@/components/ProjectsComponent';
import ContactComponent from '@/components/ContactComponent';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div>
      <Head>
        <title>Simonas Tamkevicius Portfolio</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-white px-5 md:px-20 lg:px-40'>
        <div className='pt-2'>
            <NavBar />
        </div>
        <div>
          <section id='home' className='min-h-screen bg-[/public/background.jpg] bg-cover bg-center bg-no-repeat'>
            <div>
              <HomeComponent />
            </div>
          </section>
          <section id='about' className='min-h-screen'>
            <div>
              <AboutComponent />
            </div>
          </section>
          <section id='projects' className='min-h-screen'>
            <ProjectsComponent />
          </section>
          <section id='contact' className='min-h-screen'>
            <ContactComponent />
          </section>
        </div>
      </main>
    </div>
  );
}

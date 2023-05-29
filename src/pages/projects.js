import AnimatedText from '@/components/AnimatedText';
import Project from '@/components/Project';
import Head from 'next/head';
import React from 'react';
import Layout from './Layout';
import projectImage1 from '../../public/images/projects/banking.webp';
import projectImage2 from '../../public/images/projects/gpt3.webp';
import projectImage3 from '../../public/images/projects/portfolio.webp';
import projectImage4 from '../../public/images/projects/restaurant.webp';
import projectImage5 from '../../public/images/projects/spotify.webp';
import projectImage6 from '../../public/images/projects/github.webp';
import PageTransition from '@/components/PageTransition';
const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | RK</title>
        <meta name="description" content="Projects page of RK portfolio" />
      </Head>
      <article className="text-dark w-full pt-12 mx-auto px-28 pt-2 pb-4 dark:bg-dark lg:px-16 sm:px-8">
        <PageTransition />
        <Layout className="flex flex-col items-center justify-between w-full h-full inline-block z-0">
          <AnimatedText
            text="imagination trumps knowledge"
            className="text-6xl md:text-5xl sm:text-4xl text-center"
          />
          <section className="grid grid-cols-2 gap-16 place-items-center p-12 md:flex md:flex-col">
            <Project
              className="col-span-2 grid-flow-col lg:grid-flow-row"
              imgLink={projectImage5}
              title="Spotify clone"
              desc="A clone of spotify with login and playback and several other features using react, next.js and next-auth"
              githubLink="https://github.com/sridhram/spotify-clone"
              vercelLink="https://spotify-clone-sridhram.vercel.app/"
            />
            <Project
              className="grid-flow-row"
              imgLink={projectImage4}
              title="Restaurant Landing Page"
              desc="A modern fully responsive landing page explaining about GPT-3 features made using ReactJS"
              githubLink="https://github.com/sridhram/restaurant-landing-page"
              vercelLink="https://restaurant-landing-page-orpin.vercel.app/"
            />
            <Project
              className="grid-flow-row"
              imgLink={projectImage2}
              title="GPT-3 Landing Page"
              desc="A modern fully responsive landing page explaining about GPT-3 features made using ReactJS"
              githubLink="https://github.com/sridhram/gpt-3-landing-page"
              vercelLink="https://gpt-3-landing-page-ip5hfrdbh-sridhram.vercel.app/"
            />
            <Project
              className="col-span-2 grid-flow-col lg:grid-flow-row"
              imgLink={projectImage1}
              title="Modern Bank Landing Page"
              desc="A Fully responsive page for a modern financial system made with react.js and tailwind."
              githubLink="https://github.com/sridhram/bank-landing-page"
              vercelLink="https://bank-landing-page-flame.vercel.app/"
            />
            <Project
              className="grid-flow-row"
              imgLink={projectImage3}
              title="Modern Portfolio Page"
              desc="A modern fully responsive modern portfolio for a developer with dark mode setup and simple animations developed using react, next.js, tailwind and three.js"
              githubLink="https://github.com/sridhram/portfolio-website"
              vercelLink="https://rk-portfolio-sridhram.vercel.app/"
            />
            <Project
              className="grid-flow-row"
              imgLink={projectImage6}
              title="Many more..."
              desc="Have a look at my github page for manu more projects..."
              githubLink="https://github.com/sridhram/"
              vercelLink="https://github.com/sridhram/"
            />
          </section>
        </Layout>
      </article>
    </>
  );
};

export default Projects;

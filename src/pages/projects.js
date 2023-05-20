import AnimatedText from '@/components/AnimatedText';
import Project from '@/components/Project';
import Head from 'next/head';
import React from 'react';
import Layout from './Layout';
import projectImage from '../../public/images/projects/devdreaming.jpg';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | RK</title>
        <meta name="description" content="Projects page of RK portfolio" />
      </Head>
      <article className="text-dark w-full pt-12 mx-auto px-28 pt-2 pb-4 dark:bg-dark lg:px-16 sm:px-8">
        <Layout className="flex flex-col items-center justify-between w-full h-full inline-block z-0">
          <AnimatedText
            text="imagination trumps knowledge"
            className="text-6xl md:text-5xl sm:text-4xl text-center"
          />
          <section className="grid grid-cols-2 gap-16 place-items-center p-12 md:flex md:flex-col">
            <Project
              className="col-span-2 grid-flow-col lg:grid-flow-row"
              imgLink={projectImage}
              title="GPT-3 Landing Page"
              desc="A modern fully responsive landing page explaining about GPT-3 features made using ReactJS"
              githubLink="https://github.com/sridhram/gpt-3-landing-page"
              vercelLink="https://gpt-3-landing-page-ip5hfrdbh-sridhram.vercel.app/"
            />
            <Project
              className="grid-flow-row"
              imgLink={projectImage}
              title="GPT-3 Landing Page"
              desc="A modern fully responsive landing page explaining about GPT-3 features made using ReactJS"
              githubLink="https://github.com/sridhram/gpt-3-landing-page"
              vercelLink="https://gpt-3-landing-page-ip5hfrdbh-sridhram.vercel.app/"
            />
            <Project
              className="grid-flow-row"
              imgLink={projectImage}
              title="GPT-3 Landing Page"
              desc="A modern fully responsive landing page explaining about GPT-3 features made using ReactJS"
              githubLink="https://github.com/sridhram/gpt-3-landing-page"
              vercelLink="https://gpt-3-landing-page-ip5hfrdbh-sridhram.vercel.app/"
            />
            <Project
              className="col-span-2 grid-flow-col lg:grid-flow-row"
              imgLink={projectImage}
              title="GPT-3 Landing Page"
              desc="A modern fully responsive landing page explaining about GPT-3 features made using ReactJS"
              githubLink="https://github.com/sridhram/gpt-3-landing-page"
              vercelLink="https://gpt-3-landing-page-ip5hfrdbh-sridhram.vercel.app/"
            />
            <Project
              className="grid-flow-row"
              imgLink={projectImage}
              title="GPT-3 Landing Page"
              desc="A modern fully responsive landing page explaining about GPT-3 features made using ReactJS"
              githubLink="https://github.com/sridhram/gpt-3-landing-page"
              vercelLink="https://gpt-3-landing-page-ip5hfrdbh-sridhram.vercel.app/"
            />
            <Project
              className="grid-flow-row"
              imgLink={projectImage}
              title="GPT-3 Landing Page"
              desc="A modern fully responsive landing page explaining about GPT-3 features made using ReactJS"
              githubLink="https://github.com/sridhram/gpt-3-landing-page"
              vercelLink="https://gpt-3-landing-page-ip5hfrdbh-sridhram.vercel.app/"
            />
          </section>
        </Layout>
      </article>
    </>
  );
};

export default Projects;

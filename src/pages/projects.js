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
      <article className="text-dark w-full mt-12 max-w-[1450px] mx-auto px-28 pt-2 pb-4 dark:bg-dark md:px-16 sm:px-8">
        <Layout className="flex flex-col items-center justify-between w-full h-full inline-block z-0">
          <AnimatedText
            text="imagination trumps knowledge"
            className="text-6xl"
          />
          <section className="grid grid-cols-2 grid-rows-4 gap-x-16 place-items-center p-12">
            <Project
              className="col-span-2 grid-flow-col"
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
              className="col-span-2 grid-flow-col"
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

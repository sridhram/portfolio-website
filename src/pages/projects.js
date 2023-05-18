import AnimatedText from '@/components/AnimatedText';
import Project from '@/components/Project';
import Head from 'next/head';
import React from 'react';
import Layout from './Layout';
import projectImage from '../../public/images/projects/gpt3-image.png';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | RK</title>
        <meta name="description" content="Projects page of RK portfolio" />
      </Head>
      <article className="text-dark w-full mt-12">
        <Layout className="flex flex-col items-center justify-between w-full h-full inline-block z-0 bg-light gap-16">
          <AnimatedText
            text="imagination trumps knowledge"
            className="text-6xl"
          />
          <section className="grid grid-cols-2 grid-rows-4 gap-12 place-items-center">
            <Project
              className="col-span-2 auto-cols-[50%] grid-flow-col"
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
              className="col-span-2 auto-cols-[50%] grid-flow-col"
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

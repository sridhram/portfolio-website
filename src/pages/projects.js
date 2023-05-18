import AnimatedText from '@/components/AnimatedText';
import Project from '@/components/Project';
import Head from 'next/head';
import React from 'react';
import Layout from './Layout';

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
          <section className="grid grid-cols-2 grid-rows-4 gap-2 place-items-center">
            <Project
              className="col-span-2"
              imgLink="https://camo.githubusercontent.com/fb037e90eb92f3f53e79f2f0fdada922a8e6f3664140710f0c3691a808b675b6/68747470733a2f2f692e6962622e636f2f5452354c57397a2f696d6167652e706e67"
              title="GPT-3 Landing Page"
              desc="A modern fully responsive landing page explaining about GPT-3 features made using ReactJS"
              githubLink="https://github.com/sridhram/gpt-3-landing-page"
              vercelLink="https://gpt-3-landing-page-ip5hfrdbh-sridhram.vercel.app/"
            />
            <Project
              className=""
              imgLink="https://camo.githubusercontent.com/fb037e90eb92f3f53e79f2f0fdada922a8e6f3664140710f0c3691a808b675b6/68747470733a2f2f692e6962622e636f2f5452354c57397a2f696d6167652e706e67"
              title="GPT-3 Landing Page"
              desc="A modern fully responsive landing page explaining about GPT-3 features made using ReactJS"
              githubLink="https://github.com/sridhram/gpt-3-landing-page"
              vercelLink="https://gpt-3-landing-page-ip5hfrdbh-sridhram.vercel.app/"
            />
            <Project
              className=""
              imgLink="https://camo.githubusercontent.com/fb037e90eb92f3f53e79f2f0fdada922a8e6f3664140710f0c3691a808b675b6/68747470733a2f2f692e6962622e636f2f5452354c57397a2f696d6167652e706e67"
              title="GPT-3 Landing Page"
              desc="A modern fully responsive landing page explaining about GPT-3 features made using ReactJS"
              githubLink="https://github.com/sridhram/gpt-3-landing-page"
              vercelLink="https://gpt-3-landing-page-ip5hfrdbh-sridhram.vercel.app/"
            />
            <Project
              className="col-span-2"
              imgLink="https://camo.githubusercontent.com/fb037e90eb92f3f53e79f2f0fdada922a8e6f3664140710f0c3691a808b675b6/68747470733a2f2f692e6962622e636f2f5452354c57397a2f696d6167652e706e67"
              title="GPT-3 Landing Page"
              desc="A modern fully responsive landing page explaining about GPT-3 features made using ReactJS"
              githubLink="https://github.com/sridhram/gpt-3-landing-page"
              vercelLink="https://gpt-3-landing-page-ip5hfrdbh-sridhram.vercel.app/"
            />
            <Project
              className=""
              imgLink="https://camo.githubusercontent.com/fb037e90eb92f3f53e79f2f0fdada922a8e6f3664140710f0c3691a808b675b6/68747470733a2f2f692e6962622e636f2f5452354c57397a2f696d6167652e706e67"
              title="GPT-3 Landing Page"
              desc="A modern fully responsive landing page explaining about GPT-3 features made using ReactJS"
              githubLink="https://github.com/sridhram/gpt-3-landing-page"
              vercelLink="https://gpt-3-landing-page-ip5hfrdbh-sridhram.vercel.app/"
            />
            <Project
              className=""
              imgLink="https://camo.githubusercontent.com/fb037e90eb92f3f53e79f2f0fdada922a8e6f3664140710f0c3691a808b675b6/68747470733a2f2f692e6962622e636f2f5452354c57397a2f696d6167652e706e67"
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

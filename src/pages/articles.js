import AnimatedText from '@/components/AnimatedText';
import Project from '@/components/Project';
import Head from 'next/head';
import react, { useRef } from 'react';
import Layout from './Layout';
import projectImage from '../../public/images/projects/devdreaming.jpg';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion';
import img from '../../public/images/articles/create loading screen in react js.jpg';

const MovingImage = ({ title, articleLink }) => {
  function handleMouseMove() {
    imgRef.current.style.display = 'inline-block';
    x.set(event.pageX);
    y.set(30);
  }

  function handleMouseLeave() {
    imgRef.current.style.display = 'none';
    x.set(0);
    y.set(0);
  }
  const FramerImage = motion(Image);
  const imgRef = useRef();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  return (
    <>
      <Link
        href={articleLink}
        target={'_blank'}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <h4 className="text-xl font-semibold hover:underline dark:text-light">
          {title}
        </h4>
      </Link>
      <FramerImage
        className="absolute hidden rounded-lg w-1/4"
        ref={imgRef}
        src={img}
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
      />
    </>
  );
};

const Article = ({ title, date, articleLink }) => {
  return (
    <section className="flex p-4 justify-between border border-solid border-dark rounded-lg shadow-[3px_2px] gap-4 dark:border-light dark:shadow-light max-w-[1450px] mx-auto">
      <MovingImage title={title} articleLink={articleLink} />
      <p className="text-primary font-semibold pl-4 dark:text-primaryDark">
        {date}
      </p>
    </section>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Articles | RK</title>
        <meta name="description" content="articles page of RK portfolio" />
      </Head>
      <article className="text-dark w-full mt-12">
        <Layout className="flex flex-col items-center justify-between w-full h-full inline-block z-0 gap-16">
          <AnimatedText
            text="Words can change the world"
            className="text-6xl"
          />
          <section className="grid gap-8 grid-flow-col">
            <Project
              className="grid-flow-row"
              imgLink={projectImage}
              title="GPT-3 Landing Page"
              desc="A modern fully responsive landing page explaining about GPT-3 features made using ReactJS"
              githubLink="https://github.com/sridhram/gpt-3-landing-page"
              showVisitButton={false}
            />
            <Project
              className="grid-flow-row"
              imgLink={projectImage}
              title="GPT-3 Landing Page"
              desc="A modern fully responsive landing page explaining about GPT-3 features made using ReactJS"
              githubLink="https://github.com/sridhram/gpt-3-landing-page"
              vercelLink="https://gpt-3-landing-page-ip5hfrdbh-sridhram.vercel.app/"
              showVisitButton={false}
            />
          </section>
          <motion.section
            class="w-full mb-20"
            initial={{ y: 200 }}
            whileInView={{
              y: 0,
              transition: { duration: 0.5, ease: 'easeInOut' },
            }}
            viewPort={{ once: 'true' }}
          >
            <h3 className="font-bold text-5xl text-dark capitalize text-center my-12 dark:text-light">
              all articles
            </h3>
            <div className="flex flex-col gap-8">
              <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="January 27, 2023"
                articleLink="https://css-tricks.com/preventing-a-grid-blowout/"
              />
              <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="January 27, 2023"
                articleLink="https://css-tricks.com/preventing-a-grid-blowout/"
              />
              <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="January 27, 2023"
                articleLink="https://css-tricks.com/preventing-a-grid-blowout/"
              />
              <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="January 27, 2023"
                articleLink="https://css-tricks.com/preventing-a-grid-blowout/"
              />
              <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="January 27, 2023"
                articleLink="https://css-tricks.com/preventing-a-grid-blowout/"
              />
            </div>
          </motion.section>
        </Layout>
      </article>
    </>
  );
};
export default articles;

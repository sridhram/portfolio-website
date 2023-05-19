import AnimatedText from '@/components/AnimatedText';
import Head from 'next/head';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import Layout from './Layout';
import profilePic from '../../public/images/profile/developer-pic-2.jpg';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

const AnimatedNumbers = ({ text, className }) => {
  const spanRef = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(spanRef, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(text);
    }
  }, [isInView, text, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (spanRef.current && latest.toFixed(0) <= text) {
        spanRef.current.textContent = latest.toFixed(0) + '+';
      }
    });
  }, [springValue, text]);

  return (
    <span className={`${className}`} ref={spanRef}>
      {text}
    </span>
  );
};
const About = () => {
  return (
    <>
      <Head>
        <title>About | RK</title>
        <meta name="description" content="about page of RK portfolio" />
      </Head>
      <article className="flex items-center text-dark w-full grow mt-12 flex-col gap-24">
        <Layout className="flex flex-col items-center justify-between w-full h-full inline-block z-0 gap-16">
          <AnimatedText text="passion fuels purpose" className="text-6xl" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 place-self-center">
              <h2 className="uppercase text-dark/75 font-bold text-lg mb-4 dark:text-light/75">
                biography
              </h2>
              <p className="font-medium dark:text-light">
                Hi, I'm CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className="font-medium my-4 dark:text-light">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium dark:text-light">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <figure className="col-span-3 h-fit p-6 bg-light rounded-2xl border border-dark border-solid shadow-[9px_12px] place-self-center dark:bg-dark dark:border-light dark:shadow-light">
              <Image
                priority
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
                src={profilePic}
              />
            </figure>
            <div className="col-span-2 flex flex-col text-end items-end justify-around">
              <div>
                <AnimatedNumbers
                  text="40+"
                  className="text-dark font-bold text-6xl dark:text-light"
                />
                <p className="text-xl capitalize font-medium dark:text-light">
                  satisfied client
                </p>
              </div>
              <div>
                <AnimatedNumbers
                  text="50+"
                  className="text-dark font-bold text-6xl dark:text-light"
                />
                <p className="text-xl capitalize font-medium dark:text-light">
                  projects completed
                </p>
              </div>
              <div>
                <AnimatedNumbers
                  text="4+"
                  className="text-dark font-bold text-6xl dark:text-light"
                />
                <p className="text-xl capitalize font-medium dark:text-light">
                  years of experience
                </p>
              </div>
            </div>
          </div>
        </Layout>
        <Skills />
        <Experience />
        <Education />
      </article>
    </>
  );
};

export default About;

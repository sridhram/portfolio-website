import AnimatedText from '@/components/AnimatedText';
import Head from 'next/head';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import Layout from './Layout';
import profilePic from '../../public/images/profile/developer-pic-2.JPG';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import PageTransition from '@/components/PageTransition';

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
      <article className="flex items-center text-dark w-full grow pt-12 flex-col gap-24 mx-auto px-28 pt-2 pb-4 dark:bg-dark md:px-16 sm:px-8">
        <PageTransition />
        <Layout className="flex flex-col items-center justify-between w-full h-full inline-block z-0 gap-16">
          <AnimatedText
            text="passion fuels purpose"
            className="text-6xl md:text-5xl sm:text-3xl text-center"
          />
          <div className="grid w-full grid-cols-8 gap-16 lg:grid-cols-6 md:flex md:flex-col ">
            <div className="col-span-3 place-self-center">
              <h2 className="uppercase text-dark/75 font-bold text-lg mb-4 dark:text-light/75">
                biography
              </h2>
              <p className="font-medium dark:text-light">
                Hi, I'm Ramkumar, a web developer from India with over 4 years
                of experience. I have primarily worked on creating clean and
                efficient client side of the web and the occasional backend too.
                Currently I am focussed on learning and creating highly
                responsive, pixel perfect and accessible websites. Checkout some
                of my personal work in Projects section
              </p>
              <p className="font-medium dark:text-light mt-4">
                What excites me most about working in software development is
                being able to design and create things that have purpose and
                solve real problems. Leaning into customer research and insight,
                finding the right problems to solve, delivering that value as
                quickly as possible, learning from it and then iterating and
                improving that value over time is the key to great design.
              </p>
            </div>
            <figure className="col-span-3 h-fit p-6 bg-light rounded-2xl border border-dark border-solid shadow-[9px_12px] place-self-center dark:bg-dark dark:border-light dark:shadow-light align-self-center md:order-first">
              <Image
                priority
                src={profilePic}
                className="min-h-[450px] sm:min-h-[auto]"
              />
            </figure>
            <div className="col-span-2 flex flex-col text-end items-end justify-around lg:flex-row lg:col-span-6 gap-4 md:text-center md:items-start">
              <div>
                <AnimatedNumbers
                  text="40+"
                  className="text-dark font-bold text-6xl dark:text-light md:text-5xl sm:text-4xl"
                />
                <p className="text-xl capitalize font-medium dark:text-light md:text-lg sm:text-base">
                  satisfied client
                </p>
              </div>
              <div>
                <AnimatedNumbers
                  text="20+"
                  className="text-dark font-bold text-6xl dark:text-light md:text-5xl sm:text-4xl"
                />
                <p className="text-xl capitalize font-medium dark:text-light md:text-lg sm:text-base">
                  projects completed
                </p>
              </div>
              <div>
                <AnimatedNumbers
                  text="4+"
                  className="text-dark font-bold text-6xl dark:text-light md:text-5xl sm:text-4xl"
                />
                <p className="text-xl capitalize font-medium dark:text-light md:text-lg sm:text-base">
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

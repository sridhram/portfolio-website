import { motion, useScroll } from 'framer-motion';
import React, { useRef } from 'react';
import { IndividualExperience } from './Experience';

const Education = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'center center'],
  });

  return (
    <section className="place-self-center w-4/5 mb-16">
      <h2 className="font-bold text-7xl mb-12 md:text-5xl sm:text-4xl dark:text-light">
        Education
      </h2>
      <ul className="relative" ref={scrollRef}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute -left-12 top-0 h-full w-[4px] bg-dark origin-top dark:bg-primaryDark sm:-left-[2.2rem]"
        />

        <IndividualExperience
          years="2015 - 2019"
          univ="Anna University"
          desc="Majored in Electrical and Electronics Engineering. Coursework projects included Reclaimer derailment prevention, Voice Controlled Home Automation, Congestion Control in Networks using Fuzzy logic"
          role="Bachelor of Engineering"
        />
        <IndividualExperience
          years="2013 - 2015"
          univ="Prince Matriculation Hr Sec School"
          desc="Majored in Computer Science and Maths"
          role="Higher Secondary Education"
        />
      </ul>
    </section>
  );
};

export default Education;

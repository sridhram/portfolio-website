import { motion } from 'framer-motion';
import React from 'react';

const IndividualSkill = ({ name, x, y, className = '' }) => {
  return (
    <motion.div
      className={`absolute bg-dark text-light shadow-dark cursor-pointer rounded-full font-semibold py-3 px-6 dark:text-dark dark:shadow-dark dark:bg-light md:py-2 md:px-3 md:text-sm asm:text-xs sm:py-1 sm:px-1 ${className}`}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, x: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="w-full">
      <h2 className="font-bold text-7xl text-dark text-center dark:text-light mb-8 sm:text-5xl">
        Skills
      </h2>
      <div className="relative aspect-square mx-auto h-screen rounded-full bg-circularLight flex items-center justify-center dark:bg-circularDark lg:aspect-auto md:bg-circularLightMd dark:md:bg-circularDarkMd asm:bg-circularLightSm dark:asm:bg-circularDarkSm md:h-[75vh] asm:h-[50vh] asm:ml-[-1rem] sm:ml-[0rem]">
        <IndividualSkill name="Web" x="0" y="0" />
        <IndividualSkill name="HTML" x="0" y="200%" />
        <IndividualSkill name="CSS" x="0" y="-200%" />
        <IndividualSkill
          name="ReactJS"
          x="240%"
          y="300%"
          className="sm:ml-[-4rem] asm:ml-[-3rem]"
        />
        <IndividualSkill name="Webpack" x="0" y="400%" />
        <IndividualSkill name="JavaScript" x="-150%" y="0" />
        <IndividualSkill name="Java" x="240%" y="0" />
        <IndividualSkill
          name="NextJS"
          x="-245%"
          y="300%"
          className="sm:ml-[5rem] asm:ml-[3rem]"
        />
        <IndividualSkill name="Node.JS" x="0" y="-400%" />
        <IndividualSkill
          name="Tailwind CSS"
          x="-170%"
          y="-300%"
          className="sm:ml-[5rem] asm:ml-[3rem]"
        />
        <IndividualSkill
          name="Sass"
          x="310%"
          y="-300%"
          className="sm:ml-[-4rem] asm:ml-[-3rem]"
        />
      </div>
    </section>
  );
};

export default Skills;

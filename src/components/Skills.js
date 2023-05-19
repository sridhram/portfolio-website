import { motion } from 'framer-motion';
import React from 'react';

const IndividualSkill = ({ name, x, y }) => {
  return (
    <motion.div
      className="absolute bg-dark text-light shadow-dark cursor-pointer rounded-full font-semibold py-3 px-6 dark:text-dark dark:shadow-dark dark:bg-light"
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
      <h2 className="font-bold text-7xl text-dark text-center dark:text-light mb-8">
        Skills
      </h2>
      <div className="relative aspect-square mx-auto h-screen rounded-full bg-circularLight flex items-center justify-center dark:bg-circularDark">
        <IndividualSkill name="Web" x="0" y="0" />
        <IndividualSkill name="HTML" x="0" y="200%" />
        <IndividualSkill name="CSS" x="0" y="-200%" />
        <IndividualSkill name="ReactJS" x="240%" y="300%" />
        <IndividualSkill name="Webpack" x="0" y="400%" />
        <IndividualSkill name="JavaScript" x="-150%" y="0" />
        <IndividualSkill name="Java" x="240%" y="0" />
        <IndividualSkill name="NextJS" x="-245%" y="300%" />
        <IndividualSkill name="Node.JS" x="0" y="-400%" />
        <IndividualSkill name="Tailwind CSS" x="-170%" y="-300%" />
        <IndividualSkill name="Sass" x="310%" y="-300%" />
      </div>
    </section>
  );
};

export default Skills;

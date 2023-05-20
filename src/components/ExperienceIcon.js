import { motion, useScroll } from 'framer-motion';
import React from 'react';
const ExperienceIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
  });
  return (
    <figure className="absolute -top-1 -left-[6.4rem] sm:-left-[4.4rem]">
      <svg width="75" height="75" viewBox="0 0 100 100" className="sm:w-[50px] sm:h-[50px]">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none dark:stroke-primaryDark"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light stroke-dark dark:stroke-light dark:fill-dark"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
};

export default ExperienceIcon;

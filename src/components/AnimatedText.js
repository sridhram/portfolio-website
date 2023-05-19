import { motion } from 'framer-motion';
import React from 'react';
const AnimatedText = ({ text, className = '' }) => {
  const quote = {
    initial: { opacity: 1 },
    animate: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.08 } },
  };
  const singleWord = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div>
      <motion.h1
        className={`text-dark font-bold capitalize ${className} dark:text-light`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(' ').map((word, index) => {
          return (
            <motion.span
              className="inline-block"
              key={word + '_' + index}
              variants={singleWord}
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;

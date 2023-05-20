const { default: Link } = require('next/link');
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <section className="flex items-center justify-center">
      <MotionLink
        href="/"
        className="w-16 h-16 rounded-full font-bold text-2xl bg-dark flex items-center justify-center text-light border border-solid border-transparent dark:border-white sm:w-12 sm:h-12 sm:text-base"
        whileHover={{
          backgroundColor: [
            '#121212',
            'rgba(131,58,180,1)',
            'rgba(253,29,29,1)',
            'rgba(252,176,69,1)',
            'rgba(131,58,180,1)',
            '#121212',
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        RK
      </MotionLink>
    </section>
  );
};
export default Logo;

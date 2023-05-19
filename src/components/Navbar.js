import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import {
  LinkedinIcon,
  GithubIcon,
  FrontendMentorIcon,
  SunIcon,
  MoonIcon,
} from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';

const CustomLink = ({ href, className, linkTxt }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group dark:text-light`}>
      {linkTxt}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      ></span>
    </Link>
  );
};

const Navbar = () => {
  const [theme, switchTheme] = useThemeSwitcher();

  return (
    <header className="w-full font-medium grid grid-flow-col auto-cols-[calc(100%/3)] place-items-center">
      <nav className="ms-0 me-auto">
        <CustomLink href="/" linkTxt="Home" className="mr-2" />
        <CustomLink href="/about" linkTxt="About" className="mx-2" />
        <CustomLink href="/projects" linkTxt="Projects" className="mx-2" />
        <CustomLink href="/articles" linkTxt="Articles" className="mx-2" />
      </nav>
      <Logo />
      <nav className="flex items-center justify-center flex-wrap ms-auto">
        <motion.a
          href="https://www.linkedin.com/in/ramkumar-s-bb3455171/"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedinIcon />
        </motion.a>
        <motion.a
          href="https://github.com/sridhram/"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.frontendmentor.io/profile/sridhram"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <FrontendMentorIcon />
        </motion.a>
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className={`w-6 ml-3 rounded-full p-1 ${
            theme === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
          }`}
          onClick={() => {
            switchTheme(theme === 'light' ? 'dark' : 'light');
          }}
        >
          {theme === 'light' ? (
            <SunIcon className={'fill-dark'} />
          ) : (
            <MoonIcon className={'fill-dark'} />
          )}
        </motion.button>
      </nav>
    </header>
  );
};

export default Navbar;

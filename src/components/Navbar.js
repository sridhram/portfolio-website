import React, { useState, useEffect } from 'react';
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

const CustomLink = ({ href, className, linkTxt, closeMenu }) => {
  const router = useRouter();
  if (closeMenu) {
    useEffect(() => {
      router.events.on('routeChangeStart', closeMenu);
      return () => router.events.off('routeChangeStart', closeMenu);
    }, [router.events]);
  }
  return (
    <Link
      href={href}
      className={`${className} relative group dark:text-light md:dark:text-dark md:text-light`}
    >
      {linkTxt}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light md:dark:bg-dark md:bg-light ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      ></span>
    </Link>
  );
};

const Navbar = () => {
  const [theme, switchTheme] = useThemeSwitcher();
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full font-medium grid grid-flow-col auto-cols-[calc(100%/3)] place-items-center mx-auto px-28 pt-2 pb-4 dark:bg-dark md:px-16 sm:px-8">
      <button
        className="hidden md:block justify-self-start"
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        <span
          className={`bg-dark dark:bg-light transition-rotate duration-300 ease-out h-0.5 w-6 rounded-sm block ${
            isMenuOpen ? 'rotate-45 translate-y-[.2rem]' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-rotate duration-300 ease-out h-0.5 w-6 my-[.1rem] rounded-sm block ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-rotate duration-300 ease-out h-0.5 w-6 rounded-sm block ${
            isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>
      <nav className="ms-0 me-auto md:hidden">
        <CustomLink href="/" linkTxt="Home" className="mr-2" />
        <CustomLink href="/about" linkTxt="About" className="mx-2" />
        <CustomLink href="/projects" linkTxt="Projects" className="mx-2" />
        {/* <CustomLink href="/articles" linkTxt="Articles" className="mx-2" /> */}
      </nav>
      <Logo />
      <nav className="flex items-center justify-center flex-wrap ms-auto md:hidden">
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

      <section
        className={`${
          isMenuOpen ? 'fixed' : 'hidden'
        } min-w-[50vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 sm:min-w-[70vw]`}
      >
        <nav className="flex flex-col gap-4 items-center mb-8">
          <CustomLink
            href="/"
            linkTxt="Home"
            className="w-fit"
            closeMenu={() => {
              setMenuOpen(false);
            }}
          />
          <CustomLink
            href="/about"
            linkTxt="About"
            className="w-fit"
            closeMenu={() => {
              setMenuOpen(false);
            }}
          />
          <CustomLink
            href="/projects"
            linkTxt="Projects"
            className="w-fit"
            closeMenu={() => {
              setMenuOpen(false);
            }}
          />
          {/* <CustomLink href="/articles" linkTxt="Articles" className="mx-2" /> */}
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
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
      </section>
    </header>
  );
};

export default Navbar;

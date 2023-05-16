import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { LinkedinIcon, GithubIcon } from './Icons';
import { motion } from 'framer-motion';

const CustomLink = ({ href, className, linkTxt }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {linkTxt}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      ></span>
    </Link>
  );
};

const Navbar = () => {
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
          className="w-6 mr-3"
        >
          <LinkedinIcon />
        </motion.a>
        <motion.a
          href="https://github.com/sridhram/"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3"
        >
          <GithubIcon />
        </motion.a>
      </nav>
    </header>
  );
};

export default Navbar;

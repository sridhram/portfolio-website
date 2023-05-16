import Link from 'next/link';
import React from 'react';
import { HireMeIcon } from './Icons';

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <HireMeIcon className="fill-dark w-48 animate-spin-slow" />
      <div className="flex items-center justify-center bg-dark text-light rounded-full absolute w-20 h-20 border border-solid border-transparent hover:bg-light hover:text-dark hover:border-dark">
        <Link href="mailto:srdhrramkumar@gmail.com">Hire Me</Link>
      </div>
    </div>
  );
};

export default HireMe;

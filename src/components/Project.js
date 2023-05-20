import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Project = ({
  imgLink,
  title,
  desc,
  githubLink,
  vercelLink = '',
  className = '',
  showVisitButton = true,
}) => {
  return (
    <article
      className={` grid place-items-center place-content-center gap-8 shadow-[9px_12px] border border-solid border-dark rounded-2xl p-8 dark:border-light dark:shadow-light ${className}`}
    >
      <figure className="rounded-xl overflow-hidden">
        <Image
          priority
          src={imgLink}
          alt="project image"
          className="min-h-[200px] md:min-h-[auto]"
        />
      </figure>
      <section className="flex flex-col gap-4 items-start">
        <Link
          target={'_blank'}
          href={githubLink}
          className="hover:underline dark:text-light"
        >
          <h3 className="text-dark font-bold text-4xl mb-4 dark:text-light md:text-3xl asm:text-2xl sm:text-lg">
            {title}
          </h3>
        </Link>
        <p className="font-semibold mb-4 dark:text-light md:text-sm">{desc}</p>
        {showVisitButton && (
          <Link
            className="bg-dark text-light font-bold text-xl p-4 rounded-lg border border-transparent hover:text-dark hover:bg-light hover:border-dark dark:text-dark dark:bg-light dark:hover:text-light dark:hover:bg-dark dark:hover:border-light md:text-lg sm:text-base"
            target={'_blank'}
            href={vercelLink}
          >
            <button>Visit Project</button>
          </Link>
        )}
      </section>
    </article>
  );
};

export default Project;

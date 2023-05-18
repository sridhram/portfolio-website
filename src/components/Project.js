import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Project = ({
  imgLink,
  title,
  desc,
  githubLink,
  vercelLink,
  className = '',
}) => {
  return (
    <article className={`${className}`}>
      <Image src={imgLink} alt="project image" />
      <section>
        <Link href={githubLink}>
          <h3>{title}</h3>
        </Link>
        <p>{desc}</p>
        <Link href={vercelLink}>
          <button>Visit Project</button>
        </Link>
      </section>
    </article>
  );
};

export default Project;

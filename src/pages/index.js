import Image from 'next/image';
import Layout from './Layout';
import profilepic from '../../public/images/profile/developer-pic-1.png';
import Link from 'next/link';
import { BulbIcon, ExternalLinkIcon } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import AnimatedText from '@/components/AnimatedText';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  return (
    <>
      <article className="flex items-center text-dark w-full grow mx-auto px-28 pt-2 pb-4 dark:bg-dark md:px-16 sm:px-8 lg:px-4">
        <PageTransition />
        <Layout className="flex items-center justify-between w-full h-full inline-block z-0 md:flex-col">
          <figure className="w-1/2 md:w-full">
            <Image
              priority
              src={profilepic}
              className="w-full h-auto min-h-[600px] md:min-h-[auto]"
            />
          </figure>
          <div className="w-1/2 md:w-auto">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="text-6xl md:text-4xl sm:text-3xl"
            />
            <p className="mt-4 font-medium text-base dark:text-light">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications.Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex mt-4 items-center gap-8 sm:gap-4">
              <Link
                className="bg-dark text-light py-2.5 px-6 rounded-lg text-lg font-semibold border border-solid border-transparent hover:bg-light hover:text-dark hover:border-dark flex items-center gap-1 dark:text-dark dark:bg-light dark:hover:border-light dark:hover:text-light dark:hover:bg-dark"
                href="/resume.pdf"
                target={'_blank'}
              >
                Resume
                <ExternalLinkIcon className="w-6" />
              </Link>
              <Link
                className="text-lg font-medium capitalize text-dark underline dark:text-light"
                href="mailto:srdhrramkumar@gmail.com"
                target={'_blank'}
              >
                Contact
              </Link>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute bottom-8 right-8 w-24 inline-block md:hidden">
          <BulbIcon />
        </div>
      </article>
    </>
  );
}

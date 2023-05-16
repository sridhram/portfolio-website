import Image from 'next/image';
import Layout from './Layout';
import profilepic from '../../public/images/profile/developer-pic-1.png';
import Link from 'next/link';
import { BulbIcon, ExternalLinkIcon } from '@/components/Icons';
import HireMe from '@/components/HireMe';

export default function Home() {
  return (
    <>
      <article className="flex items-center text-dark w-full grow">
        <Layout className="flex items-center justify-between w-full h-full inline-block z-0 bg-light">
          <figure className="w-1/2">
            <Image src={profilepic} className="w-full h-auto min-h-[550px]" />
          </figure>
          <div className="w-1/2">
            <h1 className="font-bold text-6xl">
              Turning Vision Into Reality With Code And Design.
            </h1>
            <p className="mt-4 font-medium text-base">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications.Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex mt-4 items-center gap-4">
              <Link
                className="bg-dark text-light py-2.5 px-6 rounded-lg text-lg font-semibold border border-solid border-transparent hover:bg-light hover:text-dark hover:border-dark flex items-center gap-1"
                href="/dummy.pdf"
                target={'_blank'}
              >
                Resume
                <ExternalLinkIcon className="w-6" />
              </Link>
              <Link
                className="text-lg font-medium capitalize text-dark underline"
                href="mailto:srdhrramkumar@gmail.com"
                target={'_blank'}
              >
                Contact
              </Link>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute bottom-8 right-8 w-24 inline-block">
          <BulbIcon />
        </div>
      </article>
    </>
  );
}

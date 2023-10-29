import Head from "next/head";
import React from "react";
import { Layout } from "../components/Layout";
import { AnimatedText } from "../components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import resumePhoto from "../public/images/resumePhoto.jpeg";
import { motion } from "framer-motion";
import { TransitionEffect } from "../components/TransitionEffect";

interface ProjectProps {
  type: string;
  title: string;
  summary: string;
  img: string;
  link: string;
}

const FramerImage = motion(Image);

const FeaturedProject: React.FC<ProjectProps> = ({
  type,
  title,
  summary,
  img,
  link,
}) => {
  return (
    <article
      className="w-full flex items-center justify-between relative 
    rounded-3xl border border-solid border-dark dark:border-light bg-light shadow-2xl p-12 dark:bg-dark 
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light 
      rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={resumePhoto}
          alt={title}
          className="w-full h-auto opacity-50"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link href={link} className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Stephen Ricketts | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            text="Imagination Trumps Knowledge"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="holder"
                title="holder"
                summary={" holder holder holder holder"}
                link="holder"
                img="holder"
              />
            </div>
            <div className="col-span-12 gap-y-12">
              <FeaturedProject
                type="holder"
                title="holder"
                summary={" holder holder holder holder"}
                link="holder"
                img="holder"
              />
            </div>
            <div className="col-span-6">Project-1</div>
            <div className="col-span-6">Project-2</div>
            <div className="col-span-12">Featured Project</div>
            <div className="col-span-6">Project-1</div>
            <div className="col-span-6">Project-2</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;

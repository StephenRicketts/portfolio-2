import Head from "next/head";
import React from "react";
import { Layout } from "../components/Layout";
import { AnimatedText } from "../components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import resumePhoto from "../public/images/resumePhoto.jpeg";
import { motion } from "framer-motion";

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
    <article className="w-full flex items-center justify-between relative rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 ">
      <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={resumePhoto}
          alt={title}
          className="w-full h-auto opacity-50"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
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
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText className="mb-16" text="Imagination Trumps Knowledge" />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
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

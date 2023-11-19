import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { AnimatedText } from "../components/AnimatedText";
import { Layout } from "../components/Layout";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import resumeJpeg from "../public/images/resumePhoto.jpeg";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { TransitionEffect } from "../components/TransitionEffect";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const about = (props: Props) => {
  return (
    <>
      <Head>
        <title>Stephen Ricketts | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="p-16">
          <div className="text-xl sm:text-base flex">
            <p className="w-1/3">
              Hello! I am dedicated full-stack developer, with a proven track
              record of producing performant and industry-verified web and
              mobile applications. I have been writing TypeScript code nearly
              every day for the past 3 years. Grinding and grinding, and
              producing user-pleasing code that does that it is supposed to do.
            </p>
            <div className="w-1/3 rounded-lg overflow-hidden shadow-xl">
              <Image src={resumeJpeg} alt="Stephen's Image" />
            </div>
            <div>
              <h1 className="text-primary dark:text-primaryDark sm:text-base lg:text-lg text-xl font-bold">
                Published Apps
              </h1>
              <ul>
                <li>
                  <Link href={"https://liifer.com/home"}>Liifer Web App</Link>
                </li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;

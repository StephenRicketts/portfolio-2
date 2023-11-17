import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { AnimatedText } from "../components/AnimatedText";
import { Layout } from "../components/Layout";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { TransitionEffect } from "../components/TransitionEffect";

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
          <AnimatedText
            text="Passion Fuels Purpose"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flx-col items-start justify-start xl:col-span-4"></div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light dark:border-light">
                <div className="w-full h-96 rounded-2xl ">placeholder</div>
              </div>
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

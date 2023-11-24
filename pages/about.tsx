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
import { CustomLink } from "../components/CustomLink";
import { TextLink } from "../components/TextLink";
import { Footer } from "../components/Footer";

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
          <div className="w-full text-base lg:text-xl flex flex-col lg:flex-row  items-center justify-center space-x-2">
            <div className="pb-2 w-10/12 md:w-1/2 lg:hidden rounded-md overflow-hidden">
              <Image
                priority
                className="overflow-hidden rounded-md shadow-lg"
                src={resumeJpeg}
                alt="Dev's Image"
              />
            </div>
            <div className="w-full lg:w-1/3">
              <h1 className="text-3xl text-center font-bold pt-2 lg:pt-0 text-dark dark:text-light pb-6">
                Bio
              </h1>
              <p className="w-full lg:w-11/12 text-sm xl:text-base pb-2">
                Hello! My name is Stephen Ricketts. I am dedicated full-stack
                developer (recently working mostly in the front-end), with
                proven experience in producing performant and industry-verified
                web and mobile applications. I have been writing TypeScript code
                nearly every day for the past 3 years. In that time, I have
                implemented many features, integrating many APIs, and done all
                the things you would expect from a lead front-end developer.
              </p>
              <p className="w-full lg:w-11/12 text-sm xl:text-base pb-2">
                I am dedicated to learning new skills and keeping up with the
                latest tech. I am flexible and willing to learn basically
                anything I need to, including new languages and frameworks.
              </p>
              <p className="w-full lg:w-11/12 text-sm xl:text-base">
                I am looking to expand upon my list of production apps so if you
                have something you would like to build, please do not hesitate
                to
                <TextLink
                  padding={"pl-1"}
                  href="mailto:stephen.ricketts.dev@gmail.com"
                >
                  {"contact me"}
                </TextLink>
                .
              </p>
            </div>
            <div className="w-1/3 hidden lg:block rounded-lg overflow-hidden shadow-xl ] border-dark dark:border-light">
              <Image
                priority
                className="overflow-hidden"
                src={resumeJpeg}
                alt="Dev's Image"
              />
            </div>
            <div className="text-center w-full pt-12 lg:pt-0 lg:w-1/3">
              <h1 className="text-dark dark:text-light text-3xl font-bold pb-6">
                Production Apps
              </h1>
              <ul className="space-y-4">
                <li>
                  <CustomLink
                    primaryColorUnderline
                    target={"_blank"}
                    title="Liifer Web App"
                    className="text-primary dark:text-primaryDark text-lg font-semibold underline lg:no-underline"
                    href={"https://liifer.com/home"}
                  />
                </li>
                <li>
                  <CustomLink
                    primaryColorUnderline
                    target={"_blank"}
                    title="Liifer Desktop/In-Game App"
                    className="text-primary dark:text-primaryDark text-lg font-semibold underline lg:no-underline"
                    href={
                      "https://www.overwolf.com/app/Liifer_Technologies_Inc-Liifer_Application"
                    }
                  />
                </li>
                <li>
                  <CustomLink
                    primaryColorUnderline
                    target={"_blank"}
                    title=" Liifer Android App"
                    className="text-primary dark:text-primaryDark text-lg font-semibold underline lg:no-underline"
                    href={
                      "https://play.google.com/store/search?q=Liifer&c=apps&hl=en&gl=US"
                    }
                  />
                </li>
                <li>
                  <CustomLink
                    primaryColorUnderline
                    target={"_blank"}
                    title="Liifer iOS App"
                    className="text-primary dark:text-primaryDark text-lg font-semibold underline lg:no-underline"
                    href={"https://apps.apple.com/app/liifer/id6468917016"}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Skills />
          </div>
          <Experience />
          <Education />
        </Layout>
      </main>
      <Footer />
    </>
  );
};

export default about;

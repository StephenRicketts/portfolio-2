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
          <div className="text-xl sm:text-base sm:flex-col md:flex-col lg:flex-col flex items-center justify-center space-x-2 ">
            <div className="pb-2 sm:block md:block lg:block sm:w-4/5 md:w-3/5 lg:w-3/5 hidden rounded-md overflow-hidden">
              <Image
                className="rounded-md shadow-lg"
                src={resumeJpeg}
                alt="Dev's Image"
              />
            </div>
            <div className="sm:w-full md:w-full lg:w-full w-1/3 md:pt-4 lg:pt-6">
              <h1 className="text-3xl text-center font-bold text-dark dark:text-light pb-6">
                Bio
              </h1>
              <p className="w-11/12 mx-auto text-base pb-2">
                I am dedicated full-stack developer (recently working mostly in
                the front-end), with a proven experience in producing performant
                and industry-verified web and mobile applications. I have been
                writing TypeScript code nearly every day for the past 3 years.
                In that time, I have implemented many features, integrating many
                APIs, and done all the things you would expect from a lead
                front-end developer.
              </p>
              <p className="w-11/12 mx-auto text-base pb-2">
                I am dedicated to learning new skills and keeping up with the
                latest tech. I am a bootcamp graduate but that is not where my
                learning ended, I have taken many online courses to learn new
                skills and I continue to do so today. I am flexible and willing
                to learn basically anything I need to, including new languages
                and frameworks.
              </p>
              <p className="w-11/12 mx-auto text-base">
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
            <div className="w-1/3 sm:hidden md:hidden lg:hidden rounded-lg overflow-hidden shadow-xl border-[25px] border-dark dark:border-light">
              <Image
                className="overflow-hidden"
                src={resumeJpeg}
                alt="Dev's Image"
              />
            </div>
            <div className="text-center sm:w-full sm:pt-12 md:pt-6 lg:pt-6 md:w-full lg:w-full w-1/3">
              <h1 className="text-dark dark:text-light sm:text-3xl text-3xl font-bold  pb-6">
                Production Apps
              </h1>
              <ul className="space-y-4">
                <li>
                  <CustomLink
                    primaryColorUnderline
                    target={"_blank"}
                    title="Liifer Web App"
                    className="text-primary dark:text-primaryDark sm:font-semibold md:font-semibold sm:underline md:underline"
                    href={"https://liifer.com/home"}
                  />
                </li>
                <li>
                  <CustomLink
                    primaryColorUnderline
                    target={"_blank"}
                    title="Liifer Desktop/In-Game App"
                    className="text-primary dark:text-primaryDark sm:font-semibold md:font-semibold sm:underline md:underline"
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
                    className="text-primary dark:text-primaryDark sm:font-semibold md:font-semibold sm:underline md:underline"
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
                    className="text-primary dark:text-primaryDark sm:font-semibold md:font-semibold sm:underline md:underline"
                    href={"https://apps.apple.com/app/liifer/id6468917016"}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Skills />
          </div>
          <Education />
          <div className="pt-6 pb-[83px]">
            <Experience />
          </div>
        </Layout>
      </main>
      <Footer />
    </>
  );
};

export default about;

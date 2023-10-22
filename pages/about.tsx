import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { AnimatedText } from "../components/AnimatedText";
import { Layout } from "../components/Layout";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";

type Props = {};

const about = (props: Props) => {
  return (
    <>
      <Head>
        <title>Stephen Ricketts | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="p-16">
          <AnimatedText text="Passion Fuels Purpose" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                - Hi, Im CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients visions to life.
              </p>
              <p className="my-4 font-medium">
                - I believe that design is about more than just making things
                look pretty – its about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                - Whether Im working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[103%] h-[103%] rounded-2xl">
                <div className="w-full h-96 rounded-2xl bg-green-500">
                  placeholder
                </div>
              </div>
            </div>
            <div className="col-span-2 bg-yellow-500">:/</div>
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

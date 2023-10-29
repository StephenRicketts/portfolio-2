import type { NextPage } from "next";
import Head from "next/head";
import ThreeScene from "../components/ThreeScene";
import { Layout } from "../components/Layout";
import { AnimatedText } from "../components/AnimatedText";
import Link from "next/link";
import { OutsideLinkIcon } from "../components/Icons";
import { Footer } from "../components/Footer";
import Image from "next/image";
import { TransitionEffect } from "../components/TransitionEffect";

const Home: NextPage = () => {
  return (
    <>
      {/* <ThreeScene /> */}
      <div>
        <Head>
          <title>Create Next App</title>
        </Head>
        <TransitionEffect />
        <main className=" dark:text-light">
          <Layout className="pt-0 md:pt-16 sm:pt-8">
            <div className="flex items-center justify-between w-full lg:flex-col">
              <div className="bg-emerald-500 w-1/2 h-96">
                {/* <Image priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"  /> */}
              </div>
              <div className="w-1/2 flex flex-col itemspcenter self-center lg:w-full lg:text-center">
                <AnimatedText
                  text="Turning Vision Into Reality With Code and Design."
                  className="!text-6xl xl:!text-5xl !text-left lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                />
                <p className="py-4 text-base font-medium md:text-sm sm:text-xs">
                  As a skilled full-stack developer, I am dedicated to turning
                  ideas into innovative web applications and mobile. Explore my
                  latest projects and and download my published apps.
                </p>
                <div className="flex items-center self-start mt-2 lg:self-center">
                  <Link
                    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                    hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark 
                    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:px-4 md:text-base"
                    href="/resume.pdf"
                    target={"_blank"}
                    download={true}
                  >
                    Resume <OutsideLinkIcon className="w-6 ml-1" />
                  </Link>
                  <Link
                    href="mailto:stephen.ricketts.dev@gmail.com"
                    target={"_blank"}
                    className="ml-4 text-lg font-medium capaitalize text-dark underline dark:text-light md:text-base"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Layout>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Home;

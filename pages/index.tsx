import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { AnimatedText } from "../components/AnimatedText";
import Link from "next/link";
import { OutsideLinkIcon } from "../components/Icons";
import { Footer } from "../components/Footer";
import { TransitionEffect } from "../components/TransitionEffect";
import { OrbScene } from "../components/OrbScene";
import ReactCurvedText from "react-curved-text";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>Stephen Ricketts, Full Stack Developer</title>
        </Head>
        <TransitionEffect />
        <main className="dark:text-light pt-6 min-h-screen pb-24 md:pb-0">
          <Layout className="flex flex-col items-center lg:flex-row md:!pt-16">
            <div className="lg:hidden text-center pb-2">
              <AnimatedText
                text="Architect"
                className="!text-primary dark:!text-primaryDark !text-4xl"
              />
              <AnimatedText
                text="of the Internet"
                className="!text-4xl  !text-primary dark:!text-primaryDark"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <OrbScene />
            </div>
            <div className="lg:p-16 w-full lg:w-1/2 text-left">
              <div className="hidden lg:block">
                <AnimatedText
                  text="Architect"
                  className=" !text-left !text-primary dark:!text-primaryDark"
                />
                <AnimatedText
                  text="of the Internet"
                  className="lg:text-4xl !text-left !text-primary dark:!text-primaryDark"
                />
              </div>
              <p className="py-4 font-medium lg:text-2xl text-base ">
                A full-stack developer and start-up vet. Experienced in web and
                mobile development. Putting complicating things together since
                2019.
              </p>
              <div className="flex items-center pt-8">
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
          </Layout>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;

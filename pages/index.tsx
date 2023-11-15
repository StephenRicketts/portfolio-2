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
        <main className=" dark:text-light">
          <Layout className="flex pt-20 md:pt-16 sm:pt-8">
            <div className="w-1/2 ">
              <OrbScene />
            </div>
            <div className="p-16 w-1/2 text-left">
              <AnimatedText
                text="Architect"
                className="!text-6xl xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl !text-left !text-primary"
              />
              <AnimatedText
                text="of the Internet"
                className="!text-5xl xl:!text-4xl lg:!text-5xl md:!text-4xl sm:!text-2xl !text-left !text-primary -mt-2"
              />
              <p className="py-4 font-medium text-2xl md:text-sm sm:text-xs">
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
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Home;

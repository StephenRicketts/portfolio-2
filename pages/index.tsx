import type { NextPage } from "next";
import Head from "next/head";
import ThreeScene from "../components/ThreeScene";
import { Layout } from "../components/Layout";
import { AnimatedText } from "../components/AnimatedText";
import Link from "next/link";
import { OutsideLinkIcon } from "../components/Icons";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      {/* <ThreeScene /> */}
      <div>
        <Head>
          <title>Create Next App</title>
        </Head>

        <main>
          <Layout>
            <div className="flex items-center justify-between w-full">
              <div className="bg-emerald-500 w-1/2 h-96"></div>
              <div className="w-1/2">
                <AnimatedText
                  text="Turning Vision Into Reality With Code and Design."
                  className="!text-left"
                />
                <p className="py-4 text-base font-medium">
                  As a skilled full-stack developer, I am dedicated to turning
                  ideas into innovative web applications and mobile. Explore my
                  latest projects and and download my published apps.
                </p>
                <div className="flex items-center self-start mt-2">
                  <Link
                    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                    hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                    href="/resume.pdf"
                    target={"_blank"}
                    download={true}
                  >
                    Resume <OutsideLinkIcon className="w-6 ml-1" />
                  </Link>
                  <Link
                    href="mailto:stephen.ricketts.dev@gmail.com"
                    target={"_blank"}
                    className="ml-4 text-lg font-medium capaitalize text-dark underline"
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

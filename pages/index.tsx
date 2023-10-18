import type { NextPage } from "next";
import Head from "next/head";
import ThreeScene from "../components/ThreeScene";
import { Layout } from "../components/Layout";
import { AnimatedText } from "../components/AnimatedText";

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
                <p>
                  As a skilled full-stack developer, I am dedicated to turning
                  ideas into innovative web applications and mobile. Explore my
                  latest projects and and download my published apps.
                </p>
              </div>
            </div>
          </Layout>
        </main>
      </div>
    </>
  );
};

export default Home;

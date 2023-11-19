import Head from "next/head";
import React from "react";
import { AnimatedText } from "../components/AnimatedText";
import { Layout } from "../components/Layout";
import { TransitionEffect } from "../components/TransitionEffect";
import { PublishedAppList } from "../components/PublishedAppList";

const publishedApps = () => {
  return (
    <>
      <Head>
        <title>Stephen Ricketts | Apps Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pb-64">
          <PublishedAppList />
        </Layout>
      </main>
    </>
  );
};

export default publishedApps;

import Head from "next/head";
import React, { ReactElement } from "react";
import { Layout } from "../components/Layout";
import { AnimatedText } from "../components/AnimatedText";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { authText, restListText } from "../public/texts/featureText";
import liiferAuthPng from "../public/images/liiferAuth.png";
import liiferRestListPng from "../public/images/liiferRestList.png";
import liiferIosPng from "../public/images/liiferiOS.png";
import liiferAndroidPng from "../public/images/liiferAndroid.png";
import { motion } from "framer-motion";
import { TransitionEffect } from "../components/TransitionEffect";
import { CapacitorText } from "../components/FeatureTexts";
import { Feature } from "../components/Feature";

const FramerImage = motion(Image);

const projects = () => {
  return (
    <>
      <Head>
        <title>Stephen Ricketts | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-20 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          {/* <div className="flex flex-col">
            <div className="w-2/3 mx-auto">
              <AnimatedText
                className="lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                text="I'm a grinder. I grind because I worry."
              />
            </div>
            <div className="flex justify-end items-end w-3/4">
              <AnimatedText
                className="text-xl !text-right"
                text="-Tom Wambsgans (Succession, 2023)"
              />
            </div>
          </div> */}
          {/* <div className="pt-12">
            <p>
              Do not be alarmed, I don&apos;t actually worry THAT much, I just
              like that quote. But I do grind. And this grinding has resulted in
              ALOT of production code.
            </p>
          </div> */}
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <Feature
                title="Authorization"
                summary={authText}
                img={liiferAuthPng}
              />
            </div>
            <div className="col-span-12 gap-y-12">
              <Feature
                title="An extensive back-end"
                summary={restListText}
                img={liiferRestListPng}
                reverseSides
              />
            </div>
            <div className="col-span-12">
              <Feature
                title="iOS and Android"
                summary={restListText}
                img={liiferRestListPng}
                CustomTextBlock={CapacitorText}
                customImageBlock={
                  <div className="flex justify-around h-[400px]">
                    <div>
                      <FramerImage
                        className="w-full h-[400px]  rounded-lg overflow-hidden "
                        src={liiferIosPng}
                        alt="Liifer iOS app"
                      />
                    </div>
                    <div>
                      <FramerImage
                        className="w-full h-[400px] object-fit rounded-lg overflow-hidden"
                        src={liiferAndroidPng}
                        alt="Liifer Android app"
                      />
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;

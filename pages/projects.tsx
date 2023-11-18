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
import liiferMenuPng from "../public/images/liiferMenu.png";
import overwolfPng from "../public/images/overwolf.png";
import { motion } from "framer-motion";
import { TransitionEffect } from "../components/TransitionEffect";
import {
  ApiCommunicationText,
  CapacitorText,
  AuthText,
  OverwolfText,
  BackEndText,
} from "../components/FeatureTexts";
import { Feature } from "../components/Feature";
import { Footer } from "../components/Footer";
import { TextLink } from "../components/TextLink";

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
          <div>
            <p>
              For the last 2.5 years I have been employed full time by
              <TextLink padding="px-1" href={"https://liifer.com/home"}>
                Liifer
              </TextLink>
              to develop and maintain their apps. In that time I have written
              ALOT of production code and implemented many interesting features.
              In this section I briefly discuss some of these features and some
              of the libraries/tech used in development.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <Feature
                title="Performant API Communication"
                summary={"holder"}
                img={liiferMenuPng}
                CustomTextBlock={ApiCommunicationText}
              />
            </div>
            <div className="col-span-12">
              <Feature
                reverseSides
                title="In-Game/Desktop App"
                summary={authText}
                CustomTextBlock={OverwolfText}
                img={overwolfPng}
              />
            </div>
            <div className="col-span-12 gap-y-12">
              <Feature
                title="An Extensive Back-End"
                summary={restListText}
                CustomTextBlock={BackEndText}
                img={liiferRestListPng}
              />
            </div>
            <div className="col-span-12">
              <Feature
                reverseSides
                title="iOS and Android"
                summary={restListText}
                img={liiferRestListPng}
                CustomTextBlock={CapacitorText}
                customImageBlock={
                  <div className="flex justify-around h-[400px]">
                    <div>
                      <FramerImage
                        className="w-full h-[400px]  rounded-lg overflow-hidden shadow-lg"
                        src={liiferIosPng}
                        alt="Liifer iOS app"
                      />
                    </div>
                    <div>
                      <FramerImage
                        className="w-full h-[400px] object-fit rounded-lg overflow-hidden shadow-lg"
                        src={liiferAndroidPng}
                        alt="Liifer Android app"
                      />
                    </div>
                  </div>
                }
              />
            </div>
            <div className="col-span-12">
              <Feature
                title="Authorization"
                summary={authText}
                CustomTextBlock={AuthText}
                img={liiferAuthPng}
              />
            </div>
          </div>
        </Layout>
      </main>
      <Footer />
    </>
  );
};

export default projects;

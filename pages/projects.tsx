import Head from "next/head";
import React from "react";
import { Layout } from "../components/Layout";
import Image from "next/image";
import liiferAuthPng from "../public/images/liiferAuth.png";
import liiferRestListPng from "../public/images/liiferRestList.png";
import liiferIosPng from "../public/images/liiferIOS.png";
import liiferAndroidPng from "../public/images/liiferAndroid.png";
import liiferMenuPng from "../public/images/liiferMenu.png";
import overwolfPng from "../public/images/overwolf.png";
import localizationPng from "../public/images/localization.png";
import { motion } from "framer-motion";
import { TransitionEffect } from "../components/TransitionEffect";
import {
  ApiCommunicationText,
  CapacitorText,
  AuthText,
  OverwolfText,
  BackEndText,
  LocalizationText,
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
          <div className="w-full text-base py-4 md:text-lg mx-auto pb-4">
            <p>
              Aside from this
              <TextLink
                padding="px-1"
                href="https://github.com/StephenRicketts/portfolio-2"
              >
                portfolio website
              </TextLink>
              (built using Next.js, TypeScript, and Tailwind CSS), my recent
              work has all been for
              <TextLink padding="px-1" href={"https://liifer.com/home"}>
                Liifer
              </TextLink>
              technologies to develop and maintain their apps. In this section I
              briefly discuss some of these features and some of the
              libraries/tech used in development. If you have any questions
              about my recent experience please
              <TextLink
                href="mailto:stephen.ricketts.dev@gmail.com"
                padding="pl-1"
                noTarget
              >
                email me
              </TextLink>
              .
            </p>
          </div>
          <div className="grid grid-cols-12 gap-y-8 xl:gap-y-24 xl:gap-x-16  md:gap-y-24 ">
            <div className="col-span-12">
              <Feature
                title="Performant API Communication"
                img={liiferMenuPng}
                CustomTextBlock={ApiCommunicationText}
              />
            </div>
            <div className="col-span-12">
              <Feature
                reverseSides
                title="In-Game/Desktop App"
                CustomTextBlock={OverwolfText}
                img={overwolfPng}
              />
            </div>
            <div className="col-span-12 gap-y-12">
              <Feature
                title="Localization"
                CustomTextBlock={LocalizationText}
                img={localizationPng}
              />
            </div>
            <div className="col-span-12 gap-y-12">
              <Feature
                title="An Extensive Back-End"
                CustomTextBlock={BackEndText}
                img={liiferRestListPng}
              />
            </div>
            <div className="col-span-12">
              <Feature
                reverseSides
                title="iOS and Android"
                img={liiferRestListPng}
                CustomTextBlock={CapacitorText}
                customImageBlock={
                  <div className="flex justify-around h-[250px] lg:h-[400px]">
                    <div>
                      <FramerImage
                        className="w-full h-[250px] lg:h-[400px]  rounded-lg overflow-hidden shadow-lg"
                        src={liiferIosPng}
                        alt="Liifer iOS app"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                    <div>
                      <FramerImage
                        className="w-full h-[250px] lg:h-[400px] object-fit rounded-lg overflow-hidden shadow-lg"
                        src={liiferAndroidPng}
                        alt="Liifer Android app"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  </div>
                }
              />
            </div>
            <div className="col-span-12">
              <Feature
                title="Authorization"
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

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
} from "../components/FeatureTexts";
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
            <div className="col-span-12">
              <Feature
                reverseSides
                title="Authorization"
                summary={authText}
                CustomTextBlock={AuthText}
                img={liiferAuthPng}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;

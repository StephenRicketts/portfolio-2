import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ReactElement } from "react";

interface FeatureProps {
  title: string;
  summary?: string;
  img?: StaticImageData;
  reverseSides?: boolean;
  customImageBlock?: ReactElement<any, any>;
  CustomTextBlock?: React.FC;
}

const FramerImage = motion(Image);

export const Feature: React.FC<FeatureProps> = ({
  title,
  summary,
  img,
  reverseSides,
  customImageBlock,
  CustomTextBlock,
}) => {
  return (
    <article
      className={`w-full flex ${
        reverseSides ? "flex-row-reverse" : ""
      } items-center justify-between relative 
    rounded-3xl border border-solid border-dark dark:border-light bg-light shadow-2xl p-12 dark:bg-dark 
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4`}
    >
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <h2 className="my-2 w-5/6 text-left text-4xl font-bold text-primary dark:text-primaryDark sm:text-sm">
          {title}
        </h2>
        <div>
          {!CustomTextBlock && (
            <p className="m- pr-10 font-medium text-dark dark:text-light sm:text-sm">
              {summary}
            </p>
          )}
        </div>
        {!!CustomTextBlock && <CustomTextBlock />}
      </div>
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light 
      rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <div className="w-1/2 cursor-pointer max-h-[475px] overflow-hidden rounded-lg lg:w-full">
        {!customImageBlock && !!img && (
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        )}
        {!!customImageBlock && customImageBlock}
      </div>
    </article>
  );
};

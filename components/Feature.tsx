import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ReactElement } from "react";

interface FeatureProps {
  title: string;
  img?: StaticImageData;
  reverseSides?: boolean;
  customImageBlock?: ReactElement<any, any>;
  CustomTextBlock?: React.FC;
}

const FramerImage = motion(Image);

export const Feature: React.FC<FeatureProps> = ({
  title,
  img,
  customImageBlock,
  CustomTextBlock,
}) => {
  return (
    <article
      className={`w-full flex flex-col lg:flex-row items-center justify-between relative 
    lg:rounded-3xl xl:p-8 p-3 lg:p-8 rounded-2xl rounded-br-3xl border-indigo-700 bg-indigo-200 dark:bg-indigo-900`}
    >
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between lg:pr-6 ">
        <h2 className="my-2 xl:w-5/6 text-left text-2xl lg:text-4xl font-bold text-primary dark:text-primaryDark ">
          {title}
        </h2>

        {!!CustomTextBlock && <CustomTextBlock />}
      </div>
      <div
        className="absolute top-0 lg:-right-3 2xl:-right-4 3xl:-right-5 -z-10 w-[101%] lg:h-[102%] lg:rounded-[2.5rem] bg-indigo-500 dark:bg-indigo-700
      lg:rounded-br-3xl -right-2 h-[102%] rounded-[1.5rem] shadow-xl"
      />
      <div className="w-full lg:w-1/2 max-h-[430px] pt-4 lg:pt-0 overflow-hidden rounded-lg">
        {!customImageBlock && !!img && (
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto shadow-lg rounded-lg overflow-hidden"
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

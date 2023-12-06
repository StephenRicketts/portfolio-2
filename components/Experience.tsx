import React, { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type DetailsProps = {
  position: string;
  company?: string;
  companyLink?: string;
  time: string;
  address: string;
  work: string;
};

const Details: React.FC<DetailsProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:-mt-1 w-full lg:w-[60%] md:w-[80%] mx-auto flex flex-col items-start justify-between "
    >
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          {!!company && !!companyLink && (
            <Link
              className="text-primary dark:text-primaryDark capitalize"
              target="_blank"
              href={companyLink}
            >
              @{company}
            </Link>
          )}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

export const Experience = () => {
  const ref = useRef(null);

  return (
    <div className="mt-6">
      <h2 className="font-bold text-3xl mb-10 md:mb-16 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className=" mx-auto relative w-full lg:w-3/4">
        {/* <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] sm:hidden h-full overflow-hidden bg-primary origin-top dark:bg-primaryDark drop-shadow-glow md:w-[2px] md:left-[30px] xs:left-[20px]"
        /> */}
        <ul className="w-full flex flex-col items-start justify-between">
          <Details
            work={
              "After having brought the Liifer web app to production, I continued to maintain it and also added some of the more interesting features to the Overwolf extension, including game-tracking and in-game notifications. During this period I also ported the app to iOS and Android."
            }
            address={"remote"}
            time="7 months"
            companyLink={"https://liifer.com/"}
            company={"liifer"}
            position={"Lead Front End Developer"}
          />
          <Details
            work={
              "In this position I created the front end for the Liifer web app. This included choosing the tech stack, developing the app with input from creators and designers, bringing the app to production, and continuing to maintain it while we built usership."
            }
            address={"remote"}
            time="2 years"
            companyLink={"https://liifer.com/"}
            company={"liifer"}
            position={"Web Developer"}
          />
          <Details
            work={
              "After graduating from a bootcamp and the end of 2019, I completed a few freelance contracts using React and React Native. In this time I built landing pages and worked on a mobile app created by other contract workers."
            }
            address={"remote"}
            time="6 months"
            position={"Freelance Web Dev"}
          />
        </ul>
      </div>
    </div>
  );
};

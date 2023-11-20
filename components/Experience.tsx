import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { LiIcon } from "./LiIcon";
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
      className="my-8 first:-mt-1 w-[60%] md:w-[80%] mx-auto flex flex-col items-start justify-between "
    >
      <LiIcon reference={ref} />
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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-20">
      <h2 className="font-bold text-5xl md:text-6xl xs:text-4xl mb-12 md:mb-16 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full overflow-hidden bg-primary origin-top dark:bg-primaryDark drop-shadow-glow md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            work={
              "After having brough the Liifer Web App to production I moved onto working on the Overwolf extention and porting the app to Android and iOS."
            }
            address={"remote"}
            time="7 months"
            companyLink={"https://liifer.com/"}
            company={"liifer"}
            position={"Lead Front End Developer"}
          />
          <Details
            work={
              "In this position I created the front end for the Liifer Web App. This included started the app from scratch, choosing the tech stack and the many libraries used in development, a major redesign, and bringing the app to production."
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
            time="1 year"
            position={"Freelance Web Dev"}
          />
          {/* <Details
            work={"holder"}
            address={"holder"}
            time="holder"
            companyLink={"liifer.com"}
            company={"liifer"}
            position={"holder"}
          /> */}
        </ul>
      </div>
    </div>
  );
};

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { LiIcon } from "./LiIcon";

type DetailsProps = {
  position: string;
  company: string;
  companyLink: string;
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
      className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            className="text-primary dark:text-primaryDark capitalize"
            target="_blank"
            href={companyLink}
          >
            @{company}
          </a>
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
    <div className="my-64">
      <h2 className="font-bold text-8x md:text-6xl xs:text-4xl mb-32 md:mb-16 w-full text-center">
        Experience
      </h2>
      <p></p>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primary drop-shadow-glow md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            work={"holder"}
            address={"holder"}
            time="holder"
            companyLink={"liifer.com"}
            company={"liifer"}
            position={"holder"}
          />
          <Details
            work={"holder"}
            address={"holder"}
            time="holder"
            companyLink={"liifer.com"}
            company={"liifer"}
            position={"holder"}
          />
          <Details
            work={"holder"}
            address={"holder"}
            time="holder"
            companyLink={"liifer.com"}
            company={"liifer"}
            position={"holder"}
          />
          <Details
            work={"holder"}
            address={"holder"}
            time="holder"
            companyLink={"liifer.com"}
            company={"liifer"}
            position={"holder"}
          />
        </ul>
      </div>
    </div>
  );
};

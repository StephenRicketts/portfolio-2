import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import portalGif from "../public/images/portal.gif";

type SkillProps = { name: string; x: string; y: string };

const Skill: React.FC<SkillProps> = ({ name, x, y }) => {
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
        viewport={{ once: true }}
        className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 
        shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold"
      >
        {name}
      </motion.div>
    </div>
  );
};

export const Skills = () => {
  const skillList = [
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind",
    "Next.js",
    "Git",
    "React Native",
    "Figma",
    "ChatGPT",
    "Redux",
    "Node.js",
    "MongoDB",
    "Jira",
    "0Auth",
  ];
  return (
    <>
      <h2 className="font-bold text-5xl lg:text-3xl md:text-3xl sm:mt-10 lg:pb-6 mt-12 mb-2 w-full text-center">
        Skills
      </h2>
      <div className="sm:flex md:flex lg:flex lg:w-3/4 flex-wrap hidden mx-auto">
        {skillList.map((skill: string) => {
          return (
            <div
              key={skill}
              className="flex items-center justify-center bg-dark rounded-md px-4 py-4 font-semibold h-10 text-light mb-2 mr-1 shadow-lg"
              style={{}}
            >
              {skill}
            </div>
          );
        })}
      </div>

      <div
        className="w-full h-screen sm:hidden md:hidden lg:hidden relative flex items-center justify-center rounded-full  
      bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="TypeScript" x="3vw" y="-7vw" />
        <Skill name="Next.js" x="-15vw" y="-12vw" />
        <Skill name="Figma" x="-25vw" y="-5vw" />
        <Skill name="Tailwind CSS" x="12vw" y="-10vw" />
        <Skill name="React" x="3vw" y="5vw" />
        <Skill name="Web" x="-2.5vw" y="-1.5vw" />
        <Skill name="Mobile" x="-10vw" y="3vw" />
        <Skill name="React Native" x="3vw" y="-18vw" />
        <Skill name="JavaScript" x="-15vw" y="-5vw" />
        <Skill name="0Auth" x="-9vw" y="-17vw" />
        <Skill name="MongoDB" x="19vw" y="7vw" />
        <Skill name="Node.js" x="10vw" y="15vw" />
        <Skill name="Git" x="10vw" y="0vw" />
        <Skill name="ChatGPT" x="-12vw" y="13vw" />
        <Skill name="Jira" x="0vw" y="14vw" />
        <Skill name="Ionic Capacitor" x="-24vw" y="8vw" />
      </div>
    </>
  );
};

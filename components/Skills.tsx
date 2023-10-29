import React from "react";
import { motion } from "framer-motion";

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
  return (
    <>
      <h2 className="font-bold text-8xl md:text-6xl mt-64 md:mt-32 w-full text-center">
        Skills
      </h2>
      <div
        className="w-full h-screen lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] relative flex items-center justify-center rounded-full 
      bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="TypeScript" x="-5vw" y="-10vw" />
        <Skill name="NextJS" x="-15vw" y="-12vw" />
        <Skill name="Figma" x="-25vw" y="10vw" />
        <Skill name="Tailwind " x="-18vw" y="-17vw" />
        <Skill name="React JS" x="0vw" y="0vw" />
        <Skill name="React Native" x="-8vw" y="-22vw" />
      </div>
    </>
  );
};

import React from "react";
import { motion } from "framer-motion";

type SkillProps = { name: string; x: string; y: string };

const Skill: React.FC<SkillProps> = ({ name, x, y }) => {
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      >
        {name}
      </motion.div>
    </div>
  );
};

export const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
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

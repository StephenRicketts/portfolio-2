import Image from "next/image";
import React from "react";
import developerImage from "../public/images/developerImage.png";
import { motion } from "framer-motion";
import "./storm.module.css";
import { ThreeScene } from "./three/ThreeScene";

type Props = {};

export const OrbScene = (props: Props) => {
  return (
    <div className=" bg-black flex flex-col justify-end items-center rounded-lg overflow-hidden h-[476px]">
      <motion.div
        animate={{ y: 100, scale: 1.75 }}
        transition={{ delay: 0.5, duration: 5, ease: "easeInOut" }}
        className="h-32 w-32 rounded-full"
      >
        <ThreeScene />
      </motion.div>
      <motion.div
        initial={{ y: 75, scale: 0.7 }}
        animate={{ y: 250, scale: 1.5 }}
        transition={{ delay: 0.5, duration: 5, ease: "easeInOut" }}
      >
        <Image
          src={developerImage}
          alt="developer and desk"
          priority
          className="object-cover "
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </motion.div>
    </div>
  );
};

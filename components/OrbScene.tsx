import Image from "next/image";
import React, { useState } from "react";
import developerImage from "../public/images/developerImage.png";
import portalGif from "../public/images/portal.gif";
import { motion } from "framer-motion";
import "./storm.module.css";
import ReactCurvedText from "react-curved-text";

type Props = {};

export const OrbScene = (props: Props) => {
  const [showButtontext, setShowButtontext] = useState<boolean>(false);
  return (
    <div className=" bg-black flex flex-col justify-end items-center rounded-lg overflow-hidden h-[525px] text-white">
      <motion.div
        animate={{ y: 100, scale: 2 }}
        transition={{ delay: 0.5, duration: 5, ease: "easeInOut" }}
        className="h-32 w-32 rounded-full"
      >
        <button
          onMouseEnter={() => setShowButtontext(true)}
          onMouseLeave={() => setShowButtontext(false)}
          className="hover:bg-white transition duration-500 ease-in-out rounded-full"
        >
          <span
            className={`absolute transition duration-500 ease-in-out z-30 bottom-20 left-8 ${
              showButtontext ? "opacity-100" : ""
            } opacity-0 whitespace-nowrap font-bold italic`}
          >
            Hire Me
          </span>
          <Image className="animate-spin-slow" src={portalGif} alt="portal" />
        </button>
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

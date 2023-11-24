import Image from "next/image";
import React, { useState } from "react";
import developerImage from "../public/images/developerImage.png";
import portalGif from "../public/images/portal.gif";
import { motion } from "framer-motion";
import ReactCurvedText from "react-curved-text";
import { useWindowSize } from "./hooks/useWindowSize";
import Link from "next/link";

type Props = {};

export const OrbScene = (props: Props) => {
  const [showButtontext, setShowButtontext] = useState<boolean>(false);
  const { width } = useWindowSize();
  return (
    <div className=" bg-black flex flex-col justify-end items-center rounded-lg overflow-hidden h-[400px] md:h-[500px] lg:h-[600px] xl:h-[500px] 3xl:h-[650px] text-white shadow-lg">
      <motion.div
        animate={{ y: 100, scale: 2 }}
        transition={{ delay: 0.5, duration: 5, ease: "easeInOut" }}
        className="hidden lg:block h-32 lg:w-32 rounded-full"
      >
        <Link href="mailto:stephen.ricketts.dev@gmail.com">
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
        </Link>
      </motion.div>
      <motion.div
        animate={{ y: -10, scale: 2 }}
        transition={{ delay: 0.5, duration: 5, ease: "easeInOut" }}
        className="lg:hidden h-16 w-16 rounded-full"
      >
        <Link
          className="pointer-events-none md:pointer-events-auto"
          href="mailto:stephen.ricketts.dev@gmail.com"
        >
          <button
            onMouseEnter={() => setShowButtontext(true)}
            onMouseLeave={() => setShowButtontext(false)}
            className=" lg:hover:bg-white transition duration-500 ease-in-out rounded-full"
          >
            <span
              className={`hidden lg:block absolute transition duration-500 ease-in-out z-30 bottom-20 left-8 ${
                showButtontext ? "opacity-100" : ""
              } opacity-0 whitespace-nowrap font-bold italic`}
            >
              Hire Me
            </span>
            <Image className="animate-spin-slow" src={portalGif} alt="portal" />
          </button>
        </Link>
      </motion.div>
      <motion.div
        className="hidden lg:block"
        initial={{ y: 75, scale: 0.7 }}
        animate={{ y: 250, scale: 1.5 }}
        transition={{ delay: 0.5, duration: 5, ease: "easeInOut" }}
      >
        <Image
          src={developerImage}
          alt="developer and desk"
          priority
          className="object-cover "
        />
      </motion.div>
      <motion.div
        className="lg:hidden"
        initial={{ y: 0, scale: 1 }}
        animate={{ y: 100, scale: 1.5 }}
        transition={{ delay: 0.5, duration: 5, ease: "easeInOut" }}
      >
        <Image
          src={developerImage}
          alt="developer and desk"
          priority
          className="object-cover "
        />
      </motion.div>
    </div>
  );
};

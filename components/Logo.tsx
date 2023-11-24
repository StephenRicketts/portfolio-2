import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import portGif from "../public/images/portal.gif";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="w-16 h-16 hover:opacity-0 transition-opacity shadow-lg bg-primary dark:bg-primaryDark ease-in-out duration-300 dark:text-dark  text-light flex items-center justify-center rounded-full text-2xl font-bold">
        <div className="dark:bg-primaryDarkDim bg-primaryDim  absolute h-[104%] w-[106%] -z-10 rounded-full -right-1 shadow-lg" />
        <span className="">SR</span>
      </div>
      <div className="h-[72px] w-[72px] -ml-1 -mt-1 absolute rounded-full bg-dark shadow-lg hover:opacity-100 opacity-0 top-0 transition ease-in-out duration-500">
        <Image className="animate-spin-slow" src={portGif} alt="portal" />
      </div>
    </Link>
  );
};

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const MotionLink = motion(Link);

export const Logo = (props: Props) => {
  return (
    <MotionLink
      className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
      whileHover={{
        backgroundColor: ["#1828b3", "#102934", "#481283"],
        transition: { duration: 1, repeat: Infinity },
      }}
      href="/"
    >
      SR
    </MotionLink>
  );
};

import React from "react";
import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
};

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const AnimatedText: React.FC<Props> = ({ text, className }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        initial="initial"
        animate="animate"
        variants={quote}
        className={`inline-block w-full tetxt-dark font-bold capitalize text-6xl ${className}`}
      >
        {text.split(" ").map((word, index) => {
          return (
            <motion.span
              variants={singleWord}
              className="inline-block"
              key={word + "-" + index}
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

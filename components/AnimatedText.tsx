import React from "react";
import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
};

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

export const AnimatedText: React.FC<Props> = ({ text, className }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        variants={quote}
        className={`inline-block w-full tetxt-dark font-bold capitalize text-6xl ${className}`}
      >
        {text.split(" ").map((word, index) => {
          return (
            <span className="inline-block" key={word + "-" + index}>
              {word}&nbsp;
            </span>
          );
        })}
      </motion.h1>
    </div>
  );
};

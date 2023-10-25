import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";
import { CustomLink } from "./CustomLink";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { SunIcon, MoonIcon } from "./SunAnMoonIcons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

type Props = {};

export const NavBar = (props: Props) => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink title="home" href="/" className="mr-4" />
        <CustomLink title="about" href="/about" className="mx-4" />
        <CustomLink title="projects" href="/projects" className="ml-4" />
      </nav>
      <div className="'absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://github.com/StephenRicketts"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/stephenricketts5/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
        >
          <LinkedInIcon />
        </motion.a>
        <button
          onClick={() => {
            // setMode(mode);
          }}
          className="ml-2 flex items-center justify-center rounded-full p-1 bg-red-500"
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
    </header>
  );
};

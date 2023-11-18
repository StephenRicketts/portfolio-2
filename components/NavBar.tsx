import Link from "next/link";
import React, { useState } from "react";
import { Logo } from "./Logo";
import { CustomLink } from "./CustomLink";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { SunIcon, MoonIcon } from "./SunAnMoonIcons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { CustomMobileLink } from "./CustomMobileLink";

type Props = {};

export const NavBar = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { mode, setMode } = useThemeSwitcher();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        onClick={handleClick}
        className="flex-col hidden lg:flex justify-center items-center"
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden  text-xl">
        <nav>
          <CustomLink title="home" href="/" className="mr-4" />
          <CustomLink title="about" href="/about" className="mx-4" />
          <CustomLink title="projects" href="/projects" className="ml-4" />
        </nav>

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
              setMode(mode === "light" ? "dark" : "light");
            }}
            className={`ml-3 flex items-center justify-center rounded-full p-1 
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-[70vw] w-full flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              title="home"
              href="/"
              className=""
            />
            <CustomMobileLink
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              title="about"
              href="/about"
              className=""
            />
            <CustomMobileLink
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              title="projects"
              href="/projects"
              className=""
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://github.com/StephenRicketts"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 bg-light dark:bg-dark rounded-full"
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
                setMode(mode === "light" ? "dark" : "light");
              }}
              className={`ml-3 flex items-center justify-center rounded-full p-1 
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      )}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

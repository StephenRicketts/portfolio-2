import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";
import { CustomLink } from "./CustomLink";

type Props = {};

export const NavBar = (props: Props) => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink title="home" href="/" className="mr-4" />
        <CustomLink title="about" href="/about" className="mx-4" />
        <CustomLink title="projects" href="/projects" className="ml-4" />
      </nav>

      <nav></nav>
      <div className="'absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

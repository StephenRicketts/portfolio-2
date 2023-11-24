import React from "react";
import { Layout } from "./Layout";
import Link from "next/link";
import { CustomLink } from "./CustomLink";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="w-full border-t-8 border-solid border-dark  font-medium lg:text-lg dark:text-light  dark:border-indigo-700 text-base">
      <Layout className="py-6 flex items-center justify-between flex-col lg:flex-row !bg-dark dark:!bg-indigo-800 text-primary dark:text-primaryDark">
        <span className="">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>

        <CustomLink
          href="mailto:stephen.ricketts.dev@gmail.com"
          title="Contact me"
          primaryColorUnderline
        />
      </Layout>
    </footer>
  );
};

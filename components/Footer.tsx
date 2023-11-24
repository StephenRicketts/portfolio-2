import React from "react";
import { Layout } from "./Layout";
import Link from "next/link";
import { CustomLink } from "./CustomLink";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="w-full  dark:border-t-4 border-solid border-indigo-200  font-medium lg:text-lg dark:text-light  dark:border-indigo-700 text-base">
      <Layout className="py-6 flex items-center justify-between flex-col lg:flex-row bg-gradient-to-r from-indigo-100 to-indigo-200 dark:bg-gradient-to-r dark:from-indigo-700 dark:to-indigo-900   text-primary dark:text-primaryDark">
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

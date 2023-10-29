import React from "react";
import { Layout } from "./Layout";
import Link from "next/link";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center lg:py-2">
          <Link href="/">Stephen Ricketts</Link>
        </div>
        <Link href="/">Say Hello</Link>
      </Layout>
    </footer>
  );
};

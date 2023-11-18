import Link from "next/link";
import React from "react";

type TextLinkProps = {
  href: string;
  children: string;
  padding: "px-1" | "pl-1";
};

export const TextLink: React.FC<TextLinkProps> = ({
  href,
  children,
  padding,
}) => {
  return (
    <Link
      className={`dark:text-primaryDark text-primary underline hover:text-yellow-100 ${padding}`}
      target="_blank"
      href={href}
    >
      {children}
    </Link>
  );
};
import Link from "next/link";
import React from "react";

type TextLinkProps = {
  href: string;
  children: string;
  padding: "px-1" | "pl-1";
  noTarget?: boolean;
};

export const TextLink: React.FC<TextLinkProps> = ({
  href,
  children,
  padding,
  noTarget,
}) => {
  return (
    <Link
      className={`dark:text-primaryDark text-primary font-semibold underline hover:text-primaryDim dark:hover:text-primaryDarkDim ${padding}`}
      target={noTarget ? undefined : "_blank"}
      href={href}
    >
      {children}
    </Link>
  );
};

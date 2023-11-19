import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  href: string;
  title: string;
  className?: string;
  primaryColorUnderline?: boolean;
  target?: "_blank";
};

export const CustomLink: React.FC<Props> = ({
  href,
  className,
  title,
  primaryColorUnderline,
  target,
}) => {
  const router = useRouter();

  return (
    <Link
      target={!!target ? target : undefined}
      href={href}
      className={`${className} relative group`}
    >
      {title}
      <span
        className={`h-[1px] inline-block ${
          primaryColorUnderline
            ? "bg-primary dark:bg-primaryDark"
            : "bg-dark dark:bg-light"
        }  absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

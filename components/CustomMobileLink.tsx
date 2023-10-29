import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  href: string;
  title: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
};

export const CustomMobileLink: React.FC<Props> = ({
  href,
  className,
  isOpen,
  setIsOpen,
  title,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
    setIsOpen(!isOpen);
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} relative group text-light dark:text-dark my-2`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

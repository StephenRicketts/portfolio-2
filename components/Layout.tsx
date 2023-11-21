import React from "react";

type Props = {
  children: any;
  className?: string;
};

export const Layout: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-4 ${className}`}
    >
      {children}
    </div>
  );
};

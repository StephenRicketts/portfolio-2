import React from "react";

type Props = {
  children: any;
  className?: string;
};

export const Layout: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark ${className}`}
    >
      {children}
    </div>
  );
};

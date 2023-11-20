import React from "react";

type Props = {};

export const Education = (props: Props) => {
  return (
    <div className="pt-12 w-10/12 mx-auto">
      <h2 className="font-bold text-5xl md:text-6xl xs:text-4xl mb-12 md:mb-16 w-full text-center">
        Education
      </h2>
      <div className="py-8">
        <h3 className="text-2xl font-bold">
          Diploma in Full-Stack Web Development, Concordia University, Montréal
        </h3>
        <span className="font-semibold text-primary dark:text-primaryDark">
          September 2019 — December 2019
        </span>
        <p>
          Completed 480+ hours of intensive full-stack web development course
          focused on programming fundamentals including test-driven development,
          object-oriented programming, SCRUM, Agile methodologies,
          pair-programming, algorithms and databases, with a focus on React and
          JavaScript.
        </p>
      </div>
      <div className="py-8">
        <h3 className="text-2xl font-bold">
          Bachelor of Arts, Psychology, University of New Brunswick,
          Fredericton, New Brunswick
        </h3>
        <span className="font-semibold text-primary dark:text-primaryDark">
          September 2008 — May 2012
        </span>
      </div>
      <div className="py-8">
        <h3 className="text-2xl font-bold">
          React Native – The Practical Guide, Udemy
        </h3>
        <span className="font-semibold text-primary dark:text-primaryDark">
          September 2020 — December 2020
        </span>
      </div>
      <div className="py-8">
        <h3 className="text-2xl font-bold">
          React and TypeScript: Build a Portfolio Project (2021), Udemy
        </h3>
        <span className="font-semibold text-primary dark:text-primaryDark">
          January 2021 — February 2021
        </span>
      </div>
    </div>
  );
};

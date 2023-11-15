import Link from "next/link";
import React from "react";

export const CapacitorText = () => {
  return (
    <div className="flex flex-col space-y-4 pr-10">
      <p className="">
        Through leveraging
        <Link
          target="_blank"
          className="px-1 text-primary underline"
          href={"https://capacitorjs.com/"}
        >
          Capacitor
        </Link>
        I was able to create performant mobile ports for Liifer that run
        natively on iOS and Android.
      </p>
      <div>
        <p>
          These ports were both reviewed by Google and Apple and accepted into
          the
          <Link
            target="_blank"
            className="px-1 text-primary underline"
            href={
              "https://play.google.com/store/search?q=Liifer&c=apps&hl=en&gl=US"
            }
          >
            Google Play Store
          </Link>
          and
          <Link
            target="_blank"
            className="px-1 text-primary underline"
            href={"https://apps.apple.com/app/liifer/id6468917016"}
          >
            Apple App Store
          </Link>
        </p>
      </div>
    </div>
  );
};

export const ApiCommunicationText = () => {
  return (
    <div className="w-11/12 space-y-2">
      <p>
        The Liifer app is a food delivery app with that allows users to create
        meals and save them to allow for quick ordering. A great user experience
        requires the data to be fetched and displayed in a reliable and
        performant manner.
      </p>
      <p>
        To accomplish this I created
        <Link
          target="_blank"
          className="text-primary px-1 underline"
          href="https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-sharing-logic-between-components"
        >
          custom hooks
        </Link>
        using
        <Link
          className="px-1 text-primary underline hover:text-yellow-400"
          href={"https://tanstack.com/query/latest/"}
        >
          react-query
        </Link>
        . These custom hooks also allowed for some of the more complicated API
        requirements such as in-game notifications.
      </p>
    </div>
  );
};

const authText = () => {
  <div></div>;
};

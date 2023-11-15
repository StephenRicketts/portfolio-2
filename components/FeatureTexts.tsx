import Link from "next/link";
import React from "react";

type Props = {};

export const CapacitorText = (props: Props) => {
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

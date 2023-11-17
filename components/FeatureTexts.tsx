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
export const AuthText = () => {
  return (
    <div className="space-y-2">
      <p>
        For authorization, Liifer uses
        <Link
          className="pl-1 dark:text-primaryDark text-primary underline hover:text-yellow-400"
          target="_blank"
          href={"https://auth0.com/docs"}
        >
          0Auth 2.0
        </Link>
        , this requires handling of the associated JWT token. Storing the token,
        using it for secure API calls, and refreshing the token when necessary.
        Google and Discord buttons are also available for easy log in/sign up.
      </p>
      <p>
        Forms and client-side validation are implemented using
        <Link
          className="pl-1 dark:text-primaryDark text-primary underline hover:text-yellow-400"
          target="_blank"
          href={"https://react-hook-form.com/"}
        >
          react-hook-form
        </Link>
        .
      </p>
    </div>
  );
};

export const OverwolfText = () => {
  return (
    <div className="space-y-2">
      <p>
        Through the
        <Link
          target="_blank"
          href={"https://overwolf.github.io/api"}
          className="pl-1 dark:text-primaryDark text-primary underline hover:text-yellow-400"
        >
          Overwolf API
        </Link>
        , Liifer is also available as an desktop app and ingame overlay that
        allows users to order food while gaming. The quality React code allows
        this functionality with no effect on the running game.
      </p>
      <p>
        An interesting feature is the game-tracking function, which allows the
        app to track when users are gaming, and rewards them with points for
        time spent gaming. The in-game notifications is another, which allows
        the back-end to send notifications to users while they are gaming, which
        are then shown as a non-intrusive overlay.
      </p>
      <p>
        This app is available in the
        <Link
          target="_blank"
          href={
            "https://www.overwolf.com/app/Liifer_Technologies_Inc-Liifer_Application"
          }
          className="px-1 dark:text-primaryDark text-primary underline hover:text-yellow-400"
        >
          Overwolf Store
        </Link>{" "}
        and currently has almost 5k downloads and maintains a 4.5/5 rating.
      </p>
    </div>
  );
};

import React from "react";
import { TextLink } from "./TextLink";

export const CapacitorText = () => {
  return (
    <div className="flex flex-col space-y-4 pr-10 text-sm lg:text-base">
      <p className="">
        Through leveraging
        <TextLink padding="px-1" href={"https://capacitorjs.com/"}>
          Capacitor
        </TextLink>
        I was able to create performant mobile ports for Liifer that run
        natively on iOS and Android.
      </p>
      <div>
        <p>
          These ports were both reviewed by Google and Apple and accepted into
          the
          <TextLink
            padding="px-1"
            href={
              "https://play.google.com/store/search?q=Liifer&c=apps&hl=en&gl=US"
            }
          >
            Google Play Store
          </TextLink>
          and
          <TextLink
            padding="pl-1"
            href={"https://apps.apple.com/app/liifer/id6468917016"}
          >
            Apple App Store
          </TextLink>
          .
        </p>
      </div>
    </div>
  );
};

export const LocalizationText = () => {
  return (
    <div className="w-11/12 space-y-2 text-sm lg:text-base">
      <p>
        As Liifer is geared towards all of North America including Quebec, I
        used
        <TextLink padding="px-1" href="https://react.i18next.com/">
          react-i18next
        </TextLink>
        to allow localization and language selection.
      </p>
    </div>
  );
};

export const ApiCommunicationText = () => {
  return (
    <div className="w-11/12 space-y-2 text-sm lg:text-base">
      <p>
        The Liifer app is a food delivery app that allows users to create meals
        and save them to allow for quick ordering. A great user experience
        requires the data to be fetched and displayed in a reliable and
        performant manner.
      </p>
      <p>
        To accomplish this I created
        <TextLink
          padding="px-1"
          href="https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-sharing-logic-between-components"
        >
          custom hooks
        </TextLink>
        using
        <TextLink padding="px-1" href={"https://tanstack.com/query/latest/"}>
          react-query
        </TextLink>
        . These custom hooks also allowed for some of the more complicated API
        requirements such as in-game notifications.
      </p>
    </div>
  );
};
export const AuthText = () => {
  return (
    <div className="space-y-2 text-sm lg:text-base">
      <p>
        For authorization, Liifer uses
        <TextLink padding="pl-1" href={"https://oauth.net/"}>
          0Auth 2.0
        </TextLink>
        . Google and Discord buttons are also available for easy log in/sign up.
      </p>
      <p>
        Forms and client-side validation are implemented using
        <TextLink padding="pl-1" href={"https://react-hook-form.com/"}>
          react-hook-form
        </TextLink>
        .
      </p>
    </div>
  );
};

export const OverwolfText = () => {
  return (
    <div className="space-y-2 text-sm lg:text-base">
      <p>
        Through the
        <TextLink href={"https://overwolf.github.io/api"} padding="pl-1">
          Overwolf API
        </TextLink>
        , Liifer is also available as a desktop app and in-game overlay that
        allows users to order food while gaming.
      </p>
      <p>
        An interesting feature of this extension is the game-tracking function,
        which allows the app to track when users are gaming, and rewards them
        with points for time spent gaming. The in-game notifications is another,
        which allows the back-end to send notifications to users while they are
        gaming, which are then shown as a non-intrusive overlay.
      </p>
      <p>
        This app is available in the
        <TextLink
          href={
            "https://www.overwolf.com/app/Liifer_Technologies_Inc-Liifer_Application"
          }
          padding="px-1"
        >
          Overwolf Store
        </TextLink>
        and currently has around 5k downloads and maintains a 4.5/5 rating.
      </p>
    </div>
  );
};

export const BackEndText = () => {
  return (
    <div className="text-sm lg:text-base">
      <p>
        The back-end of the Liifer app leverages a third party aggregator system
        to access over 800,000 restaurants all over North America. The results
        for nearby restaurants are based off of the users location, as set using
        the
        <TextLink
          padding="pl-1"
          href={
            "https://developers.google.com/maps/documentation/places/web-service/overview"
          }
        >
          {"google places API"}
        </TextLink>
        . This information is then rendered and then made searchable using
        <TextLink
          padding="pl-1"
          href={"https://tanstack.com/table/v8/docs/guide/introduction"}
        >
          {"react-table"}
        </TextLink>
        .
      </p>
    </div>
  );
};

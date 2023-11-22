import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const monsterrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${monsterrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen overflow-x-hidden`}
      >
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
      </main>
    </>
  );
}
export default MyApp;

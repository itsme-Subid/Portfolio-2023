import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { createGlobalStyle } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Page } from "../../page";
import { lazy } from "react";
import Head from "next/head";

const Header = lazy(() => import("../../components/Header"));

const GlobalStyle = createGlobalStyle`
  :root{
    --light-color: 255, 255, 255;
    --dark-color: 49, 49, 49;
    --primary-color: 125, 64, 248;
    --secondary-color: 255, 106, 139;
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar {
    width: 0;
  }
  html, body {
    overflow-x: hidden;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-poppins, sans-serif);
    outline: none;
  }
  body {
    position: relative;
    background-color: rgb(var(--light-color));
    color: rgb(var(--dark-color));
  }
  .container {
    margin-inline: auto;
    width: min(90%, 70rem);
  }
  a {
    text-decoration: none;
    color: inherit;
    transition: 0.15s;
  }
  button {
    cursor: pointer;
    user-select: none;
  }
`;

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const container = {
  hidden: { opacity: 0, x: "-100vw" },
  show: { opacity: 1, x: 0 },
};

export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: Page;
}) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          variants={container}
          initial="hidden"
          animate="show"
          className={poppins.variable}
        >
          <GlobalStyle />
          {!Component.getLayout && <Header />}
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

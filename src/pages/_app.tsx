import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { createGlobalStyle } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { lazy } from "react";
import Head from "next/head";

const Header = lazy(() => import("../../components/Header"));

const GlobalStyle = createGlobalStyle`
  :root{
    --light-color: 255, 255, 255;
    --dark-color: 2, 2, 2;
    --primary-color: 253, 139, 0;
    --secondary-color: 0, 134, 255;
    --tertiary-color: 0, 98, 106;
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
    border: none;
    background-color: transparent;
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

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <GlobalStyle />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          variants={container}
          initial="hidden"
          animate="show"
          className={poppins.variable}
        >
          <Header />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

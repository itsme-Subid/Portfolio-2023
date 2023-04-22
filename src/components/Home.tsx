import styled from "styled-components";
import { motion } from "framer-motion";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Work from "./Work";
import Skill from "./Skill";

const Container = styled(motion.div)`
  position: relative;
  height: 100vh;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: rgb(var(--dark-color));
  & > section {
    background-color: rgb(var(--dark-color));
  }
  @media screen and (max-width: 50rem) {
    height: auto;
  }
`;

const container = {
  hidden: { opacity: 0, x: "-100vw" },
  show: { opacity: 1, x: 0 },
};

const Home = () => {
  return (
    <Container variants={container} initial="hidden" animate="show">
      <Hero />
      <About />
      <Skill />
      <Work />
      <Contact />
    </Container>
  );
};

export default Home;

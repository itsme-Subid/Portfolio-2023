import styled from "styled-components";
import { motion } from "framer-motion";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Skill from "../components/Skill";

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

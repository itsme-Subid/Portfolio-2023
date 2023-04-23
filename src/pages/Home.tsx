import styled from "styled-components";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Skill from "../components/Skill";

const Container = styled.div`
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

const Home = () => {
  return (
    <Container>
      <Hero />
      <About />
      <Skill />
      <Work />
      <Contact />
    </Container>
  );
};

export default Home;

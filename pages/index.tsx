import styled from "styled-components";
import About from "./../components/About";
import Contact from "./../components/Contact";
import Hero from "./../components/Hero";
import Work from "./../components/Work";
import Skill from "./../components/Skill";

const Container = styled.div`
  height: 100vh;
  /* scroll-snap-type: y mandatory; */
  scroll-behavior: smooth;
  overflow-y: auto;
  color: rgb(var(--dark-color));
  & > section {
    background-color: rgb(var(--dark-color));
  }
`;

export default function Home() {
  return (
    <Container>
      <Hero />
      <About />
      <Skill />
      <Work />
      <Contact />
    </Container>
  );
}

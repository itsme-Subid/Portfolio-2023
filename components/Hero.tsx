import Image from "next/image";
import styled from "styled-components";
import profile from "../public/profile.jpg";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  & .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & h2 {
      font-weight: 600;
      color: rgb(var(--light-color));
      & span {
        font-size: 1.5rem;
        color: rgb(var(--light-color));
      }
      & strong {
        font-size: 3rem;
        display: block;
        color: rgb(var(--primary-color));
        text-shadow: 0 0 0.75rem rgb(var(--primary-color), 0.25);
      }
    }
    & p {
      font-size: 1rem;
      font-weight: 500;
      color: rgb(var(--light-color), 0.8);
      margin-bottom: 1rem;
    }
    & button {
      font-size: 1rem;
      font-weight: 500;
      color: rgb(var(--light-color));
      padding: 0.5rem 1.25rem;
      border-radius: 0.25rem;
      background-color: rgb(var(--secondary-color));
      border: 1px solid rgb(var(--light-color), 0.1);
      width: fit-content;
      cursor: pointer;
      overflow: hidden;
      transition: 0.5s;
      &:hover {
        border-color: transparent;
        box-shadow: 0 0 0.75rem rgb(var(--secondary-color), 0.75);
      }
    }
  }
  & .right {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      position: absolute;
      inset: 0;
      margin: auto;
      border-radius: 50%;
      border: 1px solid rgb(var(--light-color), 0.1);
      object-fit: contain;
      animation: animate 4s infinite ease alternate;
      @keyframes animate {
        0% {
          transform: translateY(-5%);
        }
        100% {
          transform: translateY(5%);
        }
      }
    }
  }
`;

const Hero = () => {
  return (
    <Section className="container">
      <div className="left">
        <h2>
          <span>Hello World, I&apos;m </span>
          <strong>SUBID DAS</strong>
        </h2>
        <p>
          I&apos;m an experienced Full-Stack Developer with expertise in Next.js
          & MERN Stack, including TypeScript. I create scalable and performant
          web applications with intuitive user interfaces.
        </p>
        <button>Download CV</button>
      </div>
      <div className="right">
        <Image src={profile} width={500} height={500} alt="" />
      </div>
    </Section>
  );
};

export default Hero;

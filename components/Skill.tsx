import Image from "next/image";
import styled from "styled-components";
import nextjs from "../public/svg/next.svg";
import react from "../public/svg/react.svg";
import reactRouter from "../public/svg/router.svg";
import typescript from "../public/svg/typescript.svg";
import tailwindcss from "../public/svg/tailwind.svg";
import materialui from "../public/svg/material.svg";
import nodejs from "../public/svg/node.svg";
import express from "../public/svg/express.svg";
import firebase from "../public/svg/firebase.svg";
import mongodb from "../public/svg/mongodb.svg";
import styledComponents from "../public/svg/styled-components.png";
import git from "../public/svg/git.svg";
import github from "../public/svg/github.svg";
import mysql from "../public/svg/mysql.svg";
import javascript from "../public/svg/javascript.svg";
import framerMotion from "../public/svg/framer-motion.svg";
import three from "../public/svg/three.svg";

const Section = styled.section`
  position: sticky;
  top: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(var(--light-color));
  isolation: isolate;
  &::before {
    content: "Skills";
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 8rem;
    font-weight: 700;
    text-transform: uppercase;
    color: rgb(var(--secondary-color), 0.5);
    opacity: 0.1;
    z-index: -1;
  }
  & ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    list-style: none;
    & li {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      background-color: rgb(var(--secondary-color), 0.05);
      border: 1px solid transparent;
      user-select: none;
      overflow: hidden;
      cursor: pointer;
      transition: 0.15s;
      &:hover {
        border: 1px solid rgb(var(--primary-color));
        box-shadow: rgb(var(--primary-color), 0.16) 0px 10px 36px 0px,
          rgb(var(--primary-color), 0.06) 0px 0px 0px 1px;
        transform: scale(1.05);
      }
      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          180deg,
          rgb(var(--primary-color), 0.075) 1%,
          rgb(var(--primary-color), 0.075) 5%,
          transparent 50%,
          transparent 100%
        );
      }
      & img.invert {
        filter: invert(1);
      }
    }
  }
`;

const Skill = () => {
  const width = 50;
  const height = 50;
  return (
    <Section className="container" id="skill">
      <ul>
        <li title="Next.js">
          <Image src={nextjs} width={width} height={height} alt="Next.js" />
        </li>
        <li title="React.js">
          <Image src={react} width={width} height={height} alt="React.js" />
        </li>
        <li title="React Router Dom">
          <Image
            src={reactRouter}
            width={width}
            height={height}
            alt="React Router Dom"
          />
        </li>
        <li title="Typescript">
          <Image
            src={typescript}
            width={width}
            height={height}
            alt="Typescript"
          />
        </li>
        <li title="Framer Motion">
          <Image
            src={framerMotion}
            width={width}
            height={height}
            alt="Framer Motion"
          />
        </li>
        <li title="Three.js">
          <Image
            src={three}
            width={width}
            height={height}
            alt="Three.js"
            className="invert"
          />
        </li>
        <li title="Tailwind CSS">
          <Image
            src={tailwindcss}
            width={width}
            height={height}
            alt="Tailwind CSS"
          />
        </li>
        <li title="Material UI">
          <Image
            src={materialui}
            width={width}
            height={height}
            alt="Material UI"
          />
        </li>
        <li title="Node.js">
          <Image src={nodejs} width={width} height={height} alt="Node.js" />
        </li>
        <li title="Express.js">
          <Image
            src={express}
            width={width}
            height={height}
            alt="Express.js"
            className="invert"
          />
        </li>
        <li title="Firebase">
          <Image src={firebase} width={width} height={height} alt="Firebase" />
        </li>
        <li title="MongoDB">
          <Image src={mongodb} width={width} height={height} alt="MongoDB" />
        </li>
        <li title="Styled-Components">
          <Image
            src={styledComponents}
            width={width}
            height={height}
            alt="Styled-Components"
          />
        </li>
        <li title="Git">
          <Image src={git} width={width} height={height} alt="Git" />
        </li>
        <li title="GitHub">
          <Image
            src={github}
            width={width}
            height={height}
            alt="GitHub"
            className="invert"
          />
        </li>
        <li title="MySQL">
          <Image src={mysql} width={width} height={height} alt="MySQL" />
        </li>
        <li title="Javascript">
          <Image
            src={javascript}
            width={width}
            height={height}
            alt="Javascript"
          />
        </li>
      </ul>
    </Section>
  );
};

export default Skill;

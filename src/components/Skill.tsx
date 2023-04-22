import styled from "styled-components";
import nextjs from "/svg/next.svg";
import react from "/svg/react.svg";
import reactRouter from "/svg/router.svg";
import typescript from "/svg/typescript.svg";
import tailwindcss from "/svg/tailwind.svg";
import materialui from "/svg/material.svg";
import nodejs from "/svg/node.svg";
import express from "/svg/express.svg";
import firebase from "/svg/firebase.svg";
import mongodb from "/svg/mongodb.svg";
import styledComponents from "/svg/styled-components.png";
import git from "/svg/git.svg";
import github from "/svg/github.svg";
import mysql from "/svg/mysql.svg";
import javascript from "/svg/javascript.svg";
import framerMotion from "/svg/framer-motion.svg";
import three from "/svg/three.svg";

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
  @media screen and (max-width: 50rem) {
    position: relative;
    top: auto;
  }
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
  const skills = [
    { name: "Next.js", src: nextjs },
    { name: "React.js", src: react },
    { name: "Typescript", src: typescript },
    { name: "Javascript", src: javascript },
    { name: "React Router Dom", src: reactRouter },
    { name: "Styled Components", src: styledComponents },
    { name: "Framer Motion", src: framerMotion },
    { name: "Three.js", src: three, className: "invert" },
    { name: "Tailwind CSS", src: tailwindcss },
    { name: "Material UI", src: materialui },
    { name: "Node.js", src: nodejs },
    { name: "Express.js", src: express, className: "invert" },
    { name: "Firebase", src: firebase },
    { name: "MongoDB", src: mongodb },
    { name: "MySQL", src: mysql },
    { name: "Git", src: git },
    { name: "Github", src: github, className: "invert" },
  ];
  return (
    <Section className="container" id="skill">
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <img
              src={skill.src}
              alt={skill.name}
              width={width}
              height={height}
              className={skill.className}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Skill;

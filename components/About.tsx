import { MouseEvent, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 0;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  transition: 0.15s;
  @media screen and (max-width: 50rem) {
    min-height: 200vh;
  }
  & nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    & button {
      position: relative;
      color: transparent;
      -webkit-text-stroke: 1px rgb(var(--light-color));
      font-size: 1.25rem;
      letter-spacing: 0.1rem;
      font-weight: 600;
      transition: 0.15s;
      &.active::before {
        content: "";
        position: absolute;
        inset: auto 0 -0.1rem 0;
        margin-inline: auto;
        width: 80%;
        height: 0.15rem;
        border-radius: 1rem;
        background-color: rgb(var(--primary-color));
      }
    }
  }
  & :where(.experience, .education) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    & h2 {
      width: 100%;
      font-size: 1.5rem;
      font-weight: 600;
      text-align: left;
      color: rgb(var(--light-color), 0.8);
    }
    & .timeline {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      & .timeline__item {
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 0.5rem;
        & .group {
          margin-left: auto;
          width: 95%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1rem;
          @media screen and (max-width: 50rem) {
            width: 90%;
          }
          & .group__item {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0.5rem;
            &::before {
              content: "";
              position: absolute;
              height: calc(100% + 1rem);
              top: 1.25rem;
              width: 1px;
              background-color: rgb(var(--light-color), 0.2);
              left: -2.75%;
              @media screen and (max-width: 50rem) {
                left: -5%;
              }
            }
            &::after {
              content: "";
              position: absolute;
              height: 0.75rem;
              width: 0.75rem;
              border-radius: 50% 0 50% 50%;
              transform-origin: left;
              top: 0.4rem;
              background-color: rgb(var(--primary-color));
              left: -2.5%;
              transform: translateX(-50%) rotate(45deg);
              @media screen and (max-width: 50rem) {
                left: -5%;
              }
            }
          }
          & .group__item:last-child::before {
            display: none;
          }
        }
        & :where(.designation, .course) {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 1rem;
          color: rgb(var(--light-color), 0.75);
          @media screen and (max-width: 50rem) {
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 0.5rem;
          }
          & h4 {
            letter-spacing: 0.5px;
          }
          & span {
            font-size: 1rem;
            font-weight: 400;
            text-align: left;
          }
        }
        & p {
          color: rgb(var(--light-color), 0.75);
          font-weight: 400;
          &.limit-line-1 {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        & button {
          position: absolute;
          top: -0.5rem;
          right: 0;
          order: 1;
          font-weight: 700;
          letter-spacing: 1px;
          color: rgb(var(--light-color), 0.75);
          border: 1px solid rgb(var(--light-color), 0.1);
          padding: 0.5rem 1rem;
          border-radius: 5rem;
          margin-right: auto;
          transition: 0.15s;
          @media screen and (max-width: 50rem) {
            top: -0.25rem;
          }
          &:hover {
            border: 1px solid transparent;
            background-color: rgb(var(--light-color), 0.1);
          }
        }
        & .skills {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          & span {
            position: relative;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.5rem 1.25rem;
            color: rgb(var(--light-color));
            border: 1px solid rgb(var(--primary-color), 0.5);
            border-radius: 5rem;
            isolation: isolate;
            cursor: pointer;
            transition: all 0.15s;
            &::before {
              content: "";
              position: absolute;
              width: 150%;
              height: 150%;
              transform: translateY(150%);
              background-color: rgb(var(--primary-color));
              border-radius: 50%;
              z-index: -1;
              transition: all 0.5s;
            }
            &:hover {
              color: rgb(var(--dark-color));
              border: 1px solid transparent;
              box-shadow: rgba(255, 255, 255, 0.16) 0px 10px 36px 0px,
                rgba(255, 255, 255, 0.06) 0px 0px 0px 1px;
              &::before {
                transform: translateY(0);
              }
            }
          }
        }
      }
    }
  }
`;

const container = {
  hidden: { opacity: 0, x: "-100vw" },
  show: { opacity: 1, x: 0 },
  exit: { x: "100vw" },
};

const About = () => {
  const skills = [
    "CSS Module",
    "JavaScript",
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Material UI",
    "Git",
    "GitHub",
  ];
  const [active, setActive] = useState("experience");
  const hide = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => (
    e.currentTarget.previousElementSibling?.classList.toggle("limit-line-1"),
    e.currentTarget.previousElementSibling?.classList.contains("limit-line-1")
      ? (e.currentTarget.innerText = "Show more")
      : (e.currentTarget.innerText = "Show less")
  );
  return (
    <Section className="container" id="about">
      <nav>
        <button
          onClick={() => setActive("experience")}
          className={`${active === "experience" && "active"}`}
        >
          <h2>Experience</h2>
        </button>
        <button
          onClick={() => setActive("education")}
          className={`${active === "education" && "active"}`}
        >
          <h2>Education</h2>
        </button>
      </nav>
      {active === "experience" ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="experience"
          >
            <div className="timeline">
              <div className="timeline__item">
                <h3 className="companpy">Simmi Foundation</h3>
                <div className="group">
                  <div className="group__item">
                    <div className="designation">
                      <h4>Head of Engineering</h4>
                      <span>(04/2023 - Present)</span>
                    </div>
                    <p className="limit-line-1">
                      As a Frontend Team Leader Intern and Full Stack Developer
                      Intern, I am leading the frontend team and working with
                      tech stacks like React.js, Material UI, and Node.js. My
                      responsibilities include mentoring team members, managing
                      tasks, and ensuring the timely delivery of projects. I am
                      also involved in the development of full-stack
                      applications using the MERN stack.
                    </p>
                    <button onClick={(e) => hide(e)}>Show more</button>
                    <div className="skills">
                      {skills.map((skill, index) => (
                        <span key={index}>{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="group__item">
                    <div className="designation">
                      <h4>Tech Lead</h4>
                      <span>(02/2023 - 03/2023)</span>
                    </div>
                    <p className="limit-line-1">
                      As a Frontend Team Leader Intern and Full Stack Developer
                      Intern, I am leading the frontend team and working with
                      tech stacks like React.js, Material UI, and Node.js. My
                      responsibilities include mentoring team members, managing
                      tasks, and ensuring the timely delivery of projects. I am
                      also involved in the development of full-stack
                      applications using the MERN stack.
                    </p>
                    <button onClick={(e) => hide(e)}>Show more</button>
                    <div className="skills">
                      {skills.map((skill, index) => (
                        <span key={index}>{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="group__item">
                    <div className="designation">
                      <h4>Full Stack Developer</h4>
                      <span>(01/2023 - 02/2023)</span>
                    </div>
                    <p className="limit-line-1">
                      As a Frontend Team Leader Intern and Full Stack Developer
                      Intern, I am leading the frontend team and working with
                      tech stacks like React.js, Material UI, and Node.js. My
                      responsibilities include mentoring team members, managing
                      tasks, and ensuring the timely delivery of projects. I am
                      also involved in the development of full-stack
                      applications using the MERN stack.
                    </p>
                    <button onClick={(e) => hide(e)}>Show more</button>
                    <div className="skills">
                      {skills.map((skill, index) => (
                        <span key={index}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="education"
          >
            <div className="timeline">
              <div className="timeline__item">
                <h3 className="organisation">
                  Sheoraphuli Surendranath Vidyaniketan
                </h3>
                <div className="group">
                  <div className="group__item">
                    <div className="course">
                      <h4>Higher Secondary</h4>
                      <span>(09/2021 - Present)</span>
                    </div>
                    <p className="limit-line-1">
                      As a Frontend Team Leader Intern and Full Stack Developer
                      Intern, I am leading the frontend team and working with
                      tech stacks like React.js, Material UI, and Node.js. My
                      responsibilities include mentoring team members, managing
                      tasks, and ensuring the timely delivery of projects. I am
                      also involved in the development of full-stack
                      applications using the MERN stack.
                    </p>
                    <button onClick={(e) => hide(e)}>Show more</button>
                  </div>
                </div>
              </div>
              <div className="timeline__item">
                <h3 className="organisation">
                  Chandannagar Kanailal Vidyamandir
                </h3>
                <div className="group">
                  <div className="group__item">
                    <div className="course">
                      <h4>Secondary</h4>
                      <span>(04/2018 - 06/2021)</span>
                    </div>
                    <p className="limit-line-1">
                      As a Frontend Team Leader Intern and Full Stack Developer
                      Intern, I am leading the frontend team and working with
                      tech stacks like React.js, Material UI, and Node.js. My
                      responsibilities include mentoring team members, managing
                      tasks, and ensuring the timely delivery of projects. I am
                      also involved in the development of full-stack
                      applications using the MERN stack.
                    </p>
                    <button onClick={(e) => hide(e)}>Show more</button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </Section>
  );
};

export default About;

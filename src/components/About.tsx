import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";

const Section = styled.section`
  position: sticky;
  top: -5.5rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  color: rgb(var(--light-color), 0.75);
  transition: 0.15s;
  @media screen and (max-width: 50rem) {
    position: static;
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
      @media screen and (max-width: 50rem) {
        font-size: 1rem;
        -webkit-text-stroke: 0;
        color: rgb(var(--light-color));
        font-weight: 500;
      }
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
        & h3 {
          color: rgb(var(--light-color), 0.8);
          letter-spacing: 0.1rem;
          font-size: 1.5rem;
          font-weight: 200;
        }
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
        }
        & .course {
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
  const [active, setActive] = useState("experience");
  const [isOpenedExprience, setIsOpenedExprience] = useState<number | null>(1);
  const [isOpenedEducation, setIsOpenedEducation] = useState<number | null>(1);
  const exprience = [
    {
      id: 1,
      organisation: "Simmi Foundation",
      roles: [
        {
          id: 1,
          designation: {
            title: "Head of Engineering",
            duration: "03/2023 - 04/2023",
          },
          description: [
            "Oversaw the overall technical direction and strategy of the organization, ensuring alignment with business goals and objectives.",
            "Led a team of engineers, providing guidance, mentorship, and support to drive excellence in software development practices.",
            "Implemented agile methodologies and streamlined development processes to improve efficiency and project delivery timelines.",
            "Collaborated closely with stakeholders to gather requirements, define project scope, and prioritize development efforts.",
            "Spearheaded the adoption of new technologies and frameworks, enabling the organization to stay at the forefront of innovation.",
          ],
          skills: [
            "Technical Leadership",
            "Agile Methodologies",
            "Strategic Planning",
            "Technology Adoption",
          ],
        },
        {
          id: 2,
          designation: {
            title: "Tech Lead",
            duration: "02/2023 - 03/2023",
          },
          description: [
            "Led the frontend development team, driving the design and implementation of user-centric web applications.",
            "Architected scalable and maintainable frontend solutions using modern technologies such as React.js, TypeScript, and Material-UI.",
            "Conducted code reviews and provided constructive feedback to ensure code quality and adherence to best practices.",
            "Collaborated with product managers and designers to translate business requirements into technical specifications.",
            "Mentored junior developers, fostering their growth and skill development within the organization.",
          ],
          skills: [
            "Frontend Leadership",
            "Web Application Design",
            "React.js",
            "JavaScript",
            "Material UI",
            "Code Review",
            "Technical Specification",
            "Collaboration",
            "Mentorship",
          ],
        },
        {
          id: 3,
          designation: {
            title: "Full Stack Developer",
            duration: "01/2023 - 02/2023",
          },
          description: [
            "Developed and maintained full-stack applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
            "Implemented RESTful APIs and integrated external services to enhance application functionality.",
            "Designed and optimized database schemas, ensuring efficient data storage and retrieval.",
            "Collaborated with cross-functional teams to gather requirements and deliver solutions that met business needs.",
            "Actively participated in code reviews, refactoring efforts, and continuous improvement initiatives to enhance code quality and maintainability.",
          ],
          skills: [
            "CSS Module",
            "JavaScript",
            "React.js",
            "Node.js",
            "MongoDB",
            "Express.js",
            "Material UI",
            "Git",
            "GitHub",
          ],
        },
      ],
    },
  ];
  const education = [
    {
      id: 1,
      institute: "Sheoraphuli Surendranath Vidyaniketan",
      courses: [
        {
          id: 1,
          course: "Higher Secondary",
          duration: "(09/2021 - 06/2023)",
          description: [
            "It's a Government school in Kolkata, India. It is affiliated to the West Bengal Council of Higher Secondary Education.",
          ],
        },
      ],
    },
    {
      id: 2,
      institute: "Chandannagar Kanailal Vidyamandir",
      courses: [
        {
          id: 2,
          course: "Secondary",
          duration: "(04/2018 - 06/2021)",
          description: [
            "It's a Government school in Kolkata, India. It is affiliated to the West Bengal Council of Secondary Education.",
          ],
        },
      ],
    },
  ];
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
              {exprience.map((exp) => (
                <div className="timeline__item">
                  <h3 className="organisation">{exp.organisation}</h3>
                  <div className="group">
                    {exp.roles.map((role) => (
                      <Roles
                        role={role}
                        isOpened={isOpenedExprience}
                        setIsOpened={setIsOpenedExprience}
                      />
                    ))}
                  </div>
                </div>
              ))}
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
              {education.map(({ institute, courses }) => (
                <div className="timeline__item">
                  <h3 className="institute">{institute}</h3>
                  <div className="group">
                    {courses.map((course) => (
                      <Course
                        course={course}
                        isOpened={isOpenedEducation}
                        setIsOpened={setIsOpenedEducation}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </Section>
  );
};

export default About;

const StyledRoles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
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
  &:last-child::before {
    height: 0;
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
  & .designation {
    position: relative;
    & span.indicator {
      position: absolute;
      top: 50%;
      right: 0.5rem;
      transform: translateY(-50%);
      font-size: 1.25rem;
      transition: 0.15s;
      &[data-rotate="true"] {
        transform: translateY(-50%) rotate(45deg);
      }
    }
  }
  & .description {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.15s;
    &[aria-hidden="false"] {
      grid-template-rows: 1fr;
    }
    & ul {
      overflow: hidden;
      padding-left: 1.5rem;
      & li {
        margin-top: 0.5rem;
        &:first-child {
          margin-top: 0;
        }
        &.skills {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-left: -1.25rem;
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

const Roles = ({
  role: { id, designation, description, skills },
  isOpened,
  setIsOpened,
}: {
  role: {
    id: number;
    designation: { title: string; duration: string };
    description: string[];
    skills: string[];
  };
  isOpened: number | null;
  setIsOpened: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <StyledRoles
      className="group__item"
      onClick={() => setIsOpened((prev) => (prev === id ? null : id))}
    >
      <div className="designation">
        <h4>
          {designation.title.length > 25
            ? designation.title.slice(0, 25) + "..."
            : designation.title}
        </h4>
        <p>
          {designation.duration.length > 25
            ? designation.duration.slice(0, 25) + "..."
            : designation.duration}
        </p>
        <span className="indicator" data-rotate={isOpened === id}>
          <AiOutlinePlus />
        </span>
      </div>
      <div className="description" aria-hidden={isOpened !== id}>
        <ul>
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
          <li className="skills">
            {skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </li>
        </ul>
      </div>
    </StyledRoles>
  );
};

const StyledCourse = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
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
  &:last-child::before {
    height: 0;
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
  & .course {
    position: relative;
    & span.indicator {
      position: absolute;
      top: 50%;
      right: 0.5rem;
      transform: translateY(-50%);
      font-size: 1.25rem;
      transition: 0.15s;
      &[data-rotate="true"] {
        transform: translateY(-50%) rotate(45deg);
      }
    }
  }
  & .description {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.15s;
    &[aria-hidden="false"] {
      grid-template-rows: 1fr;
    }
    & ul {
      overflow: hidden;
      padding-left: 1.5rem;
      & li {
        margin-top: 0.5rem;
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
`;

const Course = ({
  course: { id, course, duration, description },
  isOpened,
  setIsOpened,
}: {
  course: {
    id: number;
    course: string;
    duration: string;
    description: string[];
  };
  isOpened: number | null;
  setIsOpened: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <StyledCourse
      className="group__item"
      onClick={() => setIsOpened((prev) => (prev === id ? null : id))}
    >
      <div className="course">
        <h4>{course}</h4>
        <span>{duration}</span>
        <span className="indicator" data-rotate={isOpened === id}>
          <AiOutlinePlus />
        </span>
      </div>
      <div className="description" aria-hidden={isOpened !== id}>
        <ul>
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </StyledCourse>
  );
};

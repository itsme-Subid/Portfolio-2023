import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 0;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
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
      color: rgb(var(--dark-color), 0.8);
    }
    & .timeline {
      position: relative;
      margin-left: auto;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      width: 95%;
      &::before {
        content: "";
        position: absolute;
        height: calc(100% - 0.75rem);
        top: 0.5rem;
        width: 1px;
        background-color: rgb(var(--dark-color), 0.2);
        left: -2.5%;
        transform: translateX(-50%);
      }
      & .timeline__item {
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 0.5rem;
        &::before {
          content: "";
          position: absolute;
          height: 0.75rem;
          width: 0.75rem;
          border-radius: 50%;
          top: 0.5rem;
          background-color: rgb(var(--tertiary-color));
          left: -2.5%;
          transform: translateX(-50%);
        }
        & :where(.designation, .course) {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 1rem;
          color: rgb(var(--dark-color), 0.75);
          & h3 {
            font-size: 1.25rem;
            font-weight: 600;
            text-align: left;
          }
          & span {
            font-size: 1rem;
            font-weight: 400;
            text-align: left;
          }
        }
        & p.limit-line-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        & .skills {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          & span {
            padding: 0.5rem 1.25rem;
            font-size: 0.75rem;
            font-weight: 600;
            text-align: center;
            border-radius: 5rem;
            color: rgb(var(--dark-color), 0.8);
            border: 1px solid rgb(var(--secondary-color));
            transition: 0.15s;
            letter-spacing: 1px;
            cursor: pointer;
            &:hover {
              background-color: rgb(var(--secondary-color));
              color: rgb(var(--light-color));
            }
          }
        }
      }
    }
  }
`;

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

  return (
    <Section className="container">
      <div className="experience">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline__item">
            <div className="designation">
              <h3>Tech Lead</h3>
              <span>(02/2023-Present)</span>
            </div>
            <p className="limit-line-1">
              As a Frontend Team Leader Intern and Full Stack Developer Intern,
              I am leading the frontend team and working with tech stacks like
              React.js, Material UI, and Node.js. My responsibilities include
              mentoring team members, managing tasks, and ensuring the timely
              delivery of projects. I am also involved in the development of
              full-stack applications using the MERN stack.
            </p>
            <div className="skills">
              {skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="timeline__item">
            <div className="designation">
              <h3>Full Stack Developer</h3>
              <span>(01/2023-Present)</span>
            </div>
            <p>
              As a Frontend Team Leader Intern and Full Stack Developer Intern,
              I am leading the frontend team and working with tech stacks like
              React.js, Material UI, and Node.js. My responsibilities include
              mentoring team members, managing tasks, and ensuring the timely
              delivery of projects. I am also involved in the development of
              full-stack applications using the MERN stack.
            </p>
            <div className="skills">
              {skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="education">
        <h2>Education</h2>
        <div className="timeline">
          <div className="timeline__item">
            <div className="course">
              <h3>Frontend Team Leader</h3>
              <span>(02/2023-Present)</span>
            </div>
            <p>
              As a Frontend Team Leader Intern and Full Stack Developer Intern,
              I am leading the frontend team and working with tech stacks like
              React.js, Material UI, and Node.js. My responsibilities include
              mentoring team members, managing tasks, and ensuring the timely
              delivery of projects. I am also involved in the development of
              full-stack applications using the MERN stack.
            </p>
          </div>
          <div className="timeline__item">
            <div className="course">
              <h3>Full Stack Developer</h3>
              <span>(01/2023-Present)</span>
            </div>
            <p>
              As a Frontend Team Leader Intern and Full Stack Developer Intern,
              I am leading the frontend team and working with tech stacks like
              React.js, Material UI, and Node.js. My responsibilities include
              mentoring team members, managing tasks, and ensuring the timely
              delivery of projects. I am also involved in the development of
              full-stack applications using the MERN stack.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;

import { ReactNode } from "react";
import styled from "styled-components";
import thumbnail from "/img/layout.jpg";

const LayoutContainer = styled.div`
  min-height: 80vh;
  display: grid;
  place-items: center;
  @media screen and (max-width: 50rem) {
    min-height: 90vh;
  }
  & > div {
    margin-inline: auto;
    width: clamp(100%, 80%, 80rem);
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(var(--secondary-color), 0.25);
    border-radius: 1rem;
    overflow: hidden;
    grid-template-columns: 1fr;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    @media screen and (min-width: 50rem) {
      display: grid;
      place-content: center;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "a" "b";
    }
  }
`;

const Thumbnail = styled.div`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  background: no-repeat center center/cover;
  background-image: linear-gradient(
      -45deg,
      rgb(var(--dark-color), 0.375),
      rgb(var(--dark-color), 0.8)
    ),
    url(${thumbnail});
  @media screen and (max-width: 50rem) {
    padding-top: 6rem;
  }
  & > h1 {
    font-size: 3.5rem;
    font-weight: 600;
    @media screen and (max-width: 50rem) {
      font-size: 2.5rem;
    }
  }
  & .description p {
    text-align: justify;
    color: rgb(var(--light-color), 0.75);
    font-size: 0.8rem;
  }
  & .ifExist {
    margin-top: 1rem;
  }
`;

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <LayoutContainer className="container">
      <div>
        <Thumbnail>
          <h1>DEVSUBID.</h1>
          <div className="description">
            <p>
              👋 Hello World! I'm a Full-Stack Developer with a passion for
              creating intuitive user interfaces. With years of experience
              working with the Next.js & MERN Stack, including TypeScript, I
              have a deep understanding of how to create scalable and performant
              web applications.
            </p>
          </div>
        </Thumbnail>
        {children}
      </div>
    </LayoutContainer>
  );
};

export default Layout;

import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0%, 49%,
  100% {
    transform: scale(0);
  }
  50%, 99% {
    transform: scale(1);
  }
`;

const HeaderStyle = styled.header`
  position: sticky;
  inset: 0 0 auto 0;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(0.25rem);
  z-index: 10;
  & .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    & .links {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      & h1 {
        position: relative;
        font-size: 1.5rem;
        font-weight: 600;
        color: rgb(var(--secondary-color));
        margin-right: 1rem;
        cursor: pointer;
        @media screen and (max-width: 50rem) {
          margin-right: auto;
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0.25rem;
          left: -1rem;
          width: 1rem;
          height: 0.15rem;
          border-radius: 0.25rem;
          background-color: rgb(var(--light-color));
          animation: ${blink} 1s infinite;
        }
      }
      & ul {
        flex: 1;
        display: flex;
        justify-content: center;
        gap: 1rem;
        @media screen and (max-width: 50rem) {
          display: none;
        }
        & li {
          position: relative;
          list-style: none;
          font-weight: 600;
          font-size: small;
          text-transform: uppercase;
          color: rgb(var(--light-color), 0.75);
          cursor: pointer;
          transition: 0.15s;
          &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 0.15rem;
            transform: scaleX(0);
            border-radius: 0.25rem;
            background-color: rgb(var(--primary-color));
            @keyframes animate-links {
              0% {
                transform: scaleX(0);
                transform-origin: left;
              }
              50% {
                transform: scaleX(1);
                transform-origin: left;
              }
              100% {
                transform: scaleX(0);
                transform-origin: right;
              }
            }
          }
          &:hover {
            color: rgb(var(--primary-color));
          }
          &:hover::before {
            animation: animate-links 0.5s ease;
          }
        }
      }
    }
    & .icons {
      display: flex;
      align-items: center;
      & a {
        position: relative;
        font-weight: 600;
        font-size: small;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        color: rgb(var(--dark-color));
        padding: 0.75rem 1.5rem;
        border-radius: 5rem;
        background-color: rgb(var(--primary-color));
        border: 1px solid rgb(var(--light-color), 0.1);
        cursor: pointer;
        overflow: hidden;
        box-shadow: 0 0.15rem 0.5rem rgb(var(--primary-color), 0.25),
          0 0.25rem 1rem rgb(var(--primary-color), 0.1);
        transition: 0.5s;
        &:hover {
          box-shadow: 0 0 0.75rem rgb(var(--primary-color), 0.25);
        }
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 1.5rem;
          height: 100%;
          background-color: rgb(var(--light-color), 0.5);
          transform: skewX(-30deg) translateX(-600%);
          transition: 0.5s;
        }
        &:hover::before {
          transform: skewX(-30deg) translateX(600%);
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <div className="navbar container">
        <div className="links">
          <h1>DEVSUBID</h1>
          <ul>
            <li>
              <Link to="/#home">Home</Link>
            </li>
            <li>
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/#skill">Skill</Link>
            </li>
            <li>
              <Link to="/#work">Work</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="icons">
          <a
            href="./document/resume.pdf"
            title="Hire Now"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Now
          </a>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;

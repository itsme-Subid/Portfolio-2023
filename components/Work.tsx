import Image from "next/image";
import styled from "styled-components";
import news365 from "../public/img/news365.png";
import infotech from "../public/img/infotech.png";
import movie108 from "../public/img/movie108.png";
import webinrush from "../public/img/webinrush.png";
import Carousel from "./Carousel";

const Section = styled.section`
  position: sticky;
  top: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
  color: rgb(var(--light-color));
  &::before {
    content: "works";
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
  & .slide {
    flex: 0 0 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 100%;
    isolation: isolate;
    & img {
      pointer-events: none;
      flex: 0 0 100%;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    & .content {
      position: absolute;
      inset: 0;
      z-index: 1;
      padding: 1rem;
      padding-bottom: 2rem;
      pointer-events: all;
      background: linear-gradient(
        0deg,
        rgba(var(--dark-color), 0.5),
        transparent
      );
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      & h3 {
        text-align: center;
        font-size: 2rem;
        font-weight: 700;
        text-transform: uppercase;
        color: rgb(var(--light-color));
      }
      & p {
        font-weight: 500;
        text-align: center;
        color: rgb(var(--light-color), 0.75);
        margin-inline: auto;
        width: min(90%, 40rem);
      }
      & a {
        font-size: 1.2rem;
        font-weight: 500;
        text-align: center;
        color: rgb(var(--secondary-color));
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.15s;
        &:hover {
          color: rgb(var(--primary-color));
        }
      }
    }
  }
`;

const Work = () => {
  const images = [
    {
      src: webinrush,
      alt: "webinrush",
      title: "WebInRush",
      description:
        "As a full-stack developer intern at WebInRush, I created responsive and dynamic websites using Next.js, TypeScript, and Firebase. I gained valuable experience and skills in web development from working with a talented team.",
      link: "https://webinrush.vercel.app/",
    },
    {
      src: infotech,
      alt: "infotech",
      title: "Infotech Success Point",
      description:
        "I built a website for Infotech Success Point using Next.js, TypeScript, material ui, framer-motion and styled-components. I created a fast, responsive and attractive website that showcases the coaching center’s offerings and achievements.",
      link: "https://infotech-success-point.vercel.app/",
    },
    {
      src: movie108,
      alt: "movie108",
      title: "Movie108",
      description:
        "I built a website for Movie108 using react.js, javaScript, node.js, mongodb, express. I created a fast, responsive and user-friendly website that shows movies online.",
      link: "https://movie108.vercel.app/",
    },
    {
      src: news365,
      alt: "news365",
      title: "News365",
      description:
        "I built a website for news365 using react.js and javaScript. I created a fast, responsive and informative website that delivers the latest news and updates from around the world.",
      link: "https://news365-itsme-subid.vercel.app/",
    },
  ];
  return (
    <Section className="container" id="work">
      <Carousel autoSlide={true}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <Image src={image.src} alt={image.alt} />
            <div className="content">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </Section>
  );
};

export default Work;

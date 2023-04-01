// import Image from "next/image";
import styled from "styled-components";
// import profile from "../public/profile.jpg";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sphere } from "@react-three/drei";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 50rem) {
    flex-direction: column;
    height: 200vh;
    width: 100% !important;
  }
  & .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 50rem) {
      height: 100vh;
      padding: 0 1rem;
    }
    & h2 {
      font-weight: 600;
      color: rgb(var(--dark-color));
      & span {
        font-size: 1.5rem;
        color: rgb(var(--dark-color));
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
      color: rgb(var(--dark-color), 0.8);
      margin-bottom: 1rem;
    }
    & button {
      font-size: 1rem;
      font-weight: 500;
      color: rgb(var(--light-color));
      padding: 0.75rem 1.25rem;
      border-radius: 5rem;
      background-color: rgb(var(--secondary-color));
      border: 1px solid rgb(var(--light-color), 0.1);
      box-shadow: 0 0.25rem 0.5rem rgb(var(--secondary-color), 0.25),
        0 0.35rem 1rem rgb(var(--secondary-color), 0.1);
      width: fit-content;
      cursor: pointer;
      overflow: hidden;
      transition: 0.5s;
      animation: animate-size 0.75s infinite ease alternate;
      @keyframes animate-size {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(1.05);
        }
      }
      &:hover {
        border-color: transparent;
        box-shadow: 0 0 0.75rem rgb(var(--secondary-color), 0.75);
        animation-play-state: paused;
      }
    }
  }
  & .right {
    flex: 1.5;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 50rem) {
      flex: 1;
      height: 100vh;
    }
    & img {
      position: absolute;
      inset: 0;
      margin: auto;
      border-radius: 50%;
      border: 1px solid rgb(var(--dark-color), 0.1);
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
    <Section className="container" id="home">
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
        <Canvas>
          <ambientLight intensity={1} />
          <directionalLight position={[3, 5, 5]} />
          <directionalLight position={[-10, -12, -12]} />
          <OrbitControls enableZoom={false} autoRotate />
          <Sphere args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
              attach="material"
              distort={0.5}
              speed={2}
              color="#0086ff"
            />
          </Sphere>
        </Canvas>
        {/* <Image src={profile} width={500} height={500} alt="" /> */}
      </div>
    </Section>
  );
};

export default Hero;

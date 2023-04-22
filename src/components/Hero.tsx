import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sphere } from "@react-three/drei";

const Section = styled.section`
  min-height: 100vh;
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
    & .scroll {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;
      white-space: nowrap;
      color: rgb(var(--light-color));
      font-size: 1.25rem;
      font-weight: 500;
      margin-block: 0.5rem;
      overflow: hidden;
      & .scroll-containter {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: 100%;
        height: 100%;
        color: rgb(var(--primary-color));
        & .auto-scroll {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 1rem;
          width: 100%;
          height: 100%;
          animation: scroll 3s linear infinite forwards;
          @keyframes scroll {
            0%,
            30% {
              top: 2.9rem;
            }
            33%,
            63% {
              top: 0;
            }
            66%,
            96% {
              top: -2.9rem;
            }
          }
        }
      }
    }
    p {
      font-size: 1.25rem;
      font-weight: 500;
      margin-bottom: 1rem;
      color: rgb(var(--light-color));
    }
    & a {
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
    isolation: isolate;
    @media screen and (max-width: 50rem) {
      flex: 1;
      height: 100vh;
    }
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: rgb(var(--dark-color), 0.5);
      backdrop-filter: blur(0.05rem);
      z-index: 1;
      pointer-events: none;
    }
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      margin: auto;
      width: 100%;
      height: 5%;
      transform: rotate(-30deg);
      background-color: rgb(var(--primary-color), 0.75);
      filter: blur(3rem);
      border-radius: 50%;
      z-index: -1;
      pointer-events: none;
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
        <div className="scroll">
          <div>I&apos;m a</div>
          <div className="scroll-containter">
            <div className="auto-scroll">
              <div className="auto-scroll--item">Student</div>
              <div className="auto-scroll--item">Developer</div>
              <div className="auto-scroll--item">Programmer</div>
            </div>
          </div>
        </div>
        <p>
          I&apos;m a 18 year old developer from India. I love to code and make
          cool stuff.
        </p>
        <a
          href="./document/resume.pdf"
          title="Hire Now"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
      <div className="right">
        <Canvas>
          <directionalLight position={[3, 5, 5]} color="#25d366" />
          <directionalLight
            position={[-10, -12, -12]}
            intensity={0.25}
            color="#25d366"
          />
          <OrbitControls enableZoom={false} autoRotate />
          <Sphere
            args={[1, 100, 200]}
            scale={2}
            key={undefined}
            material={undefined}
            quaternion={undefined}
            attach={undefined}
            onUpdate={undefined}
            clear={undefined}
            position={undefined}
            up={undefined}
            rotation={undefined}
            matrix={undefined}
            layers={undefined}
            dispose={undefined}
            geometry={undefined}
            raycast={undefined}
            id={undefined}
            type={undefined}
            onClick={undefined}
            onContextMenu={undefined}
            onDoubleClick={undefined}
            onPointerDown={undefined}
            onPointerMove={undefined}
            onPointerUp={undefined}
            onPointerCancel={undefined}
            onPointerEnter={undefined}
            onPointerLeave={undefined}
            onPointerOver={undefined}
            onPointerOut={undefined}
            onWheel={undefined}
            onPointerMissed={undefined}
            visible={undefined}
            uuid={undefined}
            name={undefined}
            parent={undefined}
            modelViewMatrix={undefined}
            normalMatrix={undefined}
            matrixWorld={undefined}
            matrixAutoUpdate={undefined}
            matrixWorldAutoUpdate={undefined}
            matrixWorldNeedsUpdate={undefined}
            castShadow={undefined}
            receiveShadow={undefined}
            frustumCulled={undefined}
            renderOrder={undefined}
            animations={undefined}
            userData={undefined}
            customDepthMaterial={undefined}
            customDistanceMaterial={undefined}
            isObject3D={undefined}
            onBeforeRender={undefined}
            onAfterRender={undefined}
            applyMatrix4={undefined}
            applyQuaternion={undefined}
            setRotationFromAxisAngle={undefined}
            setRotationFromEuler={undefined}
            setRotationFromMatrix={undefined}
            setRotationFromQuaternion={undefined}
            rotateOnAxis={undefined}
            rotateOnWorldAxis={undefined}
            rotateX={undefined}
            rotateY={undefined}
            rotateZ={undefined}
            translateOnAxis={undefined}
            translateX={undefined}
            translateY={undefined}
            translateZ={undefined}
            localToWorld={undefined}
            worldToLocal={undefined}
            lookAt={undefined}
            add={undefined}
            remove={undefined}
            removeFromParent={undefined}
            getObjectById={undefined}
            getObjectByName={undefined}
            getObjectByProperty={undefined}
            getObjectsByProperty={undefined}
            getWorldPosition={undefined}
            getWorldQuaternion={undefined}
            getWorldScale={undefined}
            getWorldDirection={undefined}
            traverse={undefined}
            traverseVisible={undefined}
            traverseAncestors={undefined}
            updateMatrix={undefined}
            updateMatrixWorld={undefined}
            updateWorldMatrix={undefined}
            toJSON={undefined}
            clone={undefined}
            copy={undefined}
            addEventListener={undefined}
            hasEventListener={undefined}
            removeEventListener={undefined}
            dispatchEvent={undefined}
            morphTargetInfluences={undefined}
            morphTargetDictionary={undefined}
            isMesh={undefined}
            updateMorphTargets={undefined}
            getVertexPosition={undefined}
          >
            <MeshDistortMaterial
              attach="material"
              distort={0.5}
              speed={2}
              color="#0086ff"
            />
          </Sphere>
        </Canvas>
      </div>
    </Section>
  );
};

export default Hero;

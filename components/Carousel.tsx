import styled from "styled-components";
import { useEffect, useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const CarouselStyled = styled.div<{ currentSlide: number }>`
  position: relative;
  width: 100%;
  height: 60%;
  overflow: hidden;
  & .slides {
    height: 100%;
    width: 100%;
    display: flex;
    transform: translateX(calc(-100% * ${(props) => props.currentSlide}));
    transition: 0.15s;
  }
  & .buttons {
    position: absolute;
    inset: 0;
    opacity: 0;
    visibility: hidden;
    transform: scale(0);
    transition: 0.15s;
    pointer-events: none;
    padding-inline: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    & button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgb(var(--white-color), 0.75);
      box-shadow: 0 0 0 1px rgb(var(--dark-color), 0.1),
        0 1px 2px 0 rgb(var(--dark-color), 0.05);
      border-radius: 50%;
      padding: 1rem;
      width: 3rem;
      height: 3rem;
      transition: 0.15s;
      &:hover {
        background-color: rgb(var(--white-color));
      }
    }
  }
  & .slides:hover + .buttons,
  .slides:focus + .buttons,
  .slides:active + .buttons,
  .slides:focus-within + .buttons,
  .slides + .buttons:hover {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
    pointer-events: all;
  }
  & .indicator-container {
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    & .indicators {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      & .indicator {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: rgb(var(--white-color), 0.75);
        transition: 0.15s;
        &.active {
          width: 0.75rem;
          height: 0.75rem;
          background-color: rgb(var(--white-color));
        }
      }
    }
  }
`;

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 2000,
}: {
  children: React.ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        nextSlide();
      }, autoSlideInterval);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CarouselStyled currentSlide={currentSlide}>
      <div className="slides">{slides}</div>
      <div className="buttons">
        <button onClick={() => previousSlide()}>
          <GrFormPrevious size={"1.5rem"} />
        </button>
        <button onClick={() => nextSlide()}>
          <GrFormNext size={"1.5rem"} />
        </button>
      </div>
      <div className="indicator-container">
        <div className="indicators">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </CarouselStyled>
  );
};

export default Carousel;

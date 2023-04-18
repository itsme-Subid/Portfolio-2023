import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  Marker,
} from "react-simple-maps";
import styled from "styled-components";
import profile from "../public/img/profile.jpeg";

const ComposableMapStyled = styled(ComposableMap)`
  width: 90%;
  height: 90%;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(75%, -50%);
  @media screen and (max-width: 50rem) {
    top: 50%;
    right: 50%;
    transform: translate(20%, -26%) scale(2.5);
  }
`;

const Map = () => {
  return (
    <ComposableMapStyled
      projection="geoMercator"
      projectionConfig={{
        scale: 3000,
        center: [78.9629, 22.5937],
      }}
    >
      <Geographies
        geography="/features.json"
        fill="rgb(var(--primary-color), 0.75)"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Marker coordinates={[80.25, 20.9]}>
        <defs>
          <clipPath id="circle">
            <circle
              cx="50"
              cy="50"
              r="20"
              style={{ transform: "translate(-35px, -20px)" }}
            />
          </clipPath>
        </defs>
        <image
          x="-5"
          y="10"
          width="40"
          height="40"
          xlinkHref={profile.src}
          clip-path="url(#circle)"
        />
        <circle
          cx="50"
          cy="50"
          r="20"
          style={{ transform: "translate(-35px, -20px)" }}
          fill="none"
          stroke="rgb(var(--light-color))"
          stroke-width="1px"
        />
      </Marker>
    </ComposableMapStyled>
  );
};

export default Map;

import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";
import styled from "styled-components";

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
      <Annotation
        subject={[80.67, 20.5]}
        dx={90}
        dy={90}
        connectorProps={{
          stroke: "rgb(var(--light-color))",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text
          x="70"
          y="15"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="rgb(var(--light-color))"
        >
          {"I'm in Kolkata"}
        </text>
      </Annotation>
    </ComposableMapStyled>
  );
};

export default Map;

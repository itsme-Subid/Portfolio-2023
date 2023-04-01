import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 1000,
        center: [78.9629, 22.5937],
      }}
      style={{
        width: "90%",
        height: "90%",
        position: "absolute",
        top: "50%",
        right: "50%",
        transform: "translate(80%, -50%)",
      }}
    >
      <Geographies
        geography="/features.json"
        fill="rgb(var(--secondary-color), 0.75)"
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
        subject={[88.363895, 22]}
        dx={90}
        dy={90}
        connectorProps={{
          stroke: "rgb(var(--tertiary-color))",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text
          x="70"
          y="15"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="rgb(var(--tertiary-color))"
        >
          {"I'm in Kolkata"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;

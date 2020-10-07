import React from "react";
import Marker from "./Marker";

type Props = {
  coords: Array<{ lng: number; lat: number }>;
};

const PathMarker = ({ coords }: Props) => (
  <>
    {coords.map(coords => (
      <Marker coords={coords} />
    ))}
  </>
);

export default PathMarker;

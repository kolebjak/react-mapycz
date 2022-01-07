import React from "react";
import Marker from "./Marker";
import {MarkerCoords} from "./types";

export type PathMarkerProps = {
  coords: MarkerCoords[];
};

const PathMarker = ({ coords }: PathMarkerProps) => (
  <>
    {coords.map(coords => (
      <Marker coords={coords} />
    ))}
  </>
);

export default PathMarker;

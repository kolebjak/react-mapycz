import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SMapProvider from "../src/SMapProvider";
import Section from "./components/Section";
import { getRouteInfo, RouteInfoResultProps } from "../src/helperFunctions";

const SRouteInfo = styled(Section)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const code = `
  const [routeInfo, setRouteInfo] = useState<null | RouteInfoProps>(null);

  const fetchRouteInfo = useCallback(async () => {
    const info = await getRouteInfo([
      { lat: 49.5329453, lng: 18.5110686 },
      { lat: 49.5440406, lng: 18.4509133 },
      { lat: 49.5457367, lng: 18.4479764 },
    ], {
      geometry: true,
      itinerary: true,
      altitude: true,
      criterion: "turist2",
    } as any);
    setRouteInfo(info);
  }, []);

  useEffect(() => {
    fetchRouteInfo();
  }, []);
`;

const coords = [
  { lat: 49.5329453, lng: 18.5110686 },
  { lat: 49.5440406, lng: 18.4509133 },
  { lat: 49.5457367, lng: 18.4479764 },
];

const params = {
  geometry: true,
  itinerary: true,
  altitude: true,
  criterion: "turist2",
};

const RouteInfo = () => {
  const [routeInfo, setRouteInfo] = useState<null | RouteInfoResultProps>(null);

  const fetchRouteInfo = useCallback(async () => {
    const info = await getRouteInfo(coords, params as any);
    setRouteInfo(info);
  }, []);

  useEffect(() => {
    fetchRouteInfo();
  }, []);

  return (
    <SRouteInfo id="section-info">
      <div style={{ width: "40%" }}>
        <SyntaxHighlighter
          language="javascript"
          wrapLongLines={true}
          style={githubGist}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <div style={{ width: "50%" }}>
        <h1>Route info</h1>
        Get basic information about your route.
        <h2>Available data:</h2>
        <p>Id: {routeInfo?.id}</p>
        <p>Descent: {routeInfo?.descent} [m]</p>
        <p>Ascent: {routeInfo?.ascent} [m]</p>
        <p>
          In Europe (not in Czech republic): {routeInfo?.inEurope?.toString()}
        </p>
        <p>Length: {routeInfo?.length} [m]</p>
        <p>Time: {routeInfo?.time} [s]</p>
        <p>URL:</p>{" "}
        <a href={routeInfo?.url} target="_blank" rel="noopener noreferrer">
          {routeInfo?.url}
        </a>
      </div>
    </SRouteInfo>
  );
};

export default SMapProvider(RouteInfo);

import React from 'react';
import styled from "styled-components";
import {Map} from "../src";
import {githubGist} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import Section from "./components/Section";
import ScrollDown from "./components/ScrollDown";

const SMapElement = styled(Section)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const MapElement = () => {
  const code = `
    <Map height="200px" center={{lat: 50.0755, lng: 14.4378}} />
  `
  return (
    <SMapElement id="section-map">
      <div style={{width: '50%'}}>
        <h2>Map</h2>
        <p>Map is a main element of react-mapycz library.</p>
        <p>Available properties:</p>
        <ul>
          <li>center: <i>optional</i> Center coords</li>
          <li>width: <i>optional</i> Element width, defaults to 100%</li>
          <li>height: <i>optional</i> Element height, defaults to 300px</li>
          <li>zoom: <i>optional</i> Default map zoom, defaults to 13</li>
          <li>minZoom: <i>optional</i> Minimal map zoom, defaults to 1</li>
          <li>maxZoom: <i>optional</i> Max map zoom, defaults to 21</li>
          <li>baseLayers: <i>optional</i> Map layers, array of values from <a target="_blank" href="https://github.com/flsy/react-mapycz/blob/master/src/BaseLayers.tsx">BaseLayers</a></li>
        </ul>
      </div>
      <div style={{width: '40%'}}>
        <Map height="300px" center={{lat: 50.0755, lng: 14.4378}} />
        <SyntaxHighlighter
          language="jsx"
          wrapLongLines={true}
          style={githubGist}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <ScrollDown href="#section-element" />
    </SMapElement>
  )
}

export default MapElement;

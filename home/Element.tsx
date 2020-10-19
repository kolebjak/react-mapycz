import React from 'react';
import styled from "styled-components";
import {CompassControl, KeyboardControl, MouseControl, ZoomControl} from "../src/controls";
import {Map, Marker, MarkerLayer} from "../src";
import {githubGist} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import Section from "./components/Section";
import ScrollDown from "./components/ScrollDown";

const SElement = styled(Section)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Element = () => {
  const code = `
    <Map height="200px" center={{lat: 50.0755, lng: 14.4378}}>
      <KeyboardControl/>
      <ZoomControl/>
      <MouseControl zoom={true} pan={true} wheel={true}/>
      <CompassControl right={10} top={50}/>
      <MarkerLayer>
        <Marker coords={{lat: 50.0755, lng: 14.4378}}/>
      </MarkerLayer>
    </Map>
  `

  return (
    <SElement id="section-element">
      <div style={{width: '40%'}}>
        <Map height="200px" center={{lat: 50.0755, lng: 14.4378}}>
          <KeyboardControl/>
          <ZoomControl/>
          <MouseControl zoom={true} pan={true} wheel={true}/>
          <CompassControl right={10} top={50}/>
          <MarkerLayer>
            <Marker coords={{lat: 50.0755, lng: 14.4378}}/>
          </MarkerLayer>
        </Map>
        <SyntaxHighlighter
          language="jsx"
          wrapLongLines={true}
          style={githubGist}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <div style={{width: '50%'}}>
        <h2>Elements</h2>
        <p>Various elements is ready to use. It's up to you how you combine it.</p>
        <p>
          <strong>Controls</strong>
          <ul>
            <li>KeyboardControl</li>
            <li>MouseControl</li>
            <li>CompassControl</li>
            <li>ZoomControl</li>
          </ul>
        </p>
        <p>
          <strong>Marks</strong>
          <ul>
            <li>Marker</li>
            <li>Path</li>
          </ul>
        </p>
      </div>
      <ScrollDown href="#section-dynamic" />
    </SElement>
  )
}

export default Element;
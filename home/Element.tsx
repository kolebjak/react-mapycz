import React from 'react';
import styled from "styled-components";
import {CompassControl, KeyboardControl, MouseControl, ZoomControl} from "../src/controls";
import {Map, Marker, MarkerLayer} from "../src";
import {githubGist} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import Section from "./components/Section";
import ScrollDown from "./components/ScrollDown";
import { MarkerProps } from '../src/Marker'

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
        <Marker coords={{lat: 50.0755, lng: 14.4378}} card={markerCard}/>
      </MarkerLayer>
    </Map>
  `

  const markerCard: MarkerProps['card'] = {
    header: ({ lat, lng }) => <strong>Card header {lat} {lng}</strong>,
    body:  ({ lat, lng }) => <><p>Card body {lat} {lng}</p><img src='https://via.placeholder.com/150x60/454545/eb4034'/></>,
    footer: "Card footer",
    options: {
      width: 200,
      height: 200,
    }
  }

  return (
    <SElement id="section-element">
      <div style={{width: '40%'}}>
        <Map height="300px" center={{lat: 50.0755, lng: 14.4378}}>
          <KeyboardControl/>
          <ZoomControl/>
          <MouseControl zoom={true} pan={true} wheel={true}/>
          <CompassControl right={10} top={50}/>
          <MarkerLayer>
            <Marker coords={{lat: 50.0755, lng: 14.4378}} card={markerCard} />
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

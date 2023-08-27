import React from 'react';
import styled from "styled-components";
import {
  CompassControl,
  KeyboardControl,
  LayoutControl,
  MouseControl,
  SyncControl,
  ZoomControl,
} from '../src/controls'
import { BaseLayers, Map, Marker, MarkerLayer } from '../src'
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
      <SyncControl />
      <LayoutControl layers={[BaseLayers.HISTORIC, BaseLayers.SMART_BASE, BaseLayers.GEOGRAPHY]} top={10} left={10} />
      <MarkerLayer>
        <Marker coords={{lat: 50.0755, lng: 14.4378}} card={markerCard}/>
      </MarkerLayer>
    </Map>
  `

  const markerCard = {
    header: "<strong>Card header</strong>",
    body: "<p>Card body</p><img src='https://via.placeholder.com/150x60/454545/eb4034'/>",
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
          <SyncControl />
          <LayoutControl layers={[BaseLayers.HISTORIC, BaseLayers.SMART_BASE, BaseLayers.GEOGRAPHY]} top={10} left={10} />
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
        <p>Various elements are ready to use. It's up to you how you combine them.</p>
        <div>
          <strong>Controls</strong>
          <ul>
            <li><a href="https://github.com/flsy/react-mapycz#keyboard-control" target="_blank" title="Keyboard control readme">KeyboardControl</a></li>
            <li><a href="https://github.com/flsy/react-mapycz#mouse-control" target="_blank" title="Mouse control readme">MouseControl</a></li>
            <li><a href="https://github.com/flsy/react-mapycz#compass-control" target="_blank" title="Compass control readme">CompassControl</a></li>
            <li>ZoomControl</li>
            <li><a href="https://github.com/flsy/react-mapycz#sync-control" target="_blank" title="Sync control readme">SyncControl</a></li>
          </ul>
        </div>
        <div>
          <strong>Marks</strong>
          <ul>
            <li><a href="https://github.com/flsy/react-mapycz#markers" target="_blank" title="Marker readme">Marker</a></li>
            <li><a href="https://github.com/flsy/react-mapycz#path" target="_blank" title="Path readme">Path</a></li>
            <li><a href="https://github.com/flsy/react-mapycz#poi-layer" target="_blank" title="POI readme">POI</a></li>
          </ul>
        </div>
      </div>
      <ScrollDown href="#section-dynamic" />
    </SElement>
  )
}

export default Element;

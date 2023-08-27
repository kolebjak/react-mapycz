import React from 'react';
import styled from "styled-components";
import {CompassControl, KeyboardControl, MouseControl, SyncControl, ZoomControl} from "../src/controls";
import {Map, Marker, MarkerLayer} from "../src";
import {githubGist} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import Section from "./components/Section";

const SElement = styled(Section)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Clustering = () => {
  const code = `
    <Map height="200px" center={{lat: 50.0755, lng: 14.4378}}>
      <KeyboardControl/>
      <ZoomControl/>
      <MouseControl zoom={true} pan={true} wheel={true}/>
      <CompassControl right={10} top={50}/>
      <SyncControl />
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
        <Map height="600px" center={{lat: 50.0755, lng: 14.4378}}>
          <KeyboardControl/>
          <ZoomControl/>
          <MouseControl zoom={true} pan={true} wheel={true}/>
          <CompassControl right={10} top={50}/>
          <SyncControl />
          <MarkerLayer enableClustering={true}>
            <Marker coords={{lat: 50.0755, lng: 14.4378}} card={markerCard} />
            <Marker coords={{lat: 50.0760, lng: 14.4378}} card={markerCard} />
            <Marker coords={{lat: 50.0960, lng: 14.4378}} card={markerCard} />
            <Marker coords={{lat: 50.1, lng: 14.4378}} card={markerCard} />
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

    </SElement>
  )
}

export default Clustering;

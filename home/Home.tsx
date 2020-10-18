import React from 'react';
import {githubGist} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import styled from "styled-components";
import {CompassControl, KeyboardControl, Map, Marker, MarkerLayer, MouseControl, ZoomControl} from "../src";

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

const SHome = styled.div`
  min-height: 100vh;
  background-color: #eee;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Home = () => {
  return (
    <SHome>
      <div style={{width: '40%'}}>
        <h1>react-mapycz</h1>
        <p>Easy-to-use integration of Mapy.cz API into React.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius diam sed sem placerat, et maximus
          dui tincidunt. Vestibulum luctus urna lobortis ante imperdiet, vitae consequat magna maximus.
        </p>
      </div>
      <div style={{ width: '40%' }}>
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
    </SHome>
  )
}

export default Home;
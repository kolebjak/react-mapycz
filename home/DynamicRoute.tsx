import React from 'react';
import styled from "styled-components";
import {Map, Path, PathLayer} from "../src";
import {githubGist} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import Section from "./components/Section";

const SDynamicRoute = styled(Section)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const DynamicRoute = () => {
  const code = `
    <Map height="200px" center={{lat: 49.536, lng: 18.499}} zoom={12}>
      <PathLayer>
        <Path
          coords={[
            { 'lat': 49.5329453, 'lng': 18.5110686 },
            { 'lat': 49.5440406, 'lng': 18.4509133 },
            { 'lat': 49.5457367, 'lng': 18.4479764 }
          ]}
          criterion="fast"
          dynamicRoute={true}
        />
      </PathLayer>
    </Map>
  `

  return (
    <SDynamicRoute>
      <div style={{width: '40%'}}>
        <SyntaxHighlighter
          language="jsx"
          wrapLongLines={true}
          style={githubGist}
        >
          {code}
        </SyntaxHighlighter>
        <Map height="200px" center={{lat: 49.536, lng: 18.499}} zoom={12}>
          <PathLayer>
            <Path
              coords={[
                {'lat': 49.5329453, 'lng': 18.5110686},
                {'lat': 49.5440406, 'lng': 18.4509133},
                {'lat': 49.5457367, 'lng': 18.4479764}
              ]}
              criterion="fast"
              dynamicRoute={true}
            />
          </PathLayer>
        </Map>
      </div>
      <div style={{width: '50%'}}>
        <h2>Dynamic routes</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius diam sed sem placerat, et maximus
          dui tincidunt. Vestibulum luctus urna lobortis ante imperdiet, vitae consequat magna maximus.</p>
      </div>
    </SDynamicRoute>
  )
}

export default DynamicRoute;
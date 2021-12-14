import React from 'react';
import styled from "styled-components";
import {Coordinates, Map, MapEvent, MouseControl, PathLayer, Polygon, LineStyle} from "../src";
import {githubGist} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import Section from "./components/Section";
import ScrollDown from './components/ScrollDown'

const SPolygons = styled(Section)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Polygons = () => {

  const code = `
    <Map height="200px" center={{lat: 49.536, lng: 18.499}} zoom={12}>
      <PathLayer>
        <Polygon
          id="test_123"
          coords={[
            {'lat': 49.8085347, 'lng': 13.9619694},
            {'lat': 49.7628714, 'lng': 14.0017947},
            {'lat': 49.7004722, 'lng': 13.9310167},
            {'lat': 49.6825242, 'lng': 13.9839419},
            {'lat': 49.6118331, 'lng': 13.8816319},
            {'lat': 49.6274028, 'lng': 13.6976108},
          ]}
          options={{
            width: 10,
            color: "red",
            outlineColor: "blue",
            opacity: 0.5,
            outlineStyle: LineStyle.dashDot,
          }}
        />
      </PathLayer>
    </Map>
  `
  const onPolygonClicked = (e: MapEvent, coordinates: Coordinates) => { 
    console.log(`Polygon ${e.target._id} clicked`, coordinates)
  }

  return (
    <SPolygons id="section-polygons">
      <div style={{width: '40%'}}>
        <Map height="300px" center={{lat: 49.7040667, lng: 13.8301333}} zoom={10} onEvent={onPolygonClicked} eventNameListener="geometry-click">
          <MouseControl zoom={true} pan={true} wheel={true}/>
          <PathLayer>
            <Polygon
              id="test_123"
              coords={[
                {'lat': 49.8085347, 'lng': 13.9619694},
                {'lat': 49.7628714, 'lng': 14.0017947},
                {'lat': 49.7004722, 'lng': 13.9310167},
                {'lat': 49.6825242, 'lng': 13.9839419},
                {'lat': 49.6118331, 'lng': 13.8816319},
                {'lat': 49.6274028, 'lng': 13.6976108},
              ]}
              options={{
                width: 10,
                color: "red",
                outlineColor: "blue",
                opacity: 0.5,
                outlineStyle: LineStyle.dashDot,
              }}
            />
          </PathLayer>
        </Map>
        <SyntaxHighlighter
          language="jsx"
          wrapLongLines={true}
          style={githubGist}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <div style={{ width: '50%' }}>
        <h2>Polygons</h2>
        <p>Show polygons in the map with customizable styles.</p>
        <p>Clicking to polygons can be captured by listening on geometry-click event and identified by id prop.</p>
      </div>
      <ScrollDown href="#section-info" />
    </SPolygons>
  )
}

export default Polygons;

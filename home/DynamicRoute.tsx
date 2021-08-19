import React, {useState} from 'react';
import styled from "styled-components";
import {Map, Path, PathLayer} from "../src";
import {githubGist} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import Section from "./components/Section";
import {Radio, RadioGroup} from "./components/Radio";
import ScrollDown from './components/ScrollDown'

const SDynamicRoute = styled(Section)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const DynamicRoute = () => {
  const [criterion, setCriterion] = useState<string>('fast');

  const code = `
    <Map height="200px" center={{lat: 49.536, lng: 18.499}} zoom={12}>
      <PathLayer>
        <Path
          coords={[
            { 'lat': 49.5329453, 'lng': 18.5110686 },
            { 'lat': 49.5440406, 'lng': 18.4509133 },
            { 'lat': 49.5457367, 'lng': 18.4479764 }
          ]}
          criterion="${criterion}"
          dynamicRoute={true}
        />
      </PathLayer>
    </Map>
  `

  return (
    <SDynamicRoute id="section-dynamic">
      <div style={{ width: '50%' }}>
        <h2>Dynamic routes</h2>
        <p>Don't worry about route computations. Just mark your path as "dynamicRoute" and select desired criterion.</p>
        <strong>Available criterions:</strong>
        <RadioGroup onClickRadioButton={setCriterion} selectedValue={criterion}>
          <Radio value="fast" labelText="fast" />
          <Radio value="short" labelText="short" />
          <Radio value="bike1" labelText="bike1" />
          <Radio value="bike2" labelText="bike2" />
          <Radio value="bike3" labelText="bike3" />
          <Radio value="turist1" labelText="turist1" />
          <Radio value="turist2" labelText="turist2" />
        </RadioGroup>
      </div>
      <div style={{width: '40%'}}>
        <Map height="200px" center={{lat: 49.536, lng: 18.499}} zoom={12}>
          <PathLayer>
            <Path
              coords={[
                {'lat': 49.5329453, 'lng': 18.5110686},
                {'lat': 49.5440406, 'lng': 18.4509133},
                {'lat': 49.5457367, 'lng': 18.4479764}
              ]}
              criterion={criterion as any}
              dynamicRoute={true}
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
      <ScrollDown href="#section-info" />
    </SDynamicRoute>
  )
}

export default DynamicRoute;

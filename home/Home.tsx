import React from 'react';
import {githubGist} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import styled from "styled-components";
import {Map} from "../src";
import Section from "./components/Section";
import GitHubButton from 'react-github-btn';
import ScrollDown from "./components/ScrollDown";

const code = `
  <Map height="200px" center={{lat: 50.0755, lng: 14.4378}} />
`

const SHome = styled(Section)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Home = () => {
  return (
    <SHome>
      <div style={{width: '40%'}}>
        <h1>react-mapycz</h1>
        <p>Easy-to-use integration of Mapy.cz into React using Mapy.cz API.</p>
        <GitHubButton href="https://github.com/flsy/react-mapycz" data-icon="octicon-star" data-size="large" data-show-count={true} aria-label="Star flsy/react-mapycz on GitHub">Star</GitHubButton>
      </div>
      <div style={{ width: '40%' }}>
        <Map height="200px" center={{lat: 50.0755, lng: 14.4378}} />
        <SyntaxHighlighter
          language="jsx"
          wrapLongLines={true}
          style={githubGist}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <ScrollDown href="#section-element" />
    </SHome>
  )
}

export default Home;
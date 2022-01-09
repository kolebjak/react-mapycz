import React from 'react';
import {githubGist} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import styled from "styled-components";
import {Map} from "../src";
import Section from "./components/Section";
import GitHubButton from 'react-github-btn';
import ScrollDown from "./components/ScrollDown";

const code = `
  <Map height="200px" />
`

const SHome = styled(Section)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SGettingStarted = styled.div`
  margin-top: 1em;
`

const Home = () => {
  return (
    <SHome>
      <div style={{width: '40%'}}>
        <h1>react-mapycz</h1>
        <p>Easy-to-use integration of Mapy.cz into React using Mapy.cz API.</p>
        <GitHubButton href="https://github.com/flsy/react-mapycz" data-icon="octicon-star" data-size="large" data-show-count={true} aria-label="Star flsy/react-mapycz on GitHub">Star</GitHubButton>
        <SGettingStarted>
          <strong>Getting started</strong>
          <p>Install library and peer dependencies</p>
          <SyntaxHighlighter language="bash" style={githubGist}>
            npm i react-mapycz react-dom@16.13.1 react@16.13.1
          </SyntaxHighlighter>
          <p>or</p>
          <SyntaxHighlighter language="bash" style={githubGist}>
            yarn add react-mapycz react-dom@16.13.1 react@16.13.1
          </SyntaxHighlighter>
        </SGettingStarted>
      </div>
      <div style={{ width: '40%' }}>
        <Map height="200px" />
        <SyntaxHighlighter
          language="jsx"
          wrapLongLines={true}
          style={githubGist}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <ScrollDown href="#section-map" />
    </SHome>
  )
}

export default Home;

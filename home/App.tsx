import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Box from './components/Box'
import styled from 'styled-components'
import GitHubButton from 'react-github-btn'
import BashSyntaxHighlighter from './components/BashSyntaxHighlighter'
// import Home from "./Home";
// import DynamicRoute from "./DynamicRoute";
// import Polygons from "./Polygons";
// import Element from "./Element";
// import RouteInfo from './RouteInfo'
// import MapElement from './MapElement'

declare global {
  interface Window {
    SMap: any;
  }
}


const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
`

const Header = styled.div`
  padding: 40px;
  text-align: center;
`

const Content = styled.div`
  display: flex;
  flex-flow: column;
  row-gap: 40px;
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Title>react-mapycz</Title>
        <p>Easy-to-use integration of Mapy.cz into React using Mapy.cz API.</p>
        <GitHubButton href="https://github.com/flsy/react-mapycz" data-icon="octicon-star" data-size="large" data-show-count={true} aria-label="Star flsy/react-mapycz on GitHub">Star</GitHubButton>
      </Header>
      <Content>
        <Box
          title="Installation"
          buttonLabel="Getting started"
          content={<>
            <div>Install library and peer dependencies</div>
            <BashSyntaxHighlighter>npm i react-mapycz react-dom@16.13.1 react@16.13.1</BashSyntaxHighlighter>
            <p>or</p>
            <BashSyntaxHighlighter>yarn add react-mapycz react-dom@16.13.1 react@16.13.1</BashSyntaxHighlighter>
          </>}
        />

        <Box
          title="Getting started"
          buttonLabel="Controls"
          content={<>
            <p>Map is a main element of react-mapycz library.</p>
            <p>Available properties:</p>
            <ul>
              <li>center: <i>optional</i> Center coords</li>
              <li>width: <i>optional</i> Element width, defaults to 100%</li>
              <li>height: <i>optional</i> Element height, defaults to 300px</li>
              <li>zoom: <i>optional</i> Default map zoom, defaults to 13</li>
              <li>minZoom: <i>optional</i> Minimal map zoom, defaults to 1</li>
              <li>maxZoom: <i>optional</i> Max map zoom, defaults to 21</li>
              <li>baseLayers: <i>optional</i> Map layers, array of values from <a target="_blank" href="https://github.com/flsy/react-mapycz/blob/master/src/BaseLayers.tsx">BaseLayers</a></li>
            </ul>
          </>}
        />
      </Content>
      {/*<Home />*/}
      {/*<MapElement />*/}
      {/*<Element />*/}
      {/*<DynamicRoute />*/}
      {/*<Polygons />*/}
      {/*<RouteInfo />*/}
    </>
  )
}

export default App;

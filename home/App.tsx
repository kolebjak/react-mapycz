import './assets/main.css';

import React from 'react';
import Box from './components/Box'
import GitHubButton from 'react-github-btn'
import BashSyntaxHighlighter from './components/BashSyntaxHighlighter'
import { CustomMap } from './components/CustomMap'
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

//
// const Title = styled.div`
//   font-size: 40px;
//   font-weight: 700;
//   text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// `
//
// const Header = styled.div`
//   padding: 40px;
//   text-align: center;
// `

// const Content = styled.div`
//   display: flex;
//   flex-flow: column;
//   row-gap: 40px;
// `

const App = () => {
  return (
    <>
      <div className="p-10 text-center">
        <div className="font-bold text-2xl">react-mapycz</div>
        <p className="p-1">Easy to use integration of Mapy.cz into React using Mapy.cz API.</p>
        <GitHubButton href="https://github.com/flsy/react-mapycz" data-icon="octicon-star" data-size="large" data-show-count={true} aria-label="Star flsy/react-mapycz on GitHub">Star</GitHubButton>
      </div>
      <div className="flex flex-col gap-y-5 px-5 lg:px-10 xl:px-20 items-center">
        <Box
          title="Installation"
          buttonLabel="Getting started"
          description={<>
            <div className="py-2">Install library and peer dependencies. Both React and React-DOM versions are restricted to <span className="font-semibold">{'>'}=16.13.1</span> so feel free to choose any version that fits this range and your needs.</div>
            <p className="py-1">NPM:</p>
            <BashSyntaxHighlighter>npm i react-mapycz react-dom@16.13.1 react@16.13.1</BashSyntaxHighlighter>
            <p className="py-1">Yarn:</p>
            <BashSyntaxHighlighter>yarn add react-mapycz react-dom@16.13.1 react@16.13.1</BashSyntaxHighlighter>
          </>}
        />

        <Box
          title="Getting started"
          buttonLabel="Controls"
          map={<CustomMap />}
          description={<>
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
      </div>
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

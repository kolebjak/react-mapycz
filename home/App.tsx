import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Home from "./Home";
import DynamicRoute from "./DynamicRoute";
import Polygons from "./Polygons";
import Element from "./Element";
import RouteInfo from './RouteInfo'
import MapElement from './MapElement'
import Clustering from './Clustering'

declare global {
  interface Window {
    SMap: any;
  }
}

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
      <MapElement />
      <Element />
      <DynamicRoute />
      <Polygons />
      <RouteInfo />
      <Clustering />
    </>
  )
}

export default App;

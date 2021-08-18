import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Home from "./Home";
import DynamicRoute from "./DynamicRoute";
import Element from "./Element";
import RouteInfo from './RouteInfo'

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
      <Element />
      <DynamicRoute />
      <RouteInfo />
    </>
  )
}

export default App;

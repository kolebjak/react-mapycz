import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Home from "./Home";
import DynamicRoute from "./DynamicRoute";

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
      <DynamicRoute />
    </>
  )
}

export default App;
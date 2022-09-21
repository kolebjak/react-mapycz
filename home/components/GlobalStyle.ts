import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #f6f6f6;
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Lato', sans-serif;
    color: #1D1D1D;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyle;

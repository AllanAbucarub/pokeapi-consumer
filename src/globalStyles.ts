import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    outline: 0;
    font-size: 16px;
    scroll-behavior: smooth; 
  }

  html, body, #root {
    height: 100%;
    width: 100vw;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #312E38;
    font-family: 'Roboto Slab', serif;
    color: #fff;
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyle

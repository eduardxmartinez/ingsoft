import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0;}
  button:hover,a{
    cursor:pointer;
  }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    background: white;
    height: 100vh;
    margin: 0 auto;
    overscroll-behavior: none;
    width: 100%;
  }

  #root {
    box-shadow: 0 0 10px #3f3f3f;
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }
`
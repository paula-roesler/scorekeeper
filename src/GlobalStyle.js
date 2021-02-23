import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  body {
    padding: 0 10px;
    margin: 0 auto;
    font-size: 112.5%;
    font-family: sans-serif;
    max-width: 414px;
  }
  
  input,
  button {
    font-size: inherit;
    padding: 5px;
  }
`

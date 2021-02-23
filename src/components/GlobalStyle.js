import { createGlobalStyles } from 'styled-components'

export default createGlobalStyles`
* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-size: 112.5%;
    font-family: sans-serif;
  }
  
  input,
  button {
    font-size: inherit;
    padding: 5px;
  }
`

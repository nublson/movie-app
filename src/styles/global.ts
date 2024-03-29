import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font: 400 1.6rem 'Roboto', sans-serif;;
    background-color: #fff;
    color: #000;
  }
`;

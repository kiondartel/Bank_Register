import { createGlobalStyle } from "styled-components";
import background from "../image/santander.jpg";
const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Helvetica", sans-serif;
  }

  body {
    background-image: url(${background});
  background-position: center center;
  background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
  }
`;

export default Global;

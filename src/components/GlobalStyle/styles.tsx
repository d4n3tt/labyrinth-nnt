import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  /* Font weight Regular(400), Bold(700), Extra Bold(800), Light(300) 지원 */
  /* @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
  * {
    font-family: 'NanumSquare', sans-serif;
    font-display: 'block';
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;  
  } */
  
  html {
    font-size: 10px;
    height: 100%;
  }

  body {
    font-family: 'NanumSquare', sans-serif;
    height: 100%;
    margin : 0;
  }
`;

export default GlobalStyles;

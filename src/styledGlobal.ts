import { createGlobalStyle } from 'styled-components';
import { colors } from './constants';
import transformObjectIntoCssVariables from './helpers/transformObjectIntoCssVariables';

const GlobalStyles = createGlobalStyle`
  :root {
    ${transformObjectIntoCssVariables(colors)}
  }
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    @media screen and (max-width:1800px) {
      font-size: 17px;
    }
    @media screen and (max-width:1700px) {
      font-size: 16px;
    }
    @media screen and (max-width:1550px) {
      font-size: 15px;
    }
    @media screen and (max-width:1400px) {
      font-size: 13px;
    }
    @media screen and (max-width:1300px) {
      font-size: 12px;
    }
    @media screen and (max-width:600px) {
      font-size: 14px;
    }
  }
  img {
    max-width: 100%;
  }
  a {
    color: unset;
    text-decoration: none;
  }

* {
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
  }

  *::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

export default GlobalStyles;

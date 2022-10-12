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
    @media screen and (max-width:1200px) {
      font-size: 15px;
    }
    @media screen and (max-width:900px) {
      font-size: 14px;
    }
    @media screen and (max-width:600px) {
      font-size: 12px;
    }
  }
`;

export default GlobalStyles;

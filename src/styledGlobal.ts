import { createGlobalStyle } from 'styled-components';
import { colors } from './constants';
import transformObjectIntoCssVariables from './helpers/transformObjectIntoCssVariables';

const GlobalStyles = createGlobalStyle`
  :root {
    ${transformObjectIntoCssVariables(colors)}
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyles;

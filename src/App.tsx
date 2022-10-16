import { FC } from 'react';
import 'normalize.css';
import Home from 'pages/home';
import { StyledEngineProvider } from '@mui/material';
import MuiThemeProvider from 'context/muiThemeProvider';
import GlobalStyles from './styledGlobal';

const App: FC = () => (
  <MuiThemeProvider>
    <StyledEngineProvider injectFirst>
      <GlobalStyles />
      <Home />
    </StyledEngineProvider>
  </MuiThemeProvider>
);

export default App;

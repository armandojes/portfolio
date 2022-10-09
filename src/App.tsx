import { FC } from 'react';
import 'normalize.css';
import Home from 'pages/home';
import { StyledEngineProvider } from '@mui/material';
import GlobalStyles from './styledGlobal';

const App: FC = () => (
  <StyledEngineProvider injectFirst>
    <GlobalStyles />
    <Home />
  </StyledEngineProvider>
);

export default App;

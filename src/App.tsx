import { FC } from 'react';
import 'normalize.css';
import Home from 'pages/home';
import { StyledEngineProvider } from '@mui/material';
import MuiThemeProvider from 'context/muiThemeProvider';
import { Route, Routes } from 'react-router-dom';
import ProjectDetail from 'pages/projectDetail';
import GlobalStyles from './styledGlobal';

const App: FC = () => (
  <MuiThemeProvider>
    <StyledEngineProvider injectFirst>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-detail/:projectId" element={<ProjectDetail />} />
      </Routes>
    </StyledEngineProvider>
  </MuiThemeProvider>
);

export default App;

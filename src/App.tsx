import { FC } from 'react';
import 'normalize.css';
import Home from 'pages/home';
import { StyledEngineProvider } from '@mui/material';
import MuiThemeProvider from 'context/muiThemeProvider';
import { Route, Routes } from 'react-router-dom';
import ProjectDetail from 'pages/projectDetail';
import { ModalPictureProvider } from 'context/modalPicture';
import ScrollHandler from 'components/scrollHandler';
import GlobalStyles from './styledGlobal';

const App: FC = () => (
  <>
    <GlobalStyles />
    <MuiThemeProvider>
      <StyledEngineProvider injectFirst>
        <ModalPictureProvider>
          <ScrollHandler />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project-detail/:projectId" element={<ProjectDetail />} />
          </Routes>
        </ModalPictureProvider>
      </StyledEngineProvider>
    </MuiThemeProvider>
  </>
);

export default App;

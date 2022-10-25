import { FC } from 'react';
import 'normalize.css';
import Home from 'pages/home';
import { StyledEngineProvider } from '@mui/material';
import MuiThemeProvider from 'context/muiThemeProvider';
import { Route, Routes } from 'react-router-dom';
import ProjectDetail from 'pages/projectDetail';
import ScrollHandler from 'components/scrollHandler';
import { ModalPictureProvider } from 'context/modalPicture';
import GlobalStyles from './styledGlobal';

const App: FC = () => (
  <>
    <GlobalStyles />
    <ScrollHandler />
    <MuiThemeProvider>
      <StyledEngineProvider injectFirst>
        <ModalPictureProvider>
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

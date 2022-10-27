import { FC } from 'react';
import 'normalize.css';
import Home from 'pages/home';
import { StyledEngineProvider } from '@mui/material';
import MuiThemeProvider from 'context/muiThemeProvider';
import { Route, Routes } from 'react-router-dom';
import ProjectDetail from 'pages/projectDetail';
import { ModalPictureProvider } from 'context/modalPicture';
import ScrollHandler from 'components/scrollHandler';
import Header from 'components/header';
import Footer from 'components/footer';
import GlobalStyles from './styledGlobal';

const App: FC = () => (
  <>
    <GlobalStyles />
    <MuiThemeProvider>
      <StyledEngineProvider injectFirst>
        <ModalPictureProvider>
          <ScrollHandler />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project-detail/:projectId" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </ModalPictureProvider>
      </StyledEngineProvider>
    </MuiThemeProvider>
  </>
);

export default App;

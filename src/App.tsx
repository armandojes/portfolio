import { FC } from 'react';
import 'normalize.css';
import Container from './components/container';
import Header from './components/header';
import GlobalStyles from './styledGlobal';

const App: FC = () => (
  <>
    <GlobalStyles />
    <Header />
    <Container>Hello react</Container>
  </>
);

export default App;

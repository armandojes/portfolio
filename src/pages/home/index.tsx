import Header from 'components/header';
import { FC } from 'react';
import styled from 'styled-components';
import Certificates from 'pages/home/components/certificates';
import Skills from './components/skills';
import Contact from './components/contact';
import Experience from './components/experience';
import Cover from './components/cover';
import About from './components/about';

const FullWrapper = styled.section`
  background-color: var(--greey);
  min-height: 100vh;
`;

const Home: FC = () => (
  <FullWrapper>
    <Header />
    <Cover />
    <About />
    <Skills />
    <Experience />
    <Certificates />
    <Contact />
  </FullWrapper>
);

export default Home;

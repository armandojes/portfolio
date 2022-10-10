import Header from 'components/header';
import { FC } from 'react';
import styled from 'styled-components';
import Certificates from 'pages/home/components/certificates';

const FullWrapper = styled.section`
  background-color: var(--greey);
  min-height: 100vh;
`;

const Home: FC = () => (
  <FullWrapper>
    <Header />
    <Certificates />
  </FullWrapper>
);

export default Home;

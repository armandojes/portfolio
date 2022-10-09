import Header from 'components/header';
import { Box } from '@mui/material';
import { FC } from 'react';
import styled from 'styled-components';

const FullWrapper = styled.section`
  background-color: var(--greey);
  min-height: 100vh;
`;

const Home: FC = () => (
  <FullWrapper>
    <Header />
    <Box>hellp</Box>
  </FullWrapper>
);

export default Home;

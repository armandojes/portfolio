import { Box } from '@mui/material';
import Container from 'layout/container';
import Text from 'layout/text';
import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #282e3e;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer: FC = () => (
  <Wrapper>
    <Container verticalPadding="1.5em">
      <Flex>
        <Text>Developed by Armando de jesus</Text>
        <Box padding="0em 1em" color="var(--white)">|</Box>
        <a href="https://github.com/armandojes/portfolio" target="_blank" rel="noreferrer">
          <Text>
            Github
          </Text>
        </a>
      </Flex>
    </Container>
  </Wrapper>
);

export default Footer;

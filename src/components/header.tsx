import { FC } from 'react';
import styled from 'styled-components';
import Container from './container';

const HeaderWrapper = styled.header`
  background-color: var(--greey);
`;

const HeaderInner = styled.div`
 height: 4em;
 display: flex;
 justify-content: left;
 align-items: center;
`;

const Header: FC = () => (
  <HeaderWrapper>
    <Container horizontalPadding="0em">
      <HeaderInner>
        hello
      </HeaderInner>
    </Container>
  </HeaderWrapper>
);

export default Header;

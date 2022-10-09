import { Typography, Container, ButtonBase } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import { FC } from 'react';
import styled from 'styled-components';
import menuItems from './menuItems';

const HeaderInner = styled.div`
 height: 4em;
 display: flex;
 justify-content: left;
 align-items: center;
 color: #fff;
`;

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--greey);
  box-shadow: 0px 0px 10px 5px rgb(0 0 0 / 10%);
`;

const Link = styled(HashLink)`
  color: #fff;
  text-decoration: none;
`;

const Button = styled(ButtonBase)`
  padding: .2em 1em;
  display: block;
  border-radius: .5em;
`;

const Header: FC = () => (
  <>
    <Wrapper>
      <Container>
        <HeaderInner>
          {menuItems.map((item) => (
            <Link smooth to={item.path}>
              <Button>
                <Typography>{item.label}</Typography>
              </Button>
            </Link>
          ))}
        </HeaderInner>
      </Container>
    </Wrapper>

    { /**  Only for shadow  */ }
    <HeaderInner />
  </>
);

export default Header;

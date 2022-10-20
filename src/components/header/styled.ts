import { Code, Menu } from '@mui/icons-material';
import { ButtonBase } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

export const HeaderInner = styled.div`
 height: 4em;
 display: flex;
 justify-content: left;
 align-items: center;
 color: #fff;
`;

export const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--greey);
  box-shadow: 0px 0px 10px 5px rgb(0 0 0 / 10%);
  z-index: 10;
`;

export const Link = styled(HashLink)`
  color: #fff;
  text-decoration: none;
`;

export const Button = styled(ButtonBase)`
  padding: .2em 1em;
  display: block;
  border-radius: .5em;
  display: flex;
`;

export const SwipeableBody = styled.div`
  background-color: var(--blackligth);
  height: 100vh;
  width: 70vw;
  box-sizing: border-box;
  padding: 2em;
  padding-top: 5em;
`;

export const CodeIconLink = styled(Code)`
  color: var(--green);
  margin-right: .5em;
`;

export const MenuIcon = styled(Menu)`
  color: var(--white);
  margin-right: .5em;
`;

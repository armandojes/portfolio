import { ButtonBase } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 3em 0em;
  flex-wrap: nowrap;
  text-align: right;
  @media screen and (max-width:600px) {
    flex-wrap: wrap;
    text-align: left;
    background-color: var(--blackligth);
  }
`;

export const Picture = styled.img`
  width: 55%;
  margin-right: 1em;
  z-index: 0;
  object-fit: cover;
  @media screen and (max-width:600px) {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  flex-grow: 1;
  z-index: 1;
  overflow: visible;
  @media screen and (max-width:600px) {
    padding: 1em;
  }
`;

export const BlackBox = styled.div`
  box-sizing: border-box;
  background-color: var(--blackligth);
  padding: 1em;
  width: 125%;
  box-sizing: border-box;
  margin: 1em 0em;
  margin-left: -25%;
  @media screen and (max-width:600px) {
    width: 100%;
    margin: 0px;
    padding: 1em 0em;
  }
`;

export const Button = styled(ButtonBase)`
  color: var(--green);
  border: 1px solid var(--green);
  font-size: .9em;
  padding: .4em 1.5em;
  border-radius: .5em;
`;

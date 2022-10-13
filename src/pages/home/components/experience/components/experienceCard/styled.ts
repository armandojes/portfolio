import { ButtonBase } from '@mui/material';
import Text from 'layout/text';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 3em 0em;
`;

export const Picture = styled.img`
  width: 55%;
  margin-right: 1em;
  z-index: 0;
`;

export const TextWrapper = styled.div`
  flex-grow: 1;
  text-align: right;
  z-index: 1;
  overflow: visible;
`;

export const DescriptionWrapper = styled(Text)`
  background-color: var(--blackligth);
  padding: 1em;
  width: 125%;
  box-sizing: border-box;
  margin: 1em 0em;
  margin-left: -25%;
`;

export const Button = styled(ButtonBase)`
  color: var(--green);
  border: 1px solid var(--green);
  font-size: .9em;
  padding: .4em 1.5em;
  border-radius: .5em;
`;

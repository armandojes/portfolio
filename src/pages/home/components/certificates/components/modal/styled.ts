import { IconButton, Modal } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 45%;
  outline: none;
  position: relative;
  @media screen and (max-width:1400px) {
    width: 60%;
  }
  @media screen and (max-width:900px) {
    width: 70%;
  }
  @media screen and (max-width:500px) {
    width: 90%;
  }
`;

export const Picture = styled.img`
  width: 100%;
`;

export const ModalStyled = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconButtonStyled = styled(IconButton)`
  padding: .5em;
  position: absolute;
  z-index: 2;
  right: .5em;
  top: .5em;
  font-size: 1em;
  svg {
    color: var(--black);
    font-size: 2em;
  }
`;

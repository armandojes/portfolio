import { Close } from '@mui/icons-material';
import { createContext, FC, ReactNode, useContext, useMemo, useState } from 'react';
import { IconButton, Modal } from '@mui/material';
import styled from 'styled-components';

export interface ModalPictureContext {
  openModal: (image: string) => void,
  closeModal: () => void,
}

export const context = createContext<ModalPictureContext>({
  openModal: () => {},
  closeModal: () => {},
});

export const useModalPicture = () => useContext(context);

const Wrapper = styled.div`
  width: 50%;
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

const Picture = styled.img`
  width: 100%;
`;

const ModalStyled = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconButtonStyled = styled(IconButton)`
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

export const ModalPictureProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [picture, setPicture] = useState<string | null>(null);

  const handleClose = () => setPicture(null);
  const handleOpen = (image: string) => setPicture(image);

  const contextValue = useMemo(() => ({
    openModal: handleOpen,
    closeModal: handleClose,
  }), []);

  return (
    <context.Provider value={contextValue}>
      <>
        <ModalStyled open={!!picture} onClose={handleClose}>
          <Wrapper>
            <IconButtonStyled onClick={handleClose}>
              <Close />
            </IconButtonStyled>
            <Picture src={picture || ''} alt="Certificate armando de jesus santiz lopez" />
          </Wrapper>
        </ModalStyled>
        {children}
      </>
    </context.Provider>
  );
};

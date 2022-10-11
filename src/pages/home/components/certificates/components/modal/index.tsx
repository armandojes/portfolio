import { Close } from '@mui/icons-material';
import { FC } from 'react';
import { IconButtonStyled, Picture, ModalStyled, Wrapper } from './styled';

export interface Props {
  picture?: string
  onClose?: () => void,
}

const ModalCertificate: FC<Props> = ({ picture, onClose }) => (
  <ModalStyled open={!!picture} onClose={onClose}>
    <Wrapper>
      <IconButtonStyled onClick={onClose}>
        <Close />
      </IconButtonStyled>
      <Picture src={picture} alt="Certificate armando de jesus santiz lopez" />
    </Wrapper>
  </ModalStyled>
);

export default ModalCertificate;

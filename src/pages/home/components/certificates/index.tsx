import { FC } from 'react';
import { Box } from '@mui/material';
import Container from 'layout/container';
import { useModalPicture } from 'context/modalPicture';
import CertificateItem from './components/item';
import certificatesList from './data';
import { FlexContainer, FlexItemWrapper } from './styled';
import SectionTitle from '../sectionTitle';

const Certificates: FC = () => {
  const { openModal } = useModalPicture();

  return (
    <Container id="certificates">
      <Box padding="1em 0em">
        <SectionTitle title="Certificates" />
        <FlexContainer>
          {certificatesList.map((item) => (
            <FlexItemWrapper key={item.label}>
              <CertificateItem
                icon={item.icon}
                title={item.label}
                onClick={() => openModal(item.certificate)}
              />
            </FlexItemWrapper>
          ))}
        </FlexContainer>
      </Box>
    </Container>
  );
};

export default Certificates;

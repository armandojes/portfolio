import { FC, useState } from 'react';
import { Container, Box } from '@mui/material';
import CertificateItem from './components/item';
import certificatesList from './data';
import ModalCertificate from './components/modal';
import { FlexContainer, FlexItemWrapper } from './styled';
import SectionTitle from '../sectionTitle';

const Certificates: FC = () => {
  const [certificate, setCertificate] = useState<undefined | string>();
  const handleOpenertificate = (certificateUrl: string) => setCertificate(certificateUrl);
  const handleCloseCertificate = () => setCertificate(undefined);

  return (
    <>
      <ModalCertificate picture={certificate} onClose={handleCloseCertificate} />
      <Container>
        <Box padding="1em 0em">
          <SectionTitle title="Certificates" />
          <FlexContainer>
            {certificatesList.map((item) => (
              <FlexItemWrapper key={item.label}>
                <CertificateItem
                  icon={item.icon}
                  title={item.label}
                  onClick={() => handleOpenertificate(item.certificate)}
                />
              </FlexItemWrapper>
            ))}
          </FlexContainer>

        </Box>
      </Container>
    </>
  );
};

export default Certificates;

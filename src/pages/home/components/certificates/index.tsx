import { FC } from 'react';
import { Container, Box } from '@mui/material';
import Text from 'layout/text';
import FlexContainer from 'layout/flexContainer';
import CertificateItem from './components/item';

const Certificates: FC = () => (
  <Container>
    <Box padding="1em 0em">

      <Box padding="1em 0em">
        <Text align="center" variant="titleSection">Certificates</Text>
      </Box>

      <FlexContainer>
        <CertificateItem />
      </FlexContainer>

    </Box>
  </Container>
);

export default Certificates;

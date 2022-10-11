import { FC } from 'react';
import { Container, Box } from '@mui/material';
import Text from 'layout/text';
import styled from 'styled-components';
import CertificateItem from './components/item';
import certificatesList from './data';

const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
`;

const FlexItemWrapper = styled.div`
  width: 33.3%;
  padding: .8em;
  box-sizing: border-box;
  @media screen and (max-width: 600px) {
    width: 50%;
    padding: .5em;
  }
`;

const Certificates: FC = () => (
  <Container>
    <Box padding="1em 0em">

      <Box padding="1em 0em">
        <Text align="center" variant="titleSection">Certificates</Text>
      </Box>

      <FlexContainer>
        {certificatesList.map((item) => (
          <FlexItemWrapper key={item.label}>
            <CertificateItem icon={item.picture} title={item.label} />
          </FlexItemWrapper>
        ))}
      </FlexContainer>

    </Box>
  </Container>
);

export default Certificates;

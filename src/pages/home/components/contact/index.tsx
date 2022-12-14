import { Box } from '@mui/material';
import { FC } from 'react';
import Lottie from 'react-lottie-player';
import Text from 'layout/text';
import githubSrc from 'assets/icons/github.png';
import facebookSrc from 'assets/icons/facebook.png';
import twitterSrc from 'assets/icons/twitter.png';
import whatsappSrc from 'assets/icons/whatsapp.png';
import emailSrc from 'assets/icons/email.png';

import Container from 'layout/container';
import SectionTitle from '../sectionTitle';
import { DataWrapper, FlexWrapper, ImageWrapper, Row, RowPicture } from './styled';
import animationSrc from './animation.json';

const Contact: FC = () => (
  <Container id="contact">
    <SectionTitle title="Contact" />
    <Box>
      <FlexWrapper>
        <ImageWrapper id={Date.now().toString()}>
          <Lottie animationData={animationSrc} play loop />
        </ImageWrapper>
        <DataWrapper>
          <Text color="var(--green)" size="1.2em" bold>
            Let&#39;s develop something amazing together
          </Text>
          <Box marginTop="2em" display="flex" flexDirection="column" alignItems="flex-start">
            <Row href="https://github.com/armandojes" target="_blank">
              <RowPicture src={githubSrc} />
              <Text>Guthub</Text>
            </Row>
            <Row href="https://www.facebook.com/Capitanntripa/" target="_blank">
              <RowPicture src={facebookSrc} />
              <Text>Facebook</Text>
            </Row>
            <Row href="https://twitter.com/capitanntripa" target="_blank">
              <RowPicture src={twitterSrc} />
              <Text>Twitter</Text>
            </Row>
            <Row href="https://wa.me/+5219671388451" target="_blank">
              <RowPicture src={whatsappSrc} />
              <Text>+52 9671388451</Text>
            </Row>
            <Row href="mailto:armandodejesus678@gmail.com">
              <RowPicture src={emailSrc} />
              <Text>armandodejesus678@gmail.com</Text>
            </Row>
          </Box>
        </DataWrapper>
      </FlexWrapper>
    </Box>
  </Container>
);

export default Contact;

import { FC } from 'react';
import Text from 'layout/text';
import { Box } from '@mui/material';
import Lottie from 'react-lottie-player';
import { PictureWrapper, Section, TextContainer } from './styled';
import backendSrc from './backend.json';
import frontendSrc from './frontend.json';
import reactSrc from './react.json';

const Description: FC = () => (
  <div>
    <Section reverseWrapMobile>
      <PictureWrapper style={{ transform: 'scale(1.3)' }}>
        <Lottie animationData={backendSrc} play loop />
      </PictureWrapper>
      <TextContainer>
        <Text color="var(--blue)" size="1.2em" bold marginBottom=".4em">Backend developer</Text>
        <Text>
          I have over 3+ years of experience developing backend applications with NodeJS such as API rest, GraphQL interfaces, database design and security.
        </Text>
      </TextContainer>
    </Section>

    <Section>
      <TextContainer>
        <Text color="var(--blue)" size="1.2em" bold marginBottom=".4em">Frontend developer</Text>
        <Text>
          I have more than 5 years of experience working directly on the Front-end side with ReactJS and its entire ecosystem like Redux, React-router, webpack, Jest and more...
        </Text>
        <Box paddingTop="1em" />
      </TextContainer>
      <PictureWrapper as="div">
        <Lottie animationData={frontendSrc} play loop />
      </PictureWrapper>
    </Section>

    <Section reverseWrapMobile>
      <PictureWrapper style={{ transform: 'scale(0.6)' }}>
        <Lottie animationData={reactSrc} play loop />
      </PictureWrapper>
      <TextContainer>
        <Text color="var(--blue)" size="1.2em" bold marginBottom=".4em">React Expert</Text>
        <Text marginBottom="1em">
          I am a ReactJS lover, I started experimenting with ReactJS since its release, my last 5 years as a Front-end developer has been with ReactJS.
        </Text>
        <Text>
          I have worked with advanced concepts such as serverSideRender, preRender, I have developed two libraries for reactJs available in NPM.
        </Text>
      </TextContainer>
    </Section>
  </div>
);

export default Description;

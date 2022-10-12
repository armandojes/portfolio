import { FC } from 'react';
import nodeSrc from 'assets/nodejs.png';
import graphql from 'assets/graphql.png';
import Text from 'layout/text';
import { Box } from '@mui/material';
import Lottie from 'react-lottie';
import { PictureWrapper, Picture, Section, TextContainer } from './styled';
import testSrc from './test.json';
import test2Src from './test2.json';

const Description: FC = () => (
  <div>
    <Section reverseWrapMobile>
      <PictureWrapper style={{ transform: 'scale(1.3)' }}>
        <Lottie options={{ animationData: testSrc }} />
      </PictureWrapper>
      <TextContainer>
        <Text color="var(--blue)" size="1.2em" bold marginBottom=".4em">Backend developer</Text>
        <Text>
          Design and development of any Backend application, API REST services, scalable and custom business logic, server deployments and domain management.
        </Text>
      </TextContainer>
    </Section>

    <Section>
      <TextContainer>
        <Text color="var(--blue)" size="1.2em" bold marginBottom=".4em">Frontend developer</Text>
        <Text>
          Design, layout and development of interactive and responsive Frontend applications.
        </Text>
        <Box paddingTop="1em" />
        <Text>
          Agile development based on components, integration of render on the server side and on the client side (isomorphic APPS) with the latest technology such as React, redux and Vue.
        </Text>
      </TextContainer>
      <PictureWrapper as="div">
        <Lottie options={{ animationData: test2Src }} />
      </PictureWrapper>
    </Section>

    <Section reverseWrapMobile>
      <PictureWrapper>
        <Picture src={nodeSrc} style={{ mixBlendMode: 'lighten' }} />
      </PictureWrapper>
      <TextContainer>
        <Text color="var(--blue)" size="1.2em" bold marginBottom=".4em">Node js</Text>
        <Text>
          Development of efficient applications with server-side JavaScript using nodeJS as the execution engine, Rest communication interfaces, GraphQL and real-time applications with socket.
        </Text>
      </TextContainer>
    </Section>

    <Section>
      <TextContainer>
        <Text color="var(--blue)" size="1.2em" bold marginBottom=".4em">GraphQL</Text>
        <Text>
          Agile and dynamic application development with GraphQL communication interfaces, API without versions, structured, simple and descriptive query language.
        </Text>
        <Box paddingTop="1em" />
        <Text>
          Efficient communication between multiple mobile devices, web applications, native desktop applications and more...
        </Text>
      </TextContainer>
      <PictureWrapper>
        <Picture src={graphql} />
      </PictureWrapper>
    </Section>
  </div>
);

export default Description;

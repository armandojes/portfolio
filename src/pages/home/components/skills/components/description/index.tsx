import { FC } from 'react';
import backendSrc from 'assets/backend.png';
import frontendSrc from 'assets/frontend.png';
import nodeSrc from 'assets/nodejs.png';
import graphql from 'assets/graphql.png';
import Text from 'layout/text';
import { Box } from '@mui/material';
import { Picture, PictureNodeBlendMode, Section, TextContainer } from './styled';

const Description: FC = () => (
  <div>
    <Section reverseWrapMobile>
      <Picture src={backendSrc} />
      <TextContainer>
        <Text color="var(--green)" size="1.2em" bold marginBottom=".4em">Backend developer</Text>
        <Text>
          Design and development of any Backend application, API REST services, scalable and custom business logic, server deployments and domain management.
        </Text>
      </TextContainer>
    </Section>

    <Section>
      <TextContainer>
        <Text color="var(--green)" size="1.2em" bold marginBottom=".4em">Frontend developer</Text>
        <Text>
          Design, layout and development of interactive and responsive Frontend applications.
        </Text>
        <Box paddingTop="1em" />
        <Text>
          Agile development based on components, integration of render on the server side and on the client side (isomorphic APPS) with the latest technology such as React, redux and Vue.
        </Text>
      </TextContainer>
      <Picture src={frontendSrc} />
    </Section>

    <Section reverseWrapMobile>
      <PictureNodeBlendMode src={nodeSrc} />
      <TextContainer>
        <Text color="var(--green)" size="1.2em" bold marginBottom=".4em">Node js</Text>
        <Text>
          Development of efficient applications with server-side JavaScript using nodeJS as the execution engine, Rest communication interfaces, GraphQL and real-time applications with socket.
        </Text>
      </TextContainer>
    </Section>

    <Section>
      <TextContainer>
        <Text color="var(--green)" size="1.2em" bold marginBottom=".4em">GraphQL</Text>
        <Text>
          Agile and dynamic application development with GraphQL communication interfaces, API without versions, structured, simple and descriptive query language.
        </Text>
        <Box paddingTop="1em" />
        <Text>
          Efficient communication between multiple mobile devices, web applications, native desktop applications and more...
        </Text>
      </TextContainer>
      <Picture src={graphql} />
    </Section>
  </div>
);

export default Description;
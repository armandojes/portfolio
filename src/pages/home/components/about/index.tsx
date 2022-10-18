import Container from 'layout/container';
import Text from 'layout/text';
import { FC } from 'react';
import styled from 'styled-components';
import backgroundSrc from 'assets/about_cover.png';

const Wrapper = styled.div`
  background-color: var(--blackligth);
  padding: 8em 0em;
  background-image: url(${backgroundSrc});
  background-size: cover;
  background-blend-mode: multiply;
  background-attachment: fixed;
`;

const TextLimiter = styled.div`
  max-width: 70%;
  @media screen and (max-width:600px) {
    max-width: 90%;
    margin: auto;
  };
`;

const About: FC = () => (
  <Wrapper>
    <Container>
      <TextLimiter>
        <Text marginBottom="1em" size="1.3em" bold>Nice to meet you</Text>
        <Text marginBottom="1.5em">My name is Armando De Jesús, I am currently 23 years old and I am from San Cristóbal de las Casas, Chiapas - Mexico.</Text>
        <Text marginBottom="1.5em">I am a lover of codes and the technological world, so much so that writing code has become one of my favorite hobbies along with sports and video games.</Text>
        <Text marginBottom="1.5em">Since I was a child I have always been impressed by the internet, and I asked myself how does this work? How can I create impressive things like these? My great curiosity has led me to master several programming languages, to master software architectures, programming paradigms, Frameworks and libraries.</Text>
        <Text marginBottom="1.5em">I like difficult challenges, if you have one I would like to be part of it.</Text>
      </TextLimiter>
    </Container>
  </Wrapper>
);

export default About;

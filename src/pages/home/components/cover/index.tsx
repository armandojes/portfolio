import useBreakpoints from 'hooks/useBreakpoints';
import { FC, useEffect } from 'react';
import Typed from 'typed.js';
import coverSrc from 'assets/armando_cover.png';
import coverMSrc from 'assets/armando_cover_m.png';
import { Background, Container, TypedWrapper } from './styled';

const Cover: FC = () => {
  const breakpoints = useBreakpoints();
  const currentBackground = breakpoints({ xs: coverMSrc, sm: coverSrc });

  const typedElements = [
    'Hello, I am Armando de Jesus,<br />Front-end developer.',
    'Hello, I am Armando de Jesus,<br />Back-end developer.',
    'Hello, I am Armando de Jesus,<br />Full-Stack developer.',
    'Hello, I am Armando de Jesus,<br />Passionate programmer and code lover.',
  ];

  useEffect(() => {
    const typed = new Typed('#typed-wrapper', {
      strings: typedElements,
      typeSpeed: 30,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <Background backgroundUrl={currentBackground}>
      <Container>
        <TypedWrapper>
          <span id="typed-wrapper" />
        </TypedWrapper>
      </Container>
    </Background>
  );
};

export default Cover;

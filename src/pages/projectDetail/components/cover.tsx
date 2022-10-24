import { FC } from 'react';
import styled from 'styled-components';
import Text from 'layout/text';
import { Box, ButtonBase } from '@mui/material';
import isTheLastElement from 'helpers/isTheLastElement';

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3em;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  width: 55%;
  @media screen and (max-width:900px) {
    width: 47%;
  }
  @media screen and (max-width:600px) {
    width: 100%;
    margin-bottom: 2em;
  }
`;

const DataContainer = styled.div`
  width: 40%;
  @media screen and (max-width:900px) {
    width: 47%;
  }
  @media screen and (max-width:600px) {
    width: 100%;
    text-align: center;
  }
`;

const Picture = styled.img`
  display: block;
  width: 100%;
  @media screen and (max-width:600px) {
    max-width: 300px;
    margin: auto;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  padding-top: 2em;
  @media screen and (max-width:600px) {
    justify-content: center;
  }
`;

const Button = styled(ButtonBase)`
  padding: .8em 1em;
  background-color: #282e3e;
  min-width: 8em;
  border-radius: .4em;
  color: #fff;
  font-size: .85em;
  @media screen and (max-width:600px) {
    font-size: 1em;
  }
`;

export interface CoverProps {
  picture: string;
  title: string,
  url: string
  github?: string | null,
  description: Array<string>
}

const Cover: FC<CoverProps> = ({ description, picture, title, url, github }) => (
  <FlexContainer>
    <ImageContainer>
      <Picture src={picture} alt="witideal" />
    </ImageContainer>
    <DataContainer>
      <Text size="1.2em" bold marginBottom="1em">{title}</Text>
      {description.map((paragraph, paragraphIndex) => (
        <Text marginBottom={isTheLastElement(description, paragraph) ? '0em' : '1em'} key={paragraphIndex}>
          {paragraph}
        </Text>
      ))}
      <ButtonsContainer>
        <a href={url}>
          <Button>Sitio web</Button>
        </a>
        {!!github && (
          <>
            <Box paddingRight="1em" />
            <a href={github}>
              <Button>Github</Button>
            </a>
          </>
        )}
      </ButtonsContainer>
    </DataContainer>
  </FlexContainer>
);

export default Cover;

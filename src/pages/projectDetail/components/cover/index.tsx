import { FC } from 'react';
import styled from 'styled-components';
import coverSrc from 'assets/projects/witideal_cover.png';
import Text from 'layout/text';
import { Box, ButtonBase } from '@mui/material';

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3em;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  width: 60%;
  @media screen and (max-width:900px) {
    width: 47%;
  }
  @media screen and (max-width:600px) {
    width: 100%;
    margin-bottom: 2em;
  }
`;

const DataContainer = styled.div`
  width: 35%;
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

const Cover: FC = () => (
  <FlexContainer>
    <ImageContainer>
      <Picture src={coverSrc} alt="witideal" />
    </ImageContainer>
    <DataContainer>
      <Text size="1.2em" bold marginBottom="1em">Witideal - Real estate portal</Text>
      <Text marginBottom="1em">
        Digital real estate platform that connects people who want to buy or rent a house with people who want to rent or sell a house
      </Text>
      <Text>
        Anyone can post property for selling or renting and anyone can search properties for renting or buying
      </Text>
      <ButtonsContainer>
        <a href="/">
          <Button>Sitio web</Button>
        </a>
        <Box paddingRight="1em" />
        <a href="/">
          <Button>Github</Button>
        </a>
      </ButtonsContainer>
    </DataContainer>
  </FlexContainer>
);

export default Cover;

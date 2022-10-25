import { useModalPicture } from 'context/modalPicture';
import Text from 'layout/text';
import { FC } from 'react';
import styled from 'styled-components';
import DividerWithTitle from './dividerWithTitle';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em 2em;
  @media screen and (max-width:700px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
  }
  @media screen and (max-width:400px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1em;
    padding: 2em;
  }
`;

const Card = styled.div``;

const CardPicture = styled.img`
  border-radius: .5em;
  transition: all 200ms;
  cursor: pointer;
  :hover {
    box-shadow: rgb(40 46 62) 5px 5px 15px;
    transform: scale(1.03);
  }
`;

export interface ScreenshotsProps {
  screenshots: Array<{
    label: string,
    picture: string,
  }>
}

const Screenshots: FC<ScreenshotsProps> = ({ screenshots }) => {
  const { openModal } = useModalPicture();

  return (
    <div>
      <DividerWithTitle content="Screenshots" />
      <Grid>
        {screenshots.map((screenshot) => (
          <Card key={screenshot.picture} onClick={() => openModal(screenshot.picture)}>
            <Text marginBottom=".2em">{screenshot.label}</Text>
            <CardPicture src={screenshot.picture} alt={screenshot.label} />
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default Screenshots;

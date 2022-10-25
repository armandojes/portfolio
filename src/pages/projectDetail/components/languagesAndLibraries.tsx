import { FC } from 'react';
import styled from 'styled-components';
import Text from 'layout/text';
import DividerWithTitle from './dividerWithTitle';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1em;
  column-gap: 1em;
  margin-top: 2em;
  @media screen and (max-width:600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  background: #282e3e;
  padding: .9em;
  border-radius: .5em;
  display: flex;
  align-items: center;
`;

const CardIcon = styled.img`
  width: 2.5em;
  margin-right: .5em;
`;

const CardLabel = styled(Text)`
  font-size: 1.1em;
  line-height: 1.1em;
  @media screen and (max-width:600px) {
    font-size: 1em;
  }
`;

export interface LanguagesAndLibrariesProps {
  libraries: Array<{
    label: string,
    icon: string,
  }>
}

const LanguagesAndLibraries: FC<LanguagesAndLibrariesProps> = ({ libraries }) => (
  <>
    <DividerWithTitle content="Languages and libraries" />
    <GridWrapper>
      {libraries.map((library, index) => (
        <Card key={index}>
          <CardIcon src={library.icon} />
          <CardLabel>{library.label}</CardLabel>
        </Card>
      ))}
    </GridWrapper>
  </>
);

export default LanguagesAndLibraries;

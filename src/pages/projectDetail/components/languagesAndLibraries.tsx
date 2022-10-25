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
`;

const Card = styled.div`
  background: #282e3e;
  padding: .6em;
  border-radius: .5em;
  display: flex;
  align-items: center;
`;

const CardIcon = styled.img`
  width: 2.5em;
  margin-right: .5em;
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
          <Text size="1.1em">{library.label}</Text>
        </Card>
      ))}
    </GridWrapper>
  </>
);

export default LanguagesAndLibraries;

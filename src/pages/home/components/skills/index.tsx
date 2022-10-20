import Container from 'layout/container';
import { FC } from 'react';
import SectionTitle from '../sectionTitle';
import Description from './components/description';
import Grid from './components/grid';

const Skills: FC = () => (
  <Container id="skills">
    <SectionTitle title="Skills" />
    <Description />
    <Grid />
  </Container>
);

export default Skills;

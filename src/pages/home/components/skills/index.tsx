import { Container } from '@mui/material';
import { FC } from 'react';
import SectionTitle from '../sectionTitle';
import Description from './components/description';
import Grid from './components/grid';

const Skills: FC = () => (
  <Container>
    <SectionTitle title="Skills" />
    <Description />
    <Grid />
  </Container>
);

export default Skills;
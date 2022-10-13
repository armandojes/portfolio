import { Box } from '@mui/material';
import Container from 'layout/container';
import { FC } from 'react';
import SectionTitle from '../sectionTitle';
import ExperienceCard from './components/experienceCard';

const Projects: FC = () => (
  <Container>
    <SectionTitle title="Experience" />
    <Box>
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
    </Box>
  </Container>
);

export default Projects;

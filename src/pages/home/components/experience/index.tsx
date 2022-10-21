import { Box } from '@mui/material';
import Container from 'layout/container';
import { FC } from 'react';
import SectionTitle from '../sectionTitle';
import ExperienceCard from './components/experienceCard';
import projects from './projects';

const Projects: FC = () => (
  <Container id="experience">
    <SectionTitle title="Experience" />
    <Box>
      {projects.map((project) => (
        <ExperienceCard description={project.description} title={project.title} mainPicture={project.mainPicture} key={project.title} />
      ))}
    </Box>
  </Container>
);

export default Projects;

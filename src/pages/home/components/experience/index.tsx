import { Box } from '@mui/material';
import Container from 'layout/container';
import { FC } from 'react';
import SectionTitle from '../sectionTitle';
import ExperienceCard from './components/experienceCard';
import projects from '../../../../data';

const Projects: FC = () => (
  <Container id="experience">
    <SectionTitle title="Experience" />
    <Box>
      {projects.map((project, projectIndex) => (
        <ExperienceCard
          description={project.description}
          title={project.title}
          mainPicture={project.mainPicture}
          key={project.title}
          index={projectIndex}
          type={project.type}
          url={project.url}
        />
      ))}
    </Box>
  </Container>
);

export default Projects;

import Header from 'components/header';
import Container from 'layout/container';
import projects from 'data';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from '@mui/material';
import Cover from './components/cover';
import TechnicalDetails from './components/technicalDetails';

export const Wrapper = styled.div`
  background-color: var(--blackligth);
  min-height: 100vh;
`;

const ProjectDetail: FC = () => {
  const { projectId = '0' } = useParams();
  const project = projects[parseInt(projectId, 10)];

  return (
    <>
      <Header />
      <Wrapper>
        <Container verticalPadding="1em">
          <Cover
            description={project.description}
            picture={project.cover || project.mainPicture}
            title={project.title}
            url={project.url}
            github={project.github}
          />
          <Box paddingTop="3em">
            <TechnicalDetails data={project.technicalDetails || []} />
          </Box>
        </Container>
      </Wrapper>
    </>
  );
};

export default ProjectDetail;

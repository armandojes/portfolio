import Header from 'components/header';
import Container from 'layout/container';
import projects from 'pages/home/components/experience/projects';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Cover from './components/cover';
import { Wrapper } from './styled';

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
        </Container>
      </Wrapper>
    </>
  );
};

export default ProjectDetail;

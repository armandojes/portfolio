import Header from 'components/header';
import Container from 'layout/container';
import { FC } from 'react';
import Cover from './components/cover';
import { Wrapper } from './styled';

const ProjectDetail: FC = () => (
  <>
    <Header />
    <Wrapper>
      <Container verticalPadding="1em">
        <Cover />
      </Container>
    </Wrapper>
  </>
);

export default ProjectDetail;

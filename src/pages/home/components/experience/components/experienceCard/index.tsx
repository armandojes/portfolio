import { FC } from 'react';
import Text from 'layout/text';
import { Link } from 'react-router-dom';
import { Wrapper, Picture, TextWrapper, BlackBox, Button } from './styled';

export interface ExperienceCardProps {
  title: string,
  description: Array<string>,
  mainPicture: string,
  index: number,
}

const ExperienceCard: FC<ExperienceCardProps> = ({ description, mainPicture, title, index }) => (
  <Wrapper>
    <Picture src={mainPicture} />
    <TextWrapper>
      <Text size="1em" bold lineHeight="1.3em">{title}</Text>
      <BlackBox>
        {description.map((paragraph, paragraphIndex) => (
          <Text
            lineHeight="1.3em"
            marginBottom={description.length > (paragraphIndex + 1) ? '1em' : '0em'}
          >
            {paragraph}
          </Text>
        ))}
      </BlackBox>
      <Link to={`/project-detail/${index}`}>
        <Button>
          Ver detalles
        </Button>
      </Link>
    </TextWrapper>
  </Wrapper>
);

export default ExperienceCard;

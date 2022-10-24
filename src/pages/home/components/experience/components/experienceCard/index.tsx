import { FC } from 'react';
import Text from 'layout/text';
import { Link } from 'react-router-dom';
import isTheLastElement from 'helpers/isTheLastElement';
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
            key={paragraphIndex}
            lineHeight="1.3em"
            marginBottom={isTheLastElement(description, paragraph) ? '0em' : '1em'}
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

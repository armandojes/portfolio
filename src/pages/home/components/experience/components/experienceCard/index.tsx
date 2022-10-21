import { FC } from 'react';
import Text from 'layout/text';
import { Link } from 'react-router-dom';
import { Wrapper, Picture, TextWrapper, BlackBox, Button } from './styled';

export interface ExperienceCardProps {
  title: string,
  description: Array<string>,
  mainPicture: string,
}

const ExperienceCard: FC<ExperienceCardProps> = ({ description, mainPicture, title }) => (
  <Wrapper>
    <Picture src={mainPicture} />
    <TextWrapper>
      <Text size="1em" bold lineHeight="1.3em">{title}</Text>
      <BlackBox>
        {description.map((paragraph, index) => (
          <Text
            lineHeight="1.3em"
            marginBottom={description.length > (index + 1) ? '1em' : '0em'}
          >
            {paragraph}
          </Text>
        ))}
      </BlackBox>
      <Link to="/">
        <Button>
          Ver detalles
        </Button>
      </Link>
    </TextWrapper>
  </Wrapper>
);

export default ExperienceCard;

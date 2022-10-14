import { FC } from 'react';
import smenSrc from 'assets/projects/smne_home.png';
import Text from 'layout/text';
import { Link } from 'react-router-dom';
import { Wrapper, Picture, TextWrapper, BlackBox, Button } from './styled';

const ExperienceCard: FC = () => (
  <Wrapper>
    <Picture src={smenSrc} />
    <TextWrapper>
      <Text size="1em" bold lineHeight="1.3em">
        Algoritmos para el tratamiento farmacológico de la hiperglucemia en diabetes tipo 2
      </Text>
      <BlackBox>
        <Text lineHeight="1.3em">
          La herramienta digital para consultar los algoritmos para el tratamiento farmacológico de la hiperglucemia en diabetes tipo 2. El objetivo de esta herramienta de trabajo es poder ofrecerle a los pacientes un diagnóstico eficiente y oportuno.
        </Text>
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

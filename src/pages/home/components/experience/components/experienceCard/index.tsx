import { FC } from 'react';
import smenSrc from 'assets/projects/smne_home.png';
import Text from 'layout/text';
import { Link } from 'react-router-dom';
import { Wrapper, Picture, TextWrapper, DescriptionWrapper, Button } from './styled';

const ExperienceCard: FC = () => (
  <Wrapper>
    <Picture src={smenSrc} />
    <TextWrapper>
      <Text size="1.2em" bold>
        Algoritmos para el tratamiento farmacológico de la hiperglucemia en diabetes tipo 2
      </Text>
      <DescriptionWrapper>
        La herramienta digital para consultar los algoritmos para el tratamiento farmacológico de la
        hiperglucemia en diabetes tipo 2. El objetivo de esta herramienta de trabajo es poder ofrecerle
        a los pacientes un diagnóstico eficiente y oportuno.
      </DescriptionWrapper>
      <Link to="/">
        <Button>
          Ver detalles
        </Button>
      </Link>
    </TextWrapper>
  </Wrapper>
);

export default ExperienceCard;

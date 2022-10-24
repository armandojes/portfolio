import { Code } from '@mui/icons-material';
import Text from 'layout/text';
import { FC } from 'react';
import styled from 'styled-components';
import DividerWithTitle from './dividerWithTitle';

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: .2em 0em;
`;

const Icon = styled(Code)`
  color: green;
  margin-right: .5em;
`;

export interface TechnicalDetailsProps {
  data: Array<string>,
}

const TechnicalDetails: FC<TechnicalDetailsProps> = ({ data }) => (
  <>
    <DividerWithTitle content="Technical detail" />
    <div>
      {data.map((element, index) => (
        <Row>
          <Icon />
          <Text key={index}>{element}</Text>
        </Row>
      ))}
    </div>
  </>
);

export default TechnicalDetails;

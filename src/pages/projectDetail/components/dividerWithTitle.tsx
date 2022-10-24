import Text from 'layout/text';
import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 1em;
`;

const Line = styled.div`
  border-bottom: 1px solid var(--green);
`;

export interface DividerWithTitleProps {
  content: string
}

const DividerWithTitle: FC<DividerWithTitleProps> = ({ content }) => (
  <Wrapper>
    <Text bold marginBottom=".2em">{content}</Text>
    <Line />
  </Wrapper>
);

export default DividerWithTitle;

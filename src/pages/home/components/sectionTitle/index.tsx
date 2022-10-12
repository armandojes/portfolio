import Text from 'layout/text';
import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 3em 0em;
`;

const Divider = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  @media screen and (max-width:900px) {
    width: 80%;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid var(--green);
  flex-grow: 1;
  margin-left: 1em;
`;

export interface SectionTitleProps {
  title: string
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => (
  <Wrapper>
    <Divider>
      <Text size="1.5em">{title}</Text>
      <Line />
    </Divider>
  </Wrapper>
);

export default SectionTitle;

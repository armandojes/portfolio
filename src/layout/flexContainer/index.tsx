import styled from 'styled-components';

const justifyContentConversor = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
};

export interface Props {
  justifyContent?: keyof typeof justifyContentConversor
}

const FlexContainer = styled.div<Props>`
  display: flex;
  justify-content: ${(props) => justifyContentConversor[props.justifyContent || 'start']};
`;

export default FlexContainer;

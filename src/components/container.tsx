import styled from 'styled-components';

interface WrapperProps {
  verticalPadding?: string,
  horizontalPadding?: string,
  maxWidth?: string,
}

const Container = styled.div<WrapperProps>`
  max-width: ${(props) => props.maxWidth || '1600px'};
  padding: ${(props) => `${props.horizontalPadding || '1em'} ${props.verticalPadding || '1em'}`};
  margin: auto;
  box-sizing: border-box;
`;

export default Container;

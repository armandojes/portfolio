import styled from 'styled-components';

export interface ContainerProps {
  /** the vertical padding  */
  verticalPadding?: string
}

const Container = styled.div<ContainerProps>`
  width: 65%;
  margin: auto;
  margin-bottom: unset;
  margin-top: unset;
  box-sizing: border-box;
  padding: ${(props) => (props.verticalPadding ? `${props.verticalPadding} 0em` : '0em')};
  @media screen and (max-width:1280px) {
    width: 95%;
    max-width: 850px;
  }
`;

export default Container;

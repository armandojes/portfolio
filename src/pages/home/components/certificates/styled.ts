import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
`;

export const FlexItemWrapper = styled.div`
  width: 33.3%;
  padding: .8em;
  box-sizing: border-box;
  @media screen and (max-width: 600px) {
    width: 50%;
    padding: .5em;
  }
`;

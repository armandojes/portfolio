import styled from 'styled-components';

const Container = styled.div`
  width: 65%;
  margin: auto;
  margin-bottom: unset;
  margin-top: unset;
  box-sizing: border-box;
  @media screen and (max-width:1280px) {
    width: 95%;
    max-width: 850px;
  }
`;

export default Container;

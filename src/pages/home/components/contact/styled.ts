import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width:700px) {
    flex-wrap: wrap-reverse;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  width: 45%;
  box-sizing: border-box;
  padding: 0em 3em;
  @media screen and (max-width:700px) {
    width: 50%;
  }
  @media screen and (max-width:400px) {
    width: 70%;
  }
`;

export const DataWrapper = styled.div`
  width: 45%;
  @media screen and (max-width:700px) {
    width: 70%;
  }
  @media screen and (max-width:400px) {
    width: 80%;
  }
`;

export const Row = styled.a`
  display: flex;
  align-items: center;
  padding: .3em 0em;
  padding-right: 2em;
  text-decoration: none;
  border-bottom: 1px solid var(--greey);
  :hover {
    border-bottom: 1px solid var(--green);
    * {
      color: var(--green)!important;
    }
  }
`;

export const RowPicture = styled.img`
  width: 2em;
  margin-right: 1em;
`;

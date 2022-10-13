import Text from 'layout/text';
import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  padding-top: 4em;
`;

export const ItemWrapper = styled.div`
  width: 33.3%;
  padding: 1em;
  box-sizing: border-box;
  @media screen and (max-width:700px) {
    width: 50%;
    padding: .5em;
  }
  @media screen and (max-width:600px) {
    padding: .4em;
  }
`;

export const Item = styled.div`
  padding: 2em;
  background-color: var(--blackligth);
  display: flex;
  justify-content: center;
  height: 100%;
  box-sizing: border-box;
  @media screen and (max-width:900px) {
    padding: 1em;
  }
  @media screen and (max-width:600px) {
    padding: .6em;
  }
`;

export const Title = styled(Text)`
  border-bottom: 1px solid var(--green);
  font-size: 1.2em;
  margin-bottom: .5em;
  padding-bottom: .3em;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: .5em;
`;

export const RowIcon = styled.img`
  width: 1.5em;
  margin-right: 1em;
`;

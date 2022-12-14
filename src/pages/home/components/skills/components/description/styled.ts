import styled from 'styled-components';

export interface SectionProps {
  reverseWrapMobile?: boolean,
}

export const Section = styled.div<SectionProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 3em 0em;
  @media screen and (max-width:500px) {
    flex-wrap: ${(props) => (props.reverseWrapMobile ? 'wrap-reverse' : 'wrap')};
    margin: auto;
    justify-content: center;
    padding: 2em 0em;
  }
`;

export const PictureWrapper = styled.div`
  width: 40%;
  @media screen and (max-width:500px) {
    width: 70%;
    margin-top: 1.5em;
  }
`;

export const TextContainer = styled.div`
  width: 40%;
  @media screen and (max-width:500px) {
    width: 90%;
  }
`;

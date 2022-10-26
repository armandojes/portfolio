import styled from 'styled-components';
import ContainerBase from 'layout/container';
import coverSrc from 'assets/armando_cover.png';
import coverMSrc from 'assets/armando_cover_m.png';

export const Background = styled.div`
  min-height: 36vw;
  height: 93vh;
  max-height: 60vw;
  background-image: url(${coverSrc});
  background-size: cover;
  background-position: center;
  background-color: #343f56;
  background-blend-mode: overlay;
  display: flex;
  align-items: center;
  @media screen and (max-width:599px) {
    background-image: url(${coverMSrc});
    height: 70vh;
    min-height: 80vw;
    align-items: flex-end;
    max-height: 130vw;
  }
`;

export const Container = styled(ContainerBase)`
  display: flex;
  justify-content: flex-end;
`;

export const TypedWrapper = styled.div`
  width: 17em;
  color: var(--white);
  font-size: 1.5em;
  line-height: 1.5em;
  font-weight: bold;
  @media screen and (max-width:599px) {
    text-align: center;
    padding-bottom: 3em;
    width: 100%;
    box-sizing: border-box;
  }
`;

export default {};

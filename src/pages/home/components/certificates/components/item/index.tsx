import Text from 'layout/text';
import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #333b50;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: .8em;
  border-radius: 1em;
  border: 1px solid #333b50;
  height: 100%;
  box-sizing: border-box;
  :hover {
    border: 1px solid var(--green);
    cursor: pointer;
  }
`;

const Icon = styled.img`
  width: 4em;
  margin-right: 1em;
  @media screen and (max-width:800px) {
    width: 3em; 
  }
`;

const Title = styled(Text)`
  flex-grow: 1;
`;

export interface Props {
  icon: string,
  title: string,
  onClick?: () => void,
}

const CertificateItem: FC<Props> = ({ icon, title, onClick = () => {} }) => (
  <Wrapper onClick={onClick}>
    <Icon src={icon} />
    <Title>{title}</Title>
  </Wrapper>
);

export default CertificateItem;

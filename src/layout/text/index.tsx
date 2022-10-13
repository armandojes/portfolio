import styled, { css } from 'styled-components';
import { colors } from '../../constants';

export type TextVariants = 'titleSection' | 'other';

export interface TextProps {
  color?: string,
  align?: 'center' | 'left' | 'rigth',
  bold?: boolean,
  size?: string,
  marginBottom?: string,
}

const Text = styled.div<TextProps>`
  text-align: ${(props) => (props.align || 'unset')};
  color: ${(props) => (props.color || colors.white)};
  font-size: ${(props) => (props.size || '1em')};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  line-height: 1.5em;
  ${(props) => props.marginBottom && css` margin-bottom: ${props.marginBottom} `};
`;

export default Text;

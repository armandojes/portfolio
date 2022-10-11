import styled from 'styled-components';
import { colors } from '../../constants';

export type TextVariants = 'titleSection' | 'other';

export interface Props {
  variant?: TextVariants,
  color?: string,
  align?: 'center' | 'left' | 'rigth',
  bold?: boolean,
}

const calculateTextSize = (variant?: TextVariants) => {
  if (variant === 'titleSection') return '1.8em';
  return '1em';
};

const Text = styled.div<Props>`
  text-align: ${(props) => (props.align || 'left')};
  color: ${(props) => (props.color || colors.white)};
  font-size: ${(props) => calculateTextSize(props.variant)};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  line-height: 1.5em;
`;

export default Text;

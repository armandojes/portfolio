import { FC, ReactElement } from 'react';
import { useMediaQuery } from '@mui/material';

export interface ResponsiveProps {
  rule: string,
  children: ReactElement
}

const Responsive: FC<ResponsiveProps> = ({ rule, children }) => {
  const match = useMediaQuery(`(${rule})`);

  if (!match) return null;

  return children;
};

export default Responsive;

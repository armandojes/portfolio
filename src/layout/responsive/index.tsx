import { FC, ReactNode } from 'react';
import { useMediaQuery } from '@mui/material';

export interface ResponsiveProps {
  rule: string,
  children: ReactNode
}

const Responsive: FC<ResponsiveProps> = ({ rule, children }): any => {
  const match = useMediaQuery(`(${rule})`);

  if (!match) return null;

  return children || null;
};

export default Responsive;

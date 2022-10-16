import { useMediaQuery, Theme } from '@mui/material';

export interface BreakpointsProps {
  xl?: string,
  lg?: string,
  md?: string,
  sm?: string,
  xs: string,
}

const useBreakpoints = () => {
  const xl = useMediaQuery((theme: Theme) => theme.breakpoints.up('xl'));
  const lg = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const md = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const xs = useMediaQuery((theme: Theme) => theme.breakpoints.up('xs'));

  return (values: BreakpointsProps) => {
    if (xl && values.xl) return values.xl;
    if (lg && values.lg) return values.lg;
    if (md && values.md) return values.md;
    if (sm && values.sm) return values.sm;
    if (xs && values.xs) return values.xs;
    return values.xs;
  };
};

export default useBreakpoints;

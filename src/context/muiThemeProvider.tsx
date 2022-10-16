import { createTheme, ThemeProvider } from '@mui/material';
import { PropsWithChildren, FC } from 'react';

const theme = createTheme({});

const MuiThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default MuiThemeProvider;

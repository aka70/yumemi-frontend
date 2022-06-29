import { ThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';
import { GlobalStyle } from './globalStyle';
import { theme } from './theme';

type Props = {
  children: ReactNode;
};

export const AppThemeProvider = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

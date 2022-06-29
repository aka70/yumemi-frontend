import { ThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';
import { theme } from './constants';
import { GlobalStyle } from './globalStyle';

type Props = {
  children: ReactNode;
};

export const AppThemeProvider = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

const globalStyle = () => css`
  ${emotionReset}
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  body {
    font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
    color: #1f1f1f;
  }
  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
  }
`;

export const GlobalStyle = () => {
  return <Global styles={globalStyle()} />;
};

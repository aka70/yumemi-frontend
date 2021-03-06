import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FormEventHandler, useCallback, useState } from 'react';
import { MdArrowForward } from 'react-icons/all';
import { useNavigate } from 'react-router-dom';
import { Button } from '../atoms/Button';
import { Headline } from '../atoms/Headline';
import { TextField } from '../atoms/TextField';
import { useApiClientInitializer } from '../api/useApiClientInitializer';
import { UninitializedPageLayout } from '../layouts/UninitializedPageLayout';
import { route } from '../routes/constants';

const Wrapper = styled.div`
  form {
    margin: 0 auto 0 auto;
    padding: 0 24px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    div:first-of-type {
      margin-bottom: 12px;
    }
    div:nth-of-type(2) {
      margin-bottom: 24px;
    }
    div:nth-of-type(3) {
      margin-bottom: 24px;
    }
    div:nth-of-type(4) {
      display: flex;
      justify-content: end;
    }
    @media (max-width: 40em) {
      width: 100%;
      min-width: 350px;
    }
  }
`;

const Description = styled.p(
  ({ theme }) => css`
    ${theme.fonts.bodyL}
  `,
);

type PresentationProps = {
  onApiKeySubmit: (newResasApiKey: string) => void;
};

export const Presentation = ({ onApiKeySubmit }: PresentationProps) => {
  const [resasApiKeyInput, setResasApiKeyInput] = useState('');

  const handleSubmit: FormEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      onApiKeySubmit(resasApiKeyInput);
    },
    [resasApiKeyInput, onApiKeySubmit],
  );

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <Headline>RESAS APIキー</Headline>
        </div>
        <div>
          <Description>
            API呼び出しに使用するRESAS APIキーを指定します。
            {import.meta.env.DEV && '（開発環境のモックAPIのキーはdev）'}
          </Description>
        </div>
        <div>
          <TextField
            type="password"
            placeholder="RESAS-APIキー"
            value={resasApiKeyInput}
            required
            onChange={(e: any) => setResasApiKeyInput(e.target.value)}
          />
        </div>
        <div>
          <Button label="利用開始" endIcon={<MdArrowForward />} />
        </div>
      </form>
    </Wrapper>
  );
};

const Container = () => {
  const { initialize } = useApiClientInitializer();
  const navigate = useNavigate();

  const handleApiKeySubmit = useCallback(
    (newResasApiKey: string) => {
      initialize(newResasApiKey);
      navigate(route.mainPage);
    },
    [initialize, navigate],
  );

  return <Presentation onApiKeySubmit={handleApiKeySubmit} />;
};

export const ApiKeyInputPage = () => (
  <UninitializedPageLayout>
    <Container />
  </UninitializedPageLayout>
);

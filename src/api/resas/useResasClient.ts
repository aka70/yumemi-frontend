import { useMemo } from 'react';
import { ResasClient } from './ResasClient';
import { useResasApiKey } from './useResasApiKey';

export const useResasClient = () => {
  const [resasApiKey] = useResasApiKey();
  if (!resasApiKey) {
    throw new Error('No ResasApiKey set, useApiClientInitializer to set one');
  }
  return useMemo(() => new ResasClient(resasApiKey), [resasApiKey]);
};

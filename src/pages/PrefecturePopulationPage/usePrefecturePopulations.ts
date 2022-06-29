import { useMemo } from 'react';
import { usePopulationsQueries } from '../../api/usePopulationsQueries';
import { PrefectureSelection } from '../../types';

export const usePrefecturePopulations = (prefectureSelections: PrefectureSelection[]) => {
  const queryResults = usePopulationsQueries(prefectureSelections.filter((it) => it.selected));
  const isLoading = queryResults.some((result) => result.isLoading);
  const prefecturePopulations = useMemo(() => queryResults.flatMap((result) => result.data || []), [queryResults]);
  return useMemo(
    () => ({
      isLoading,
      prefecturePopulations,
    }),
    [isLoading, prefecturePopulations],
  );
};

import { useQueries } from 'react-query';
import { PopulationPerYear, Prefecture, PrefecturePopulation } from '../types';
import { useResasClient } from './resas/useResasClient';

export const usePopulationsQueries = (prefectures: Prefecture[]) => {
  const resasClient = useResasClient();
  return useQueries(
    prefectures.map((it) => ({
      queryKey: ['population', it.prefCode],
      queryFn: () => resasClient.fetchPopulations(it.prefCode),
      select: (populations: PopulationPerYear[]): PrefecturePopulation => ({
        ...it,
        populations,
      }),
    })),
  );
};

import { Route, Routes } from 'react-router-dom';
import { ApiKeyInputPage } from '../pages/ApiKeyInputPage';
import { PrefecturePopulationPage } from '../pages/PrefecturePopulationPage';
import { RequireApiClient } from './RequireApiClient';
import { route } from './constants';

export const AppRoutes = () => (
  <Routes>
    <Route
      path={route.mainPage}
      element={
        <RequireApiClient>
          <PrefecturePopulationPage />
        </RequireApiClient>
      }
    />
    <Route path={route.apiKeyInputPage} element={<ApiKeyInputPage />} />
  </Routes>
);

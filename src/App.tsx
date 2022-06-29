import { MemoryRouter } from 'react-router-dom';
import { ApiClientProvider } from './api/ApiClientProvider';
import { AppRoutes } from './routes/AppRoutes';
import { AppThemeProvider } from './themes/themeProvider';

export function App() {
  return (
    <MemoryRouter basename={import.meta.env.BASE_URL} initialEntries={[import.meta.env.BASE_URL]}>
      <AppThemeProvider>
        <ApiClientProvider>
          <AppRoutes />
        </ApiClientProvider>
      </AppThemeProvider>
    </MemoryRouter>
  );
}

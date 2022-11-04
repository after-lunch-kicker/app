import { StrictMode, Suspense } from 'react';
import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './routes';
import { mantineTheme } from './theme';
import { AuthProvider } from './providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={mantineTheme}
    >
      <Suspense fallback={<div>Test...</div>}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </Suspense>
    </MantineProvider>
  </StrictMode>,
);

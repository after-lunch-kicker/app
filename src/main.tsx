import { StrictMode, Suspense } from 'react';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { router } from './routes';
import { mantineTheme } from './theme';
import { AuthProvider } from './providers/AuthProvider';

import 'the-new-css-reset/css/reset.css';
import './index.css';
import '@fontsource/roboto-condensed/400.css';
import '@fontsource/roboto-condensed/700.css';
import { queryClient } from './api';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={mantineTheme}
      >
        <NotificationsProvider position="top-center">
          <Suspense fallback={<div>Test...</div>}>
            <AuthProvider>
              <RouterProvider router={router} />
            </AuthProvider>
          </Suspense>
        </NotificationsProvider>
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
);

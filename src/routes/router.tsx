import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import { authRoutes } from '../features/auth';
import { AuthedOnlyGuard } from '../guards/AuthedOnlyGuard';
import { DefaultLayout } from '../layouts/DefaultLayout';

const routes: RouteObject[] = [
  {
    element: <AuthedOnlyGuard />,
    children: [
      {
        element: <DefaultLayout />,
        children: [
          {
            path: '/',
            element: <div>🤡</div>,
          },
        ],
      },
    ],
  },
  ...authRoutes,
  {
    path: '*',
    element: <Navigate to="/auth" />,
  },
];

export const router = createBrowserRouter(routes);

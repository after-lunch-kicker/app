import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { BaseLayout } from '../../../layouts';
import { AuthGuard } from './guards/AuthGuard';

const AuthPage = lazy(() => import('../pages').then(module => ({ default: module.AuthPage })));

export const routes: RouteObject[] = [
  {
    element: <AuthGuard />,
    children: [
      {
        element: <BaseLayout />,
        children: [
          {
            path: '/auth',
            element: <AuthPage />,
          },
        ],
      },
    ],
  },
];

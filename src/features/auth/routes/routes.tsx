import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { BaseLayout } from '../../../layouts';

const AuthPage = lazy(() => import('../pages').then(module => ({ default: module.AuthPage })));

export const routes: RouteObject[] = [
  {
    element: <BaseLayout />,
    children: [
      {
        path: '/auth',
        element: <AuthPage />,
      },
    ],
  },
];

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { DefaultLayout } from '../../../layouts/DefaultLayout';

const LobbiesPage = lazy(() => import('../pages').then(module => ({ default: module.LobbiesPage })));

export const routes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/lobbies',
        element: <LobbiesPage />,
      },
    ],
  },
];

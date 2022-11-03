import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MainPage = lazy(() => import('../pages').then(module => ({ default: module.MainPage })));

export const testRoutes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
];

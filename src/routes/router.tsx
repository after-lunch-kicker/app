import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import { authRoutes } from '../features/auth';
import { lobbiesRoutes } from '../features/lobbies';
import { AuthedOnlyGuard } from '../guards/AuthedOnlyGuard';
import { UnauthedOnlyGuard } from '../guards/UnauthedOnlyGuard';

const routes: RouteObject[] = [
  {
    element: <AuthedOnlyGuard />,
    children: lobbiesRoutes,
  },
  {
    element: <UnauthedOnlyGuard />,
    children: authRoutes,
  },
  {
    path: '*',
    element: <Navigate to="/lobbies" />,
  },
];

export const router = createBrowserRouter(routes);

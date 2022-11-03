import { createBrowserRouter } from 'react-router-dom';
import { testRoutes } from '../features/test';

const routes = [...testRoutes];

export const router = createBrowserRouter(routes);

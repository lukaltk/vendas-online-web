import { RouteObject } from 'react-router-dom';

import LoginScreen from './index.ts';

export const loginRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginScreen />,
  },
];

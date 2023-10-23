import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { loginRoutes } from './modules/login/routes.tsx';

const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>Tela Principal!</div>,
    errorElement: <div>Página não encotrada!</div>,
  },
];

const router = createBrowserRouter([...mainRoutes, ...loginRoutes]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

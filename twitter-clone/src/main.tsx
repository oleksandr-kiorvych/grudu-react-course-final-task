import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';

import App from './App.jsx';
import SignIn from './auth/SignIn.jsx';
import SignUp from './auth/SignUp.jsx';
import Auth from './auth/Auth.js';
import Home from './home/Home.js';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,

    children: [
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
  {
    path: 'auth',
    element: <Auth />,
    children: [
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

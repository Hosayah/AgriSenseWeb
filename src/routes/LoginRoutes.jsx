import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';

// jwt auth
const LoginPage = Loadable(lazy(() => import('views/auth/Login')));
const RegisterPage = Loadable(lazy(() => import('views/auth/Register')));
const VerifyEmail = Loadable(lazy(() => import('views/auth/verifyEmail')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      children: [
        {
          path: '/login',
          element: <LoginPage />
        },
        {
          path: '/register',
          element: <RegisterPage />
        },
        {
          path: '/verify-email',
          element: <VerifyEmail />
        }
      ]
    }
  ]
};

export default LoginRoutes;

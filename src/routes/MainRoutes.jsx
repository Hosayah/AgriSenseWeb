import { lazy } from 'react';
import { useAuth } from 'contexts/AuthContext';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

// render- Dashboard
const FarmOwnerDashboard = Loadable(lazy(() => import('views/farmOwner/dashboard')));
const AdminDashboard = Loadable(lazy(() => import('views/admin/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('views/farmOwner/sample-page')));
const SamplePage1 = Loadable(lazy(() => import('views/admin/sample-page')));
const LoginPage = Loadable(lazy(() => import('views/auth/Login')));

// This should be JWT token stored in HTTP only cookie
var role = 'farmOwner'; // This should come from user auth context

// ==============================|| MAIN ROUTING ||============================== //

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) {
    return <LoginPage />
  }
  role = user?.role === 'admin' ? 'admin' : 'farmOwner'
  return children;
}

const MainRoutes = {
  path: '/',
  element: <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>,
  children: [
    {
      path: '/',
      element: role ? <AdminDashboard/>:<FarmOwnerDashboard/>
    },
    {
      path: 'farmOwner',
      children: [
        {
          path: 'dashboard',
          element: <FarmOwnerDashboard/>
        }
      ]
    },
    {
      path: 'farmOwner',
      children: [
        {
          path: 'sample-page',
          element: <SamplePage />
        }
      ]
    },
    {
      path: 'admin',
      children: [
        {
          path: 'dashboard',
          element: <AdminDashboard />
        }
      ]
    },
    {
      path: 'admin',
      children: [
        {
          path: 'sample-page',
          element: <SamplePage1 />
        }
      ]
    },
  ]
};

export default MainRoutes;

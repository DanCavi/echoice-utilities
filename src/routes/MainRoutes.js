import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import RouteGuard from 'Aoth/RouteGuard';
import CrearEmpresa from 'views/crear-empresa';
const Dashboard = Loadable(lazy(() => import('views/dashboard')));
const DataSourceIntegration = Loadable(lazy(() => import('views/data-source-integration')));
const WSGeneration = Loadable(lazy(() => import('views/ws-generation')));
const WSUsers = Loadable(lazy(() => import('views/ws-users')));
const SearchRut = Loadable(lazy(() => import('views/search')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element:
    <RouteGuard>
      <MainLayout />
    </RouteGuard>
    ,
  children: [
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: 'dashboard',
      element: <Dashboard />
    },
    {
      path: 'crear-empresa',
      element: <CrearEmpresa />
    },
    {
      path: 'data-source-integration',
      element: <DataSourceIntegration />
    },
    {
      path: 'ws-users',
      element: <WSUsers />
    },
    {
      path: 'ws-generation',
      element: <WSGeneration />
    },
    {
      path: 'search',
      element: <SearchRut />
    }
  ]
};

export default MainRoutes;

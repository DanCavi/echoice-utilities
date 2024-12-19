import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import RouteGuard from 'Aoth/RouteGuard';
const Dashboard = Loadable(lazy(() => import('views/dashboard')));
const DataSourceIntegration = Loadable(lazy(() => import('views/data-source-integration')));
const WSGeneration = Loadable(lazy(() => import('views/ws-generation')));
const WSUsers = Loadable(lazy(() => import('views/ws-users')));
const SearchRut = Loadable(lazy(() => import('views/search')));
const CrearEmpresa = Loadable(lazy(() => import('views/crear-empresa')));
const Perfiles = Loadable(lazy(() => import('views/perfiles')));
const Consumo = Loadable(lazy(() => import('views/consumo')));
const SalidaWS = Loadable(lazy(() => import('views/salida-ws')));
const VariableWorkshop = Loadable(lazy(() => import('views/variable-workshop')));
const SystemOption = Loadable(lazy(() => import('views/system-option')));

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
      path: 'test',
      element: <SearchRut />
    },
    {
      path: 'perfiles',
      element: <Perfiles />
    },
    {
      path: 'consumo',
      element: <Consumo />
    },
    {
      path: 'salida-ws',
      element: <SalidaWS />
    },
    {
      path: 'system-option',
      element: <SystemOption />
    }
  ]
};

export default MainRoutes;

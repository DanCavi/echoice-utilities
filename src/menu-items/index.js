import { IconSettings, IconDeviceFloppy, IconGitFork, IconManualGearbox, IconAnalyze, IconDashboard, IconFileAnalytics, IconUsersGroup, IconPlugConnected, IconSearch, IconChartDots3 } from '@tabler/icons-react';

import './styles.css';

const icons = { IconFileAnalytics, IconSettings, IconDeviceFloppy, IconGitFork, IconManualGearbox, IconAnalyze, IconDashboard, IconFileAnalytics, IconUsersGroup, IconPlugConnected, IconSearch, IconChartDots3 };
// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [
    {
      id: 'menu-items',
      title: '',
      type: 'group',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/dashboard',
          icon: icons.IconDashboard
        },
        {
          id: 'crear-empresa',
          title: 'Crear Empresa',
          type: 'item',
          url: '/crear-empresa',
          icon: icons.IconDeviceFloppy
        },
        {
          id: 'data-source-integration',
          title: 'Data Source Integration',
          type: 'item',
          url: '/data-source-integration',
          icon: icons.IconPlugConnected,
          breadcrumbs: false
        },
        {
          id: 'salida-ws',
          title: 'Salida Web Service',
          type: 'item',
          url: '/salida-ws',
          icon: icons.IconGitFork,
        },
        {
          id: 'ws-users',
          title: 'Web Service Users',
          type: 'item',
          url: '/ws-users',
          icon: icons.IconUsersGroup,
          breadcrumbs: false
        },
        {
          id: 'perfiles',
          title: 'Perfiles',
          type: 'item',
          url: '/perfiles',
          icon: icons.IconFileAnalytics,
          breadcrumbs: false
        },
        {
          id: 'consumo',
          title: 'Consumo',
          type: 'item',
          url: '/consumo',
          icon: icons.IconManualGearbox,
          breadcrumbs: false
        },
        // {
        //   id: 'ws-generation',
        //   title: 'Web Service Generation',
        //   type: 'item',
        //   url: '/ws-generation',
        //   icon: icons.IconChartDots3,
        //   breadcrumbs: false
        // },
        {
          id: 'test',
          title: 'Test',
          type: 'item',
          url: '/test',
          icon: icons.IconSearch,
          breadcrumbs: false
        },
      ]
    },
    {
      id: 'menu-options',
      title: '',
      type: 'group',
      children: [
        {
          id: 'system-option',
          title: 'System Option',
          type: 'item',
          url: '/system-option',
          icon: icons.IconSettings,
          breadcrumbs: false
        },
        {
          id: 'variable-workshop',
          title: 'Variable Workshop',
          type: 'item',
          url: '/variable-workshop',
          icon: icons.IconChartDots3,
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default menuItems;

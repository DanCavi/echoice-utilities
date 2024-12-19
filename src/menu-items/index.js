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
          title: 'Fuentes Disponibles',
          type: 'item',
          url: '/dashboard',
          icon: icons.IconDashboard
        },
        {
          id: 'crear-empresa',
          title: 'Administración Expertdata',
          type: 'item',
          url: '/crear-empresa',
          icon: icons.IconDeviceFloppy
        },
        {
          id: 'system-option',
          title: 'System Option',
          type: 'item',
          url: '/system-option',
          icon: icons.IconSettings,
          breadcrumbs: false
        },
      ]
    },
  ]
};

export default menuItems;

import { IconDeviceFloppy, IconGitFork, IconManualGearbox, IconAnalyze, IconDashboard, IconFileAnalytics, IconUsersGroup, IconPlugConnected, IconSearch, IconChartDots3 } from '@tabler/icons-react';

import './styles.css';

const icons = { IconDeviceFloppy, IconGitFork, IconManualGearbox, IconAnalyze, IconDashboard, IconFileAnalytics, IconUsersGroup, IconPlugConnected, IconSearch, IconChartDots3 };
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
          id: 'data-source-integration',
          title: 'Data Source Integration',
          type: 'item',
          url: '/data-source-integration',
          icon: icons.IconPlugConnected,
          breadcrumbs: false
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
          id: 'ws-generation',
          title: 'Web Service Generation',
          type: 'item',
          url: '/ws-generation',
          icon: icons.IconChartDots3,
          breadcrumbs: false
        },
        {
          id: 'search',
          title: 'Search',
          type: 'item',
          url: '/search',
          icon: icons.IconSearch,
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default menuItems;

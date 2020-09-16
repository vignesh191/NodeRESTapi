export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
//    badge: {
//      color: 'info',
//      text: 'NEW',
//    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Menu']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Menu Item 1',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Subitem1',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Subitem2',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Subitem3',
        to: '/base/carousels',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Menu Item 2',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Subitem1',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Subitem2',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Subitem3',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Subitem4',
        to: '/buttons/button-dropdowns',
      }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Menu Item 3',
    to: '/testpage',
    icon: 'cil-chart-pie'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Menu Item 4',
    to: '/icons',
    icon: 'cil-star'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Menu Item 5',
    to: '/notifications',
    icon: 'cil-bell',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Menu Item 6',
    to: '/widgets',
    icon: 'cil-calculator',
  }
]


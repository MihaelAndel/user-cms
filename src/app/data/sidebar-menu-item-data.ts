import { SidebarMenuItemConfiguration } from "../models/sidebar.model";

export default {
  navItems: [
    {
      text: 'Dashboard',
      icon: 'dashboard',
      route: 'dashboard'
    },
    {
      text: 'Users',
      icon: 'users',
      route: 'users'
    },
    {
      text: 'Documents',
      icon: 'documents',
      route: 'documents'
    },
  ],
  specialItems: [
    {
      text: 'Message',
      icon: 'message',
      route: 'messages'
    },
    {
      text: 'Help',
      icon: 'help',
      route: 'help'
    },
    {
      text: 'Settings',
      icon: 'settings',
      route: 'settings'
    },
  ],
} satisfies SidebarMenuItemConfiguration

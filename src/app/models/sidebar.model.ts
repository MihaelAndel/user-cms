export interface SidebarMenuItem {
  text: string,
  icon: string,
  route: string
}

export interface SidebarMenuItemConfiguration {
  navItems: SidebarMenuItem[],
  specialItems: SidebarMenuItem[]
}
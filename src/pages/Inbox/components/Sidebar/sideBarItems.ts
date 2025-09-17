// sideBarItems.ts
import { LayoutDashboard, Shield, Settings } from 'lucide-react'

export type SideBarItem = {
  title: string
  route: string
  icon: React.ElementType
  end?: boolean // quando true, usa match exato no NavLink
}

export const sideBarItems: SideBarItem[] = [
  { title: 'Dashboard', route: '/dashboard', icon: LayoutDashboard, end: true },
  { title: 'Blocked', route: '/blocked', icon: Shield },
  { title: 'Settings', route: '/settings', icon: Settings }
]

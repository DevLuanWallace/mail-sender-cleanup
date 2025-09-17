// SidebarLink.tsx
import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { NavLink } from 'react-router'

const NAV_BASE = 'w-full flex items-center gap-3 px-3 py-5 rounded-lg transition-colors'
const NAV_IDLE = 'text-muted-foreground hover:text-foreground hover:bg-accent'
const NAV_ACTIVE = 'text-black bg-primary'

type Props = {
  title: string
  route: string
  icon: React.ElementType
  end?: boolean
  onClick?: () => void
}

export function SidebarLink({ title, route, icon: Icon, end, onClick }: Props) {
  return (
    <SidebarMenuItem>
      <NavLink to={route} end={end}>
        {({ isActive }) => (
          <SidebarMenuButton asChild className={cn(NAV_BASE, isActive ? NAV_ACTIVE : NAV_IDLE)}>
            <span onClick={onClick}>
              <Icon className="w-4 h-4" />
              <span>{title}</span>
            </span>
          </SidebarMenuButton>
        )}
      </NavLink>
    </SidebarMenuItem>
  )
}

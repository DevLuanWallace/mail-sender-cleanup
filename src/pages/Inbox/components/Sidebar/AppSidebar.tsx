// AppSidebar.tsx
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu
} from '@/components/ui/sidebar'
import { sideBarItems, type SideBarItem } from './sideBarItems'
import { SidebarLink } from './SidebarLink'

type Props = {
  totalEmails?: number
  totalSenders?: number
  onItemClick?: () => void // opcional: fechar sidebar no mobile
}

export function AppSidebar({ totalEmails, totalSenders, onItemClick }: Props) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="h-full p-6">
            <div className="mb-8">
              <h1 className="text-xl font-semibold text-foreground">BrooMail</h1>
            </div>

            <SidebarGroupContent>
              <SidebarMenu className="mb-8">
                {sideBarItems.map((item: SideBarItem) => (
                  <SidebarLink key={item.route} {...item} onClick={onItemClick} />
                ))}
              </SidebarMenu>

              {(totalEmails !== undefined || totalSenders !== undefined) && (
                <div className="space-y-4">
                  {totalEmails !== undefined && (
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Total Emails Scanned</p>
                      <p className="text-2xl font-semibold text-foreground">{totalEmails.toLocaleString()}</p>
                    </div>
                  )}
                  {totalSenders !== undefined && (
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Unique Senders</p>
                      <p className="text-2xl font-semibold text-foreground">{totalSenders}</p>
                    </div>
                  )}
                </div>
              )}
            </SidebarGroupContent>
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

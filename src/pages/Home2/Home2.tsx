import { SidebarProvider, SidebarTrigger } from '../../components/ui/sidebar'
import { AppSidebar } from './components/AppSidebar'

export const Home2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}

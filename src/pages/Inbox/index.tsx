import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from './components/Sidebar/AppSidebar'
import DashboardContent from './components/DashboardContent'
import { Header } from './components/Header'

export interface SenderType {
  id: number
  sender: string
  name: string
  emailCount: number
  lastReceived: string
  hasUnsubscribe: boolean
}

export const Dashboard = () => {
  const mockSenders: SenderType[] = [
    {
      id: 1,
      sender: 'newsletter@example.com',
      name: 'Daily Newsletter',
      emailCount: 156,
      lastReceived: '2025-08-29',
      hasUnsubscribe: true
    },
    {
      id: 2,
      sender: 'promotions@shop.com',
      name: 'Online Shop',
      emailCount: 89,
      lastReceived: '2025-08-28',
      hasUnsubscribe: true
    },
    {
      id: 3,
      sender: 'noreply@service.com',
      name: 'Service Notifications',
      emailCount: 42,
      lastReceived: '2025-08-27',
      hasUnsubscribe: false
    },
    {
      id: 4,
      sender: 'marketing@brand.com',
      name: 'Brand Marketing',
      emailCount: 73,
      lastReceived: '2025-08-26',
      hasUnsubscribe: true
    },
    {
      id: 5,
      sender: 'updates@platform.com',
      name: 'Platform Updates',
      emailCount: 28,
      lastReceived: '2025-08-25',
      hasUnsubscribe: false
    }
  ]

  const totalEmails = mockSenders.reduce((acc, s) => acc + s.emailCount, 0)
  const totalSenders = mockSenders.length

  return (
    <SidebarProvider>
      <AppSidebar totalEmails={totalEmails} totalSenders={totalSenders} />

      <main className="flex-1">
        <Header />
        <section className="p-6">
          <DashboardContent senders={mockSenders} />
        </section>
      </main>
    </SidebarProvider>
  )
}

import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Ban, Trash2 } from 'lucide-react'
import type { SenderType } from '../..'
import { Badge } from '@/components/ui/badge'

type DashboardContentProps = {
  senders: SenderType[]
}

export default function DashboardContent({ senders }: DashboardContentProps) {
  const filteredSenders = senders

  const handleUnsubscribe = (_senderName: string) => {
    // toast(`Successfully unsubscribed from ${senderName}`)
  }

  const handleBlock = (_senderName: string) => {
    // toast(`Successfully blocked ${senderName}`)
  }

  const handleDeleteAll = (_senderName: string) => {
    // toast(`Successfully deleted all emails from ${senderName}`)
  }

  return (
    <main className="flex-1">
      <div className="rounded-lg border border-border shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Email Senders</h2>
          <p className="text-sm text-muted-foreground">Manage your email subscriptions and blocked senders</p>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sender</TableHead>
                <TableHead className="hidden sm:table-cell">Emails</TableHead>
                <TableHead className="hidden md:table-cell">Last Received</TableHead>
                <TableHead className="hidden lg:table-cell">Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSenders.map((sender) => (
                <TableRow key={sender.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium text-foreground">{sender.name}</div>
                      <div className="text-sm text-muted-foreground">{sender.sender}</div>
                      <div className="sm:hidden text-xs text-muted-foreground mt-1">
                        {sender.emailCount} emails • {new Date(sender.lastReceived).toLocaleDateString()}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge variant="secondary">{sender.emailCount}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground">
                    {new Date(sender.lastReceived).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <Badge variant={sender.hasUnsubscribe ? 'default' : 'secondary'}>
                      {sender.hasUnsubscribe ? 'Unsub available' : 'No unsubscribe'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {sender.hasUnsubscribe && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleUnsubscribe(sender.name)}
                          className="h-8 w-8 p-0 cursor-pointer"
                          title="Unsubscribe"
                        >
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            <polyline points="16,17 21,12 16,7" />
                            <line x1="21" y1="12" x2="9" y2="12" />
                          </svg>
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleBlock(sender.name)}
                        className="h-8 w-8 p-0 cursor-pointer"
                        title="Block sender"
                      >
                        <Ban className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteAll(sender.name)}
                        className="h-8 w-8 p-0 cursor-pointer text-destructive hover:text-destructive"
                        title="Delete all emails"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  )
}

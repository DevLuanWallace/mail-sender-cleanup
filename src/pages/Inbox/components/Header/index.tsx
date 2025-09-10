// Header.tsx
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { ThemeSwitch } from '@/components/theme-switch' // ajuste o path

type Props = {
  searchQuery?: string
  setSearchQuery?: (v: string) => void
}

export function Header({ searchQuery = '', setSearchQuery }: Props) {
  return (
    <header className="w-full border-b bg-background/80">
      <div className="flex items-center justify-between gap-4 h-14 px-6">
        <SidebarTrigger className="md:hidden inline-flex h-9 w-9 shrink-0 items-center justify-center leading-none" />

        <div className="relative flex-1 min-w-0 items-center">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Filter by sender..."
            value={searchQuery}
            onChange={(e) => setSearchQuery?.(e.target.value)}
            className="h-9 pl-9 w-64"
          />
        </div>

        <div className="w-max">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}

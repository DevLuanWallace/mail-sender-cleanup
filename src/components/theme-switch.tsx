import { Sun, Moon } from 'lucide-react'
import { Switch } from './ui/switch'
import { useTheme } from './theme-provider'

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <div className="absolute top-6 right-6 flex items-center gap-2">
      <Sun className="w-4 h-4 text-muted-foreground" />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        aria-label="Toggle dark mode"
      />
      <Moon className="w-4 h-4 text-muted-foreground" />
    </div>
  )
}

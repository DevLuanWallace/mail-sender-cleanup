import { AnimatedBackdrop } from '@/components/animated-backdrop'
import { AuthForm } from '@/components/auth-form'
import { useTheme } from '@/components/theme-provider'
import { ThemeSwitch } from '@/components/theme-switch'

export default function AuthPage() {
  const { theme } = useTheme()

  return (
    <AnimatedBackdrop density={theme === 'light' ? 'high' : 'subtle'} primary="#ffb900" count={16} bleed={0.1}>
      <div className="absolute top-10 right-10">
        <ThemeSwitch />
      </div>
      <AuthForm />
    </AnimatedBackdrop>
  )
}

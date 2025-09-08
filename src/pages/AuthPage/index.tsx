import { AnimatedBackdrop } from '../../components/animated-backdrop'
import { AuthForm } from '../../components/auth-form'
import { ThemeSwitch } from '../../components/theme-switch'

export default function AuthPage() {
  return (
    <AnimatedBackdrop density="subtle" primary="#ff6600" count={16} bleed={0.1}>
      <ThemeSwitch />
      <AuthForm />
    </AnimatedBackdrop>
  )
}

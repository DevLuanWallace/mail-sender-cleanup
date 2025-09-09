import { Home, Mail, Search } from 'lucide-react'
import { useTheme } from '../../components/theme-provider'
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { AnimatedBackdrop } from '../../components/animated-backdrop'
import { useNavigate } from 'react-router'

export function NotFound() {
  const { resolvedTheme } = useTheme()
  const navigate = useNavigate()

  return (
    <AnimatedBackdrop density={resolvedTheme === 'light' ? 'high' : 'subtle'} primary="#ffb900" count={16} bleed={0.1}>
      <div className="min-h-screen relative overflow-hidden">
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-lg relative">
            <Card className="border border-white/30 dark:border-white/20 shadow-2xl backdrop-blur-xl bg-white/85 dark:bg-black/70">
              <CardHeader className="text-center pb-6 space-y-4">
                <div className="mx-auto w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mb-4 shadow-lg anim-bounce">
                  <Search className="w-10 h-10 text-white" />
                </div>

                <div className="mx-auto anim-fade-in-up">
                  <h1 className="text-6xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent mb-2">
                    404
                  </h1>
                </div>

                <CardTitle className="text-2xl anim-fade-in-up anim-delay-200">Page Not Found</CardTitle>

                <div className="space-y-2 text-muted-foreground anim-fade-in-up anim-delay-400">
                  <p>Oops! The page you're looking for doesn't exist.</p>
                  <p className="text-sm">It might have been moved, deleted, or you entered the wrong URL.</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3 anim-fade-in-up anim-delay-600">
                  <Button
                    onClick={() => navigate('/inbox')}
                    className="cursor-pointer w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Back to Mailbox
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => window.history.back()}
                    className="cursor-pointer w-full bg-white/50 dark:bg-black/50 backdrop-blur-sm border-white/30 dark:border-white/20 hover:bg-white/80 dark:hover:bg-black/70 transition-all duration-200"
                  >
                    Go Back
                  </Button>
                </div>

                <div className="text-center pt-4 anim-fade-in-up anim-delay-800">
                  <p className="text-xs text-muted-foreground">
                    Found a bug or something not working?{' '}
                    <a
                      href="https://github.com/DevLuanWallace/mail-sender-cleanup/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-500 hover:text-amber-600 hover:underline transition-all duration-200"
                    >
                      Open an issue
                    </a>{' '}
                    or submit a PR to help fix it.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-6 anim-fade-in-up anim-delay-1000">
              <p className="text-xs text-muted-foreground">
                <Mail className="w-3 h-3 inline mr-1" />
                Secure email access powered by modern encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedBackdrop>
  )
}

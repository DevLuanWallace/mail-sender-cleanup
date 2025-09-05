import { Label } from '@radix-ui/react-dropdown-menu'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { useTheme } from '../components/theme-provider'
import { useState } from 'react'
import { Lock, Mail, User } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { ModeToggle } from '../components/mode-toggle'

interface LoginFormData {
  username: string
  password: string
}

interface SignupFormData {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export function Home() {
  const { theme } = useTheme()
  const [loginData, setLoginData] = useState<LoginFormData>({
    username: '',
    password: ''
  })
  const [signupData, setSignupData] = useState<SignupFormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt:', loginData)
    // Here you would handle the actual login logic
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    if (signupData.password !== signupData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    console.log('Signup attempt:', signupData)
    // Here you would handle the actual signup logic
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Heart and Circle Background */}
      <div className="absolute inset-0 z-0">
        {/* Base neutral gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800"></div>

        {/* Heart and Circle shapes */}
        <div className="absolute inset-0">
          {/* Large Heart 1 */}
          <div
            className="absolute top-0 left-0 w-96 h-96 opacity-80"
            style={{
              background:
                theme === 'dark'
                  ? 'linear-gradient(135deg, #fef3c7 0%, #fde047 50%, #facc15 100%)'
                  : 'linear-gradient(135deg, #fde047 0%, #facc15 50%, #eab308 100%)',
              transform: 'rotate(-15deg) translate(-20%, -10%)'
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background: 'inherit',
                transform: 'rotate(-45deg)',
                borderRadius: '75px 75px 0 0',
                position: 'relative'
              }}
            >
              <div
                className="absolute w-1/2 h-1/2 rounded-full"
                style={{
                  background: 'inherit',
                  top: '-25%',
                  left: '25%'
                }}
              ></div>
              <div
                className="absolute w-1/2 h-1/2 rounded-full"
                style={{
                  background: 'inherit',
                  top: '-25%',
                  right: '25%'
                }}
              ></div>
            </div>
          </div>

          {/* Large Circle 1 */}
          <div
            className="absolute top-1/4 right-0 w-[400px] h-[400px] opacity-75 rounded-full"
            style={{
              background:
                theme === 'dark'
                  ? 'linear-gradient(45deg, #fef3c7 0%, #fbbf24 50%, #f59e0b 100%)'
                  : 'linear-gradient(45deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
              transform: 'translate(20%, -10%)'
            }}
          ></div>

          {/* Medium Heart 2 */}
          <div
            className="absolute bottom-0 left-1/4 w-80 h-80 opacity-85"
            style={{
              background:
                theme === 'dark'
                  ? 'linear-gradient(225deg, #fef3c7 0%, #fde047 50%, #facc15 100%)'
                  : 'linear-gradient(225deg, #fde047 0%, #facc15 50%, #ca8a04 100%)',
              transform: 'rotate(-30deg) translate(-10%, 20%)'
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background: 'inherit',
                transform: 'rotate(-45deg)',
                borderRadius: '60px 60px 0 0',
                position: 'relative'
              }}
            >
              <div
                className="absolute w-1/2 h-1/2 rounded-full"
                style={{
                  background: 'inherit',
                  top: '-25%',
                  left: '25%'
                }}
              ></div>
              <div
                className="absolute w-1/2 h-1/2 rounded-full"
                style={{
                  background: 'inherit',
                  top: '-25%',
                  right: '25%'
                }}
              ></div>
            </div>
          </div>

          {/* Medium Circle 2 */}
          <div
            className="absolute top-1/3 right-1/3 w-72 h-72 opacity-70 rounded-full"
            style={{
              background:
                theme === 'dark'
                  ? 'linear-gradient(315deg, #fde047 0%, #facc15 50%, #eab308 100%)'
                  : 'linear-gradient(315deg, #facc15 0%, #eab308 50%, #ca8a04 100%)',
              transform: 'translate(10%, -5%)'
            }}
          ></div>

          {/* Small Heart 3 */}
          <div
            className="absolute top-1/2 left-1/3 w-56 h-56 opacity-75"
            style={{
              background:
                theme === 'dark'
                  ? 'linear-gradient(90deg, #fef3c7 0%, #fde047 100%)'
                  : 'linear-gradient(90deg, #fde047 0%, #fbbf24 100%)',
              transform: 'rotate(45deg)'
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background: 'inherit',
                transform: 'rotate(-45deg)',
                borderRadius: '40px 40px 0 0',
                position: 'relative'
              }}
            >
              <div
                className="absolute w-1/2 h-1/2 rounded-full"
                style={{
                  background: 'inherit',
                  top: '-25%',
                  left: '25%'
                }}
              ></div>
              <div
                className="absolute w-1/2 h-1/2 rounded-full"
                style={{
                  background: 'inherit',
                  top: '-25%',
                  right: '25%'
                }}
              ></div>
            </div>
          </div>

          {/* Small Circle 3 */}
          <div
            className="absolute bottom-1/3 right-1/4 w-64 h-64 opacity-80 rounded-full"
            style={{
              background:
                theme === 'dark'
                  ? 'linear-gradient(180deg, #fbbf24 0%, #f59e0b 50%, #eab308 100%)'
                  : 'linear-gradient(180deg, #f59e0b 0%, #d97706 50%, #92400e 100%)'
            }}
          ></div>

          {/* Tiny Hearts and Circles for accent */}
          <div
            className="absolute top-3/4 left-1/6 w-40 h-40 opacity-65"
            style={{
              background:
                theme === 'dark'
                  ? 'linear-gradient(60deg, #fef3c7 0%, #fde047 100%)'
                  : 'linear-gradient(60deg, #fde047 0%, #facc15 100%)',
              transform: 'rotate(30deg)'
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background: 'inherit',
                transform: 'rotate(-45deg)',
                borderRadius: '30px 30px 0 0',
                position: 'relative'
              }}
            >
              <div
                className="absolute w-1/2 h-1/2 rounded-full"
                style={{
                  background: 'inherit',
                  top: '-25%',
                  left: '25%'
                }}
              ></div>
              <div
                className="absolute w-1/2 h-1/2 rounded-full"
                style={{
                  background: 'inherit',
                  top: '-25%',
                  right: '25%'
                }}
              ></div>
            </div>
          </div>

          <div
            className="absolute top-1/6 right-1/6 w-48 h-48 opacity-70 rounded-full"
            style={{
              background:
                theme === 'dark'
                  ? 'linear-gradient(120deg, #fde047 0%, #fbbf24 100%)'
                  : 'linear-gradient(120deg, #fbbf24 0%, #f59e0b 100%)'
            }}
          ></div>
        </div>

        {/* Enhanced blur and contrast overlay */}
        <div className="absolute inset-0 backdrop-blur-[25px] bg-white/30 dark:bg-black/40"></div>

        {/* Additional gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-white/50 dark:from-black/60 dark:via-black/40 dark:to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md relative">
          {/* Theme Toggle */}
          <div className="flex justify-end mb-4">
            <ModeToggle />
          </div>

          <Card className="border border-white/30 dark:border-white/20 shadow-2xl backdrop-blur-xl bg-white/85 dark:bg-black/70">
            <CardHeader className="text-center space-y-2 pb-6">
              <div className="mx-auto w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mb-2 shadow-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Welcome to Mailbox</CardTitle>
              <CardDescription className="text-muted-foreground">Access your secure email account</CardDescription>
            </CardHeader>

            <CardContent>
              <Tabs defaultValue="login" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2 bg-white/30 dark:bg-black/30 backdrop-blur-sm">
                  <TabsTrigger
                    value="login"
                    className="data-[state=active]:bg-white dark:data-[state=active]:bg-black/80 data-[state=active]:backdrop-blur-sm"
                  >
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger
                    value="signup"
                    className="data-[state=active]:bg-white dark:data-[state=active]:bg-black/80 data-[state=active]:backdrop-blur-sm"
                  >
                    Sign Up
                  </TabsTrigger>
                </TabsList>

                {/* Login Form */}
                <TabsContent value="login" className="space-y-4">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-username">Username</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="login-username"
                          type="text"
                          placeholder="Enter your username"
                          value={loginData.username}
                          onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                          className="pl-10 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-white/30 dark:border-white/20 focus:border-yellow-400 focus:bg-white/80 dark:focus:bg-black/70 transition-all duration-200"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="login-password"
                          type="password"
                          placeholder="Enter your password"
                          value={loginData.password}
                          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                          className="pl-10 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-white/30 dark:border-white/20 focus:border-yellow-400 focus:bg-white/80 dark:focus:bg-black/70 transition-all duration-200"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-amber-500 hover:from-yellow-500 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      Sign In to Mailbox
                    </Button>
                  </form>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Forgot your password?{' '}
                      <button className="text-amber-500 hover:text-amber-600 hover:underline transition-all duration-200">
                        Reset it here
                      </button>
                    </p>
                  </div>
                </TabsContent>

                {/* Signup Form */}
                <TabsContent value="signup" className="space-y-4">
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-username">Username</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="signup-username"
                          type="text"
                          placeholder="Choose a username"
                          value={signupData.username}
                          onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
                          className="pl-10 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-white/30 dark:border-white/20 focus:border-yellow-400 focus:bg-white/80 dark:focus:bg-black/70 transition-all duration-200"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="Enter your email"
                          value={signupData.email}
                          onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                          className="pl-10 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-white/30 dark:border-white/20 focus:border-yellow-400 focus:bg-white/80 dark:focus:bg-black/70 transition-all duration-200"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="signup-password"
                          type="password"
                          placeholder="Create a password"
                          value={signupData.password}
                          onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                          className="pl-10 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-white/30 dark:border-white/20 focus:border-yellow-400 focus:bg-white/80 dark:focus:bg-black/70 transition-all duration-200"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="signup-confirm-password"
                          type="password"
                          placeholder="Confirm your password"
                          value={signupData.confirmPassword}
                          onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                          className="pl-10 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-white/30 dark:border-white/20 focus:border-yellow-400 focus:bg-white/80 dark:focus:bg-black/70 transition-all duration-200"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      Create Account
                    </Button>
                  </form>

                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">
                      By creating an account, you agree to our{' '}
                      <button className="text-amber-500 hover:text-amber-600 hover:underline transition-all duration-200">
                        Terms of Service
                      </button>{' '}
                      and{' '}
                      <button className="text-amber-500 hover:text-amber-600 hover:underline transition-all duration-200">
                        Privacy Policy
                      </button>
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-xs text-muted-foreground">Secure email access powered by modern encryption</p>
          </div>
        </div>
      </div>
    </div>
  )
}
// export const Home = () => {
//   return (
//     <div className="flex items-center justify-center h-screen bg-black">
//       <Card className="w-full max-w-sm">
//       <CardHeader>
//         <CardTitle>BrooMail</CardTitle>
//         <CardDescription>
//           Seja bem-vindo ao BrooMail, sua plataforma de email.
//         </CardDescription>

//       </CardHeader>
//       <CardContent>
//         <form>
//           <div className="flex flex-col gap-6">
//             <div className='flex justify-center'>
//               <p className='text-3xl font-semibold m-5'>Login</p>
//             </div>
//             <div className="grid gap-2">
//               <Label typeof="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="nome@email.com"
//                 required
//               />
//             </div>
//             <div className="grid gap-2">
//               <div className="flex items-center">
//                 <Label typeof="password">Password</Label>
//               </div>
//               <Input id="password" type="password" required />
//             </div>
//           </div>
//         </form>
//       </CardContent>
//       <CardFooter className="flex-col gap-2">
//         <Button type="submit" className="w-full">
//           Login
//         </Button>
//         <div className='flex w-full items-center justify-end mt-20'>
//           <CardAction>
//             <Button variant="link">
//               <p className='text-gray-400'>Ainda não tem uma conta?</p>
//               <p className='hover:underline'>Sign Up</p>
//             </Button>
//           </CardAction>
//         </div>
//       </CardFooter>
//     </Card>
//     </div>
//   )
// }

import { Label } from '@radix-ui/react-dropdown-menu'
import { Button } from '../components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'

export const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>BrooMail</CardTitle>
        <CardDescription>
          Seja bem-vindo ao BrooMail, sua plataforma de email.
        </CardDescription>
        
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className='flex justify-center'>
              <p className='text-3xl font-semibold m-5'>Login</p>
            </div>
            <div className="grid gap-2">
              <Label typeof="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="nome@email.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label typeof="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <div className='flex w-full items-center justify-end mt-20'>
          <CardAction>
            <Button variant="link">
              <p className='text-gray-400'>Ainda não tem uma conta?</p> 
              <p className='hover:underline'>Sign Up</p>
            </Button>
          </CardAction>
        </div>
      </CardFooter>
    </Card>
    </div>
  )
}

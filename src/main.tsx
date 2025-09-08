import './global.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { AppRoutes } from './routes/AppRoutes.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'

const root = document.getElementById('root')!

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRoutes />
    </ThemeProvider>
  </BrowserRouter>
)

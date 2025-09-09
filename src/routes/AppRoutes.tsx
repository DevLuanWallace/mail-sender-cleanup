import { Navigate, Route, Routes } from 'react-router'
import AuthPage from '../pages/AuthPage'
import { Home2 } from '../pages/Home2/Home2'
import { NotFound } from '../pages/NotFound'

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Redireciona a raiz "/" para /login */}
      <Route path="/login" element={<AuthPage />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      {/* Redireciona qualquer rota não encontrada para /login */}
      <Route path="*" element={<NotFound />} />
      <Route path="/inbox" element={<Home2 children={undefined} />} />
    </Routes>
  )
}

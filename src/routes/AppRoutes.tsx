import { Route, Routes } from 'react-router'
import AuthPage from '../pages/AuthPage'
import { Home2 } from '../pages/Home2/Home2'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Conteudo Exemplo</h1>} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/inbox" element={<Home2 children={undefined} />} />
    </Routes>
  )
}

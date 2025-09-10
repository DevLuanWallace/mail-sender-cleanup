import { Navigate, Route, Routes } from 'react-router'
import AuthPage from '../pages/AuthPage'
import { NotFound } from '../pages/NotFound'
import { Dashboard } from '@/pages/Inbox'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<NotFound />} />

      <Route path="/login" element={<AuthPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

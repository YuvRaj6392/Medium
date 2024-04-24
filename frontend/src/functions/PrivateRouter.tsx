
import { Outlet } from 'react-router-dom'

export const PrivateRouter = () => {
  const token = localStorage.getItem('token')

  return token ? <Outlet /> : window.location.href="/signin"
}
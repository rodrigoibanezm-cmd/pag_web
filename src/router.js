import { quePage } from './pages/que.js'
import { comoPage } from './pages/como.js'

export const renderRoute = pathname => {
  if (pathname === '/como' || pathname === '/como/') return comoPage()
  return quePage()
}

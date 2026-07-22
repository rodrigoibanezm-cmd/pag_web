import { quePage } from './pages/que.js'
import { comoPage } from './pages/como.js'
import { partnersPage } from './pages/partners.js'

export const renderRoute = pathname => {
  if (pathname === '/como' || pathname === '/como/') return comoPage()
  if (pathname === '/partners' || pathname === '/partners/') return partnersPage()
  return quePage()
}
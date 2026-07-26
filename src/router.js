import { quePage } from './pages/que.js'
import { comoPage } from './pages/como.js'
import { arquitecturaPage } from './pages/arquitectura.js'
import { partnersPage } from './pages/partners.js'
import { labsPage } from './pages/labs.js'

export const renderRoute = pathname => {
  if (pathname === '/como' || pathname === '/como/') return comoPage()
  if (pathname === '/arquitectura' || pathname === '/arquitectura/') return arquitecturaPage()
  if (pathname === '/partners' || pathname === '/partners/') return partnersPage()
  if (pathname === '/labs' || pathname === '/labs/') return labsPage()
  return quePage()
}
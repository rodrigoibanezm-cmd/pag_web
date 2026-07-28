import { comoPage } from './pages/como.js'
import { arquitecturaPage } from './pages/arquitectura.js'
import { partnersPage } from './pages/partners.js'
import { labsPage } from './pages/labs.js'
import { ejemplosPage } from './pages/ejemplos.js'

export const renderRoute = pathname => {
  if (pathname === '/como' || pathname === '/como/') return comoPage()
  if (pathname === '/arquitectura' || pathname === '/arquitectura/') return arquitecturaPage()
  if (pathname === '/partners' || pathname === '/partners/') return partnersPage()
  if (pathname === '/ejemplos' || pathname === '/ejemplos/' || pathname === '/ejemplos/crm' || pathname === '/ejemplos/crm/') return ejemplosPage()
  return labsPage()
}

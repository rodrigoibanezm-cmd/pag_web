import { comoPage } from './pages/como.js'
import { partnersPage } from './pages/partners.js'
import { labsPage } from './pages/labs.js'
import { ejemplosIndexPage, ejemplosPage, ejemplosErpPage, ejemplosCorreoPage, ejemplosClientesPage } from './pages/ejemplos.js'

export const renderRoute = pathname => {
  if (pathname === '/como' || pathname === '/como/') return comoPage()
  if (pathname === '/partners' || pathname === '/partners/') return partnersPage()
  if (pathname === '/ejemplos' || pathname === '/ejemplos/') return ejemplosIndexPage()
  if (pathname === '/ejemplos/crm' || pathname === '/ejemplos/crm/') return ejemplosPage()
  if (pathname === '/ejemplos/erp' || pathname === '/ejemplos/erp/') return ejemplosErpPage()
  if (pathname === '/ejemplos/correo' || pathname === '/ejemplos/correo/') return ejemplosCorreoPage()
  if (pathname === '/ejemplos/clientes' || pathname === '/ejemplos/clientes/') return ejemplosClientesPage()
  return labsPage()
}
import { partnersPage } from './pages/partners.js'
import { labsPage } from './pages/labs.js'
import { notFoundPage } from './pages/not-found.js'
import { ejemplosIndexPage, ejemplosPage, ejemplosErpPage, ejemplosCorreoPage, ejemplosClientesPage } from './pages/ejemplos.js'

const routeDefinitions = [
  { paths: ['', '/'], title: 'NexusG — Comprensión operativa', render: labsPage },
  { paths: ['/partners', '/partners/'], title: 'NexusG — Partners', render: partnersPage },
  { paths: ['/ejemplos', '/ejemplos/'], title: 'NexusG — Ejemplos', render: ejemplosIndexPage },
  { paths: ['/ejemplos/crm', '/ejemplos/crm/'], title: 'NexusG — Ejemplos', render: ejemplosPage },
  { paths: ['/ejemplos/erp', '/ejemplos/erp/'], title: 'NexusG — Ejemplos', render: ejemplosErpPage },
  { paths: ['/ejemplos/correo', '/ejemplos/correo/'], title: 'NexusG — Ejemplos', render: ejemplosCorreoPage },
  { paths: ['/ejemplos/clientes', '/ejemplos/clientes/'], title: 'NexusG — Ejemplos', render: ejemplosClientesPage }
]

export const getRoute = pathname => routeDefinitions.find(route => route.paths.includes(pathname)) ?? null

export const isKnownRoute = pathname => Boolean(getRoute(pathname))

export const pageTitle = pathname => getRoute(pathname)?.title ?? 'NexusG — Página no encontrada'

export const renderRoute = pathname => getRoute(pathname)?.render() ?? notFoundPage()

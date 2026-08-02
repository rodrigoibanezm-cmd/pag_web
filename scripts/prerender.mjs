import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { renderRoute } from '../src/router.js'

const origin = 'https://www.nexusg.cl'
const routes = [
  {
    path: '/',
    file: 'index.html',
    title: 'NexusG — Comprensión operativa',
    description: 'NexusG conecta los sistemas existentes de una empresa y descubre las situaciones que requieren intervención.'
  },
  {
    path: '/partners',
    file: 'partners/index.html',
    title: 'NexusG — Partners',
    description: 'NexusG permite a partners tecnológicos incorporar una nueva capacidad sobre los sistemas existentes de sus clientes.'
  },
  {
    path: '/ejemplos',
    file: 'ejemplos/index.html',
    title: 'NexusG — Ejemplos',
    description: 'Ejemplos ilustrativos de cómo NexusG convierte señales distribuidas en situaciones priorizadas, evidencia y acciones.'
  },
  {
    path: '/ejemplos/crm',
    file: 'ejemplos/crm/index.html',
    title: 'NexusG — Ejemplo CRM',
    description: 'Ejemplo ilustrativo de cómo NexusG identifica deterioro en oportunidades comerciales y presenta una situación priorizada.'
  },
  {
    path: '/ejemplos/erp',
    file: 'ejemplos/erp/index.html',
    title: 'NexusG — Ejemplo ERP y margen',
    description: 'Ejemplo ilustrativo de cómo NexusG relaciona facturación, costos y carga operativa para detectar deterioro de rentabilidad.'
  },
  {
    path: '/ejemplos/correo',
    file: 'ejemplos/correo/index.html',
    title: 'NexusG — Ejemplo operación y correo',
    description: 'Ejemplo ilustrativo de cómo NexusG relaciona conversaciones para reconstruir el flujo operativo que explica resultados, demoras y bloqueos.'
  },
  {
    path: '/ejemplos/clientes',
    file: 'ejemplos/clientes/index.html',
    title: 'NexusG — Ejemplo experiencia de clientes',
    description: 'Ejemplo ilustrativo de cómo NexusG relaciona encuestas, reseñas, reclamos y comentarios para detectar patrones de deterioro en la experiencia de clientes.'
  }
]

const template = await readFile(new URL('../index.html', import.meta.url), 'utf8')
const dist = new URL('../dist/', import.meta.url)

await rm(dist, { recursive: true, force: true })
await mkdir(dist, { recursive: true })

for (const directory of ['styles', 'src', 'assets']) {
  try {
    await cp(new URL(`../${directory}/`, import.meta.url), new URL(`../dist/${directory}/`, import.meta.url), { recursive: true })
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
}

for (const file of ['robots.txt', 'sitemap.xml', 'llms.txt']) {
  try {
    await cp(new URL(`../${file}`, import.meta.url), new URL(`../dist/${file}`, import.meta.url))
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
}

try {
  await cp(new URL('../public/reference.txt', import.meta.url), new URL('../dist/reference.txt', import.meta.url))
} catch (error) {
  if (error.code !== 'ENOENT') throw error
}

for (const route of routes) {
  const url = `${origin}${route.path}`
  const metadata = [
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="NexusG" />`,
    `<meta property="og:title" content="${route.title}" />`,
    `<meta property="og:description" content="${route.description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${route.title}" />`,
    `<meta name="twitter:description" content="${route.description}" />`,
    `<script type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'NexusG',
      url: origin
    })}</script>`
  ].join('\n  ')

  const renderedRoute = renderRoute(route.path)
    .replace('https://github.com/rodrigoibanezm-cmd/nexusg-reference', '/reference.txt')

  const html = template
    .replace('<title>NexusG</title>', `<title>${route.title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${route.description}" />`)
    .replace('</head>', `  ${metadata}\n</head>`)
    .replace('<div id="app"></div>', `<div id="app">${renderedRoute}</div>`)

  const target = new URL(`../dist/${route.file}`, import.meta.url)
  await mkdir(new URL('.', target), { recursive: true })
  await writeFile(target, html)
}

import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { renderRoute } from '../src/router.js'

const origin = 'https://nexusg.cl'
const routes = [
  {
    path: '/',
    file: 'index.html',
    title: 'NexusG — Qué',
    description: 'NexusG trabaja sobre la información que ya existe en una empresa para responder preguntas complejas y detectar situaciones que merecen atención.'
  },
  {
    path: '/como',
    file: 'como/index.html',
    title: 'NexusG — Cómo',
    description: 'Conoce cómo NexusG conecta fuentes existentes, comprende su contexto y prepara evidencia y recomendaciones útiles.'
  },
  {
    path: '/partners',
    file: 'partners/index.html',
    title: 'NexusG — Partners',
    description: 'NexusG permite a partners tecnológicos incorporar una nueva capacidad sobre los sistemas existentes de sus clientes.'
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

  const html = template
    .replace('<title>NexusG</title>', `<title>${route.title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${route.description}" />`)
    .replace('</head>', `  ${metadata}\n</head>`)
    .replace('<div id="app"></div>', `<div id="app">${renderRoute(route.path)}</div>`)

  const target = new URL(`../dist/${route.file}`, import.meta.url)
  await mkdir(new URL('.', target), { recursive: true })
  await writeFile(target, html)
}

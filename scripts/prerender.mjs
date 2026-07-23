import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { renderRoute } from '../src/router.js'

const routes = [
  { path: '/', file: 'index.html', title: 'NexusG — Qué' },
  { path: '/como', file: 'como/index.html', title: 'NexusG — Cómo' },
  { path: '/partners', file: 'partners/index.html', title: 'NexusG — Partners' }
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

for (const file of ['robots.txt', 'sitemap.xml']) {
  try {
    await cp(new URL(`../${file}`, import.meta.url), new URL(`../dist/${file}`, import.meta.url))
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
}

for (const route of routes) {
  const html = template
    .replace('<title>NexusG</title>', `<title>${route.title}</title>`)
    .replace('<div id="app"></div>', `<div id="app">${renderRoute(route.path)}</div>`)

  const target = new URL(`../dist/${route.file}`, import.meta.url)
  await mkdir(new URL('.', target), { recursive: true })
  await writeFile(target, html)
}

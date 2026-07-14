import { sources } from '../data/sources.js'

const card = ([name, text]) => `<article class="card"><h3>${name}</h3><p>${text}</p></article>`

export const sourcesSection = () => `
<section id="fuentes" class="shell">
  <div class="section-head"><p class="eyebrow">DÓNDE EMPIEZA</p><h2>Puedes comenzar por una sola fuente</h2></div>
  <div class="grid3">${sources.map(card).join('')}</div>
</section>`

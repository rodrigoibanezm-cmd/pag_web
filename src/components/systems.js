import { sources } from '../data/sources.js'

const system = ([name,, tools]) => `<div class="system"><b>${name}</b><span>${tools}</span></div>`

export const systems = () => `
<section id="empezar" class="shell"><div class="modular">
  <div class="modular-copy"><p class="eyebrow">EMPIEZA DONDE TENGA SENTIDO</p>
    <h2>No necesitas conectar toda la empresa</h2>
    <p>Puedes comenzar por una sola fuente e incorporar otras cuando aparezcan nuevas preguntas</p>
  </div>
  <div class="systems">${sources.map(system).join('')}<div class="systems-note">Puedes ampliar el alcance cuando tenga sentido</div></div>
</div></section>`

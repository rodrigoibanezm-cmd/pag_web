import { pressureBoard } from './pressure-board.js'
import { workspace } from './workspace.js'

export const jobs = () => `
<section id="trabajos" class="shell">
  <div class="section-head">
    <p class="eyebrow">DOS FORMAS DE TRABAJAR</p>
    <h2>El mismo conocimiento. Dos necesidades distintas.</h2>
    <p>Un gerente necesita saber qué merece atención. Un analista necesita comprender la situación y convertirla en trabajo.</p>
  </div>
  <div class="jobs">${pressureBoard()}${workspace()}</div>
</section>`
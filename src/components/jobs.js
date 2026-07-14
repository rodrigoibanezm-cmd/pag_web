import { pressureBoard } from './pressure-board.js'
import { workspace } from './workspace.js'

export const jobs = () => `
<section id="trabajos" class="shell">
  <div class="section-head"><p class="eyebrow">DOS TRABAJOS</p><h2>Saber dónde mirar y entender qué está pasando</h2></div>
  <div class="jobs">${pressureBoard()}${workspace()}</div>
</section>`

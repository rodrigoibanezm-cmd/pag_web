import { questions } from '../data/questions.js'

const card = ([tag, text, tone]) => `
<article class="question ${tone}">
  <span class="tag">${tag}</span><h3>${text}</h3>
</article>`

export const questionsSection = () => `
<section id="preguntas" class="shell">
  <div class="section-head"><p class="eyebrow">PREGUNTAS</p><h2>Preguntas que normalmente toman horas o días</h2></div>
  <div class="question-grid">${questions.map(card).join('')}</div>
</section>`

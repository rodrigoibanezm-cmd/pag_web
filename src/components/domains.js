import { domains } from '../data/domains.js'

const card = ([name, text, items, tone]) => `
<article class="card ${tone}"><h3>${name}</h3><p>${text}</p>
  <ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>
</article>`

export const domainsSection = () => `
<section id="dominios" class="shell">
  <div class="section-head"><p class="eyebrow">QUÉ COMPRENDE</p><h2>Cada sistema exige una comprensión distinta</h2></div>
  <div class="grid3">${domains.map(card).join('')}</div>
</section>`

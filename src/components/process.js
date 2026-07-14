const steps = [
  ['Lee','Toma la información disponible sin modificar los sistemas de origen'],
  ['Relaciona','Conecta entidades historial comportamiento contexto y evidencia'],
  ['Evalúa','Aplica reglas y criterios propios del dominio para distinguir señal de ruido'],
  ['Recomienda','Entrega una conclusión concreta que alguien puede ejecutar']
]

export const processSection = () => `
<section id="trabajo" class="shell">
  <div class="section-head"><p class="eyebrow">CÓMO TRABAJA</p><h2>De información dispersa a una recomendación</h2></div>
  <div class="grid4">${steps.map(([name,text]) => `<article class="card"><h3>${name}</h3><p>${text}</p></article>`).join('')}</div>
</section>`

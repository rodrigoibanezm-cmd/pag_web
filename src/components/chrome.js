export const brand = () => '<a class="brand" data-route href="/"><span class="brand-mark"></span>NEXUSG</a>'

const queLinks = [
  ['#preguntas', 'Preguntas'],
  ['#respuesta', 'Una respuesta'],
  ['#trabajos', 'Dos trabajos'],
  ['#empezar', 'Por dónde empezar']
]

const comoLinks = [
  ['#fuentes', 'Dónde empieza'],
  ['#dominios', 'Qué comprende'],
  ['#trabajo', 'Cómo trabaja'],
  ['#salidas', 'Dos formas de uso']
]

const links = items => items.map(([href, label]) => `<a href="${href}">${label}</a>`).join('')

export const nav = current => `
<header class="topbar"><nav class="nav shell">
  ${brand()}
  <div class="navlinks">
    ${links(current === 'como' ? comoLinks : queLinks)}
    <span class="nav-separator" aria-hidden="true"></span>
    <a href="#piloto">Piloto</a>
  </div>
</nav></header>`

export const footer = () => `<footer class="shell">${brand()}<span>PressureBoard · Workspace</span><span>nexusg.cl</span></footer>`
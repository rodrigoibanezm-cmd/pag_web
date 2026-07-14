export const brand = () => '<a class="brand" data-route href="/"><span class="brand-mark"></span>NEXUSG</a>'

export const nav = current => `
<header class="topbar"><nav class="nav shell">
  ${brand()}
  <div class="navlinks">
    <a data-route href="/" class="${current === 'que' ? 'active' : ''}">Qué</a>
    <a data-route href="/como" class="${current === 'como' ? 'active' : ''}">Cómo</a>
    <a class="outline" href="#piloto">Piloto</a>
  </div>
</nav></header>`

export const footer = () => `<footer class="shell">${brand()}<span>PressureBoard · Workspace</span><span>nexusg.cl</span></footer>`

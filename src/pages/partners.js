import { brand, footer } from '../components/chrome.js'

const partnerNav = () => `
<header class="topbar"><nav class="nav shell">
  ${brand()}
  <div class="navlinks">
    <a href="#oportunidad">La oportunidad</a>
    <a href="#productos">Qué puedes ofrecer</a>
    <a href="#casos">Casos de uso</a>
    <a href="#alianza">La alianza</a>
    <span class="nav-separator" aria-hidden="true"></span>
    <a data-route href="/">Conocer NexusG</a>
  </div>
  <details class="mobile-nav"><summary>Índice <span>＋</span></summary>
    <div class="mobile-nav-links">
      <a href="#oportunidad">La oportunidad</a><a href="#productos">Qué puedes ofrecer</a>
      <a href="#casos">Casos de uso</a><a href="#alianza">La alianza</a>
      <a data-route href="/">Conocer NexusG</a>
    </div>
  </details>
</nav></header>`

const card = (title, text) => `<article class="partner-card"><h3>${title}</h3><p>${text}</p></article>`

export const partnersPage = () => `
${partnerNav()}
<main id="top" class="partners-page">
  <section class="partner-hero"><div class="shell partner-hero-grid">
    <div><p class="eyebrow">Programa de Partners</p><h1>Una nueva capacidad para los clientes que ya conoces.</h1></div>
    <div class="partner-hero-copy"><p>NexusG trabaja sobre la información que ya existe en una empresa para ayudarla a entender qué está ocurriendo, qué merece atención y dónde conviene profundizar.</p><p>El programa permite incorporar esa capacidad a tu oferta sin desarrollar una plataforma propia.</p></div>
  </div></section>

  <section id="oportunidad"><div class="shell partner-split">
    <p class="eyebrow">La oportunidad</p><div><h2>Después de implementar, todavía queda mucho por entender.</h2><p>ERP, CRM, comercio electrónico, correo y documentos ya registran gran parte de lo que ocurre en una empresa. El problema aparece cuando esa información queda repartida entre sistemas, reportes y conversaciones.</p><p>NexusG permite volver sobre clientes ya implementados con una capacidad nueva: comprender mejor la operación que esos sistemas ya sostienen.</p></div>
  </div></section>

  <section id="productos" class="partner-paper"><div class="shell">
    <div class="section-head"><p class="eyebrow">Qué puedes ofrecer</p><h2>Dos productos sobre una misma comprensión de la empresa.</h2></div>
    <div class="partner-product-grid">
      ${card('Workspace','Permite investigar situaciones complejas, cruzar información y trabajar sobre preguntas concretas del negocio.')}
      ${card('PressureBoard','Revisa continuamente la operación y presenta las situaciones que merecen atención antes de que alguien tenga que buscarlas.')}
    </div><a class="partner-link" data-route href="/">Conocer el producto →</a>
  </div></section>

  <section id="casos"><div class="shell">
    <div class="section-head"><p class="eyebrow">Casos de uso</p><h2>Situaciones que probablemente ya existen en tu cartera.</h2></div>
    <div class="partner-cases">
      ${card('Implementadores de ERP','Clientes con información suficiente para operar, pero que todavía dependen de reportes manuales para entender qué está cambiando.')}
      ${card('Partners de CRM','Equipos comerciales con datos, actividades y oportunidades registradas, pero sin una lectura continua de dónde intervenir primero.')}
      ${card('Shopify y e-commerce','Negocios que venden y acumulan datos de pedidos, clientes y productos, pero necesitan conectarlos con inventario, márgenes, operación y postventa.')}
      ${card('Integradores y automatizadores','Clientes con múltiples sistemas conectados, pero sin una capa común que construya contexto y mantenga una lectura persistente del negocio.')}
    </div>
  </div></section>

  <section id="alianza" class="partner-dark"><div class="shell partner-dark-grid">
    <div><p class="eyebrow">La alianza</p><h2>Tú conoces al cliente. NexusG aporta el producto.</h2></div>
    <div><p>El partner identifica dónde puede ser útil, conserva la relación comercial y acompaña al cliente.</p><p>NexusG aporta la plataforma, la implementación, el soporte técnico y la evolución del producto.</p><p>Así puedes seguir aportando valor después de la implementación, sin esperar un nuevo proyecto ni aumentar tu carga de desarrollo.</p></div>
  </div></section>

  <section class="partner-tech"><div class="shell partner-split">
    <p class="eyebrow">Respaldo técnico</p><div><h2>La evaluación comercial puede avanzar con respaldo técnico.</h2><p>Cuando una oportunidad lo requiere, revisamos integración, arquitectura, seguridad, operación y alcance de implementación junto al partner.</p></div>
  </div></section>

  <section id="contacto" class="partner-contact"><div class="shell"><p class="eyebrow">Evaluación inicial</p><h2>Revisemos si NexusG tiene sentido para tus clientes.</h2><p>No necesitas llegar con una propuesta cerrada. La primera conversación sirve para revisar tu cartera, el tipo de proyectos que implementas y dónde podría existir una oportunidad real.</p><a class="button" href="mailto:contacto@nexusg.cl?subject=Programa%20de%20Partners%20NexusG">Solicitar una reunión</a></div></section>
</main>
${footer()}`
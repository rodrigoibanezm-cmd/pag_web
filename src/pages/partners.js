import { brand, footer } from '../components/chrome.js'

const partnerNav = () => `
<header class="topbar"><nav class="nav shell">
  ${brand()}
  <div class="navlinks">
    <a href="#oportunidad">La oportunidad</a><a href="#productos">El producto</a>
    <a href="#casos">Dónde entra</a><a href="#alianza">La alianza</a>
    <span class="nav-separator" aria-hidden="true"></span><a data-route href="/">Conocer NexusG</a>
  </div>
  <details class="mobile-nav"><summary>Índice <span>＋</span></summary>
    <div class="mobile-nav-links"><a href="#oportunidad">La oportunidad</a><a href="#productos">El producto</a><a href="#casos">Dónde entra</a><a href="#alianza">La alianza</a><a data-route href="/">Conocer NexusG</a></div>
  </details>
</nav></header>`

const card = (title, text) => `<article class="partner-card"><h3>${title}</h3><p>${text}</p></article>`
const signal = (label, text) => `<article class="partner-signal"><span>${label}</span><p>${text}</p></article>`

const productExample = (type, title, text, rows) => `
<article class="partner-product ${type}">
  <div class="product-copy"><p class="eyebrow">${type === 'workspace' ? 'Workspace' : 'PressureBoard'}</p><h3>${title}</h3><p>${text}</p></div>
  <div class="product-window">
    <div class="window-bar"><i></i><i></i><i></i></div>
    ${rows.map(([label, value]) => `<div class="window-row"><span>${label}</span><strong>${value}</strong></div>`).join('')}
  </div>
</article>`

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
    <div class="section-head"><p class="eyebrow">El producto</p><h2>Dos formas de trabajar sobre una misma comprensión de la empresa.</h2></div>
    <div class="partner-products">
      ${productExample('workspace','Investigar una situación concreta.','Workspace permite preguntar, cruzar información y construir una respuesta con contexto del negocio.',[['Pregunta','¿Por qué cayó el margen en tiendas propias?'],['Cruza','Ventas · inventario · descuentos · correo'],['Entrega','Hallazgos, evidencia y próximos pasos']])}
      ${productExample('pressureboard','Saber dónde mirar primero.','PressureBoard revisa continuamente la operación y presenta las situaciones que merecen atención.',[['Presión','Quiebre de stock afecta campaña activa'],['Por qué ahora','Ventas suben y reposición sigue atrasada'],['Qué hacer','Revisar compra y redistribución hoy']])}
    </div>
    <div class="partner-combination"><p>Se pueden ofrecer por separado.</p><p>También pueden trabajar juntos: PressureBoard detecta dónde mirar y Workspace permite profundizar.</p><a class="partner-link" data-route href="/">Ver el producto completo →</a></div>
  </div></section>

  <section id="casos"><div class="shell">
    <div class="section-head"><p class="eyebrow">Dónde entra</p><h2>Problemas que probablemente ya existen en tu cartera.</h2></div>
    <div class="partner-cases">
      ${card('La gerencia recibe reportes, pero sigue sin saber dónde mirar.','Los datos existen. La lectura sigue dependiendo de reuniones, planillas y personas que conectan la información manualmente.')}
      ${card('El CRM está implementado, pero la priorización comercial sigue siendo reactiva.','Hay oportunidades, actividades y correos registrados. Falta una lectura continua de dónde intervenir primero.')}
      ${card('E-commerce crece, pero inventario, margen y postventa se leen por separado.','Los pedidos muestran una parte. La operación real aparece cuando se conectan ventas, stock, costos y conversaciones.')}
      ${card('El cliente tiene varios sistemas conectados, pero no una comprensión común.','La integración mueve datos. NexusG construye contexto para que esos datos puedan convertirse en decisiones.')}
    </div>
  </div></section>

  <section class="partner-proof"><div class="shell">
    <div class="section-head"><p class="eyebrow">Respaldo técnico</p><h2>El producto puede entrar sin improvisar una arquitectura para cada cliente.</h2></div>
    <div class="partner-signals">
      ${signal('Integraciones','ERP, CRM, correo, documentos, bases de datos y APIs.')}
      ${signal('Arquitectura','Conectores modulares y separación entre lógica determinística y trabajo semántico.')}
      ${signal('Seguridad','Accesos por usuario, permisos por fuente y trazabilidad de la evidencia utilizada.')}
      ${signal('Despliegue','Implementación cloud y evaluación de alternativas privadas cuando el caso lo requiere.')}
    </div>
    <a class="partner-link" data-route href="/como">Ver cómo funciona →</a>
  </div></section>

  <section id="alianza" class="partner-dark"><div class="shell partner-dark-grid">
    <div><p class="eyebrow">La alianza</p><h2>Dos maneras de originar una oportunidad.</h2></div>
    <div class="partner-models"><div><strong>El partner detecta el caso.</strong><p>Identifica una necesidad en su cartera, abre la conversación y participa de la oportunidad.</p></div><div><strong>NexusG acompaña una cuenta.</strong><p>Cuando aparece una oportunidad compatible, el partner participa por su conocimiento del cliente, sus sistemas y su operación.</p></div><p class="partner-close">En ambos casos, el partner conserva la relación comercial. NexusG aporta producto, implementación, soporte técnico y evolución.</p></div>
  </div></section>

  <section class="partner-contact"><div class="shell"><p class="eyebrow">Programa de Partners</p><h2>Hay clientes donde esta conversación ya puede tener sentido.</h2><p>La página no intenta definirlos por adelantado. El punto de partida puede ser una cuenta, una industria o un problema que ya estés viendo.</p><a class="partner-link" href="mailto:contacto@nexusg.cl?subject=Programa%20de%20Partners%20NexusG">contacto@nexusg.cl →</a></div></section>
</main>
${footer()}`
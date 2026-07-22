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
    <div><p class="eyebrow">Programa de Partners</p><h1>Una nueva capacidad sobre los sistemas que tus clientes ya utilizan.</h1></div>
    <div class="partner-hero-copy"><p>NexusG conecta la información distribuida entre ERP, CRM, correo, documentos y otras fuentes para construir una comprensión persistente de la empresa.</p><p>Para un partner, esto abre una conversación posterior a la implementación: más valor sobre la infraestructura existente, nuevas líneas de servicio y una relación que puede continuar después del proyecto inicial.</p></div>
  </div></section>

  <section id="oportunidad"><div class="shell partner-split">
    <p class="eyebrow">La oportunidad</p><div><h2>La implementación termina. La necesidad de entender la empresa no.</h2><p>Los sistemas registran gran parte de lo que ocurre, pero esa información suele quedar repartida entre plataformas, reportes y conversaciones. La integración resuelve el acceso. No necesariamente resuelve la lectura.</p><p>NexusG trabaja sobre esa capa posterior: permite volver sobre clientes ya implementados con una capacidad adicional, sin reemplazar los sistemas que ya operan.</p></div>
  </div></section>

  <section id="productos" class="partner-paper"><div class="shell">
    <div class="section-head"><p class="eyebrow">El producto</p><h2>Un motor. Dos interfaces de trabajo.</h2></div>
    <div class="partner-products">
      ${productExample('workspace','Analizar una situación concreta.','Workspace expone el motor mediante un MCP para consultar, cruzar información y construir una respuesta con contexto del negocio.',[['Pregunta','¿Por qué cayó el margen en tiendas propias?'],['Cruza','Ventas · inventario · descuentos · correo'],['Entrega','Hallazgos, evidencia y próximos pasos']])}
      ${productExample('pressureboard','Ver qué merece atención primero.','PressureBoard es una aplicación para ChatGPT que presenta las situaciones priorizadas por el motor.',[['Presión','Quiebre de stock afecta campaña activa'],['Por qué ahora','Ventas suben y reposición sigue atrasada'],['Qué hacer','Revisar compra y redistribución hoy']])}
    </div>
    <div class="partner-combination"><p>Se pueden implementar por separado o como parte de una misma solución.</p><p>Ambas trabajan sobre la misma comprensión persistente de la empresa.</p><a class="partner-link" data-route href="/">Ver el producto →</a></div>
  </div></section>

  <section id="casos"><div class="shell">
    <div class="section-head"><p class="eyebrow">Dónde entra</p><h2>Situaciones que aparecen después de que los sistemas ya están funcionando.</h2></div>
    <div class="partner-cases">
      ${card('ERP','La operación está registrada, pero entender qué cambió, qué se desvió y qué requiere atención todavía depende de reportes y análisis manual. NexusG agrega una capa de lectura sobre esa información. Habla con los datos que ya existen.')}
      ${card('CRM','Las oportunidades, actividades y conversaciones están disponibles. La priorización comercial sigue dependiendo de que alguien conecte esas señales a tiempo. NexusG mantiene esa lectura en contexto.')}
      ${card('Comercio electrónico','Ventas, inventario, margen, logística y postventa suelen analizarse por separado. NexusG permite leerlos como partes de una misma operación.')}
      ${card('Integración y automatización','Conectar sistemas mueve datos. NexusG utiliza esos datos para construir contexto, detectar tensiones y sostener una comprensión común del negocio.')}
    </div>
  </div></section>

  <section class="partner-proof"><div class="shell">
    <div class="section-head"><p class="eyebrow">Base técnica</p><h2>Una capacidad que puede incorporarse sin rediseñar la operación del cliente.</h2></div>
    <div class="partner-signals">
      ${signal('Integraciones','ERP, CRM, correo, documentos, bases de datos y APIs existentes.')}
      ${signal('Arquitectura','Conectores modulares, motor independiente y separación entre lógica determinística y trabajo semántico.')}
      ${signal('Seguridad','Permisos por fuente, acceso mínimo necesario, trazabilidad de evidencia y control por usuario.')}
      ${signal('Despliegue','Implementación cloud y evaluación de alternativas privadas cuando el caso lo requiere.')}
    </div>
    <a class="partner-link" data-route href="/como">Ver cómo funciona →</a>
  </div></section>

  <section id="alianza" class="partner-dark"><div class="shell partner-dark-grid">
    <div><p class="eyebrow">La alianza</p><h2>El partner mantiene la relación. NexusG aporta el producto.</h2></div>
    <div class="partner-models"><div><strong>El partner abre la conversación.</strong><p>Puede incorporar NexusG a una relación existente cuando identifica una necesidad compatible.</p></div><div><strong>NexusG acompaña el proceso.</strong><p>Aporta producto, implementación, soporte técnico y evolución, sin desplazar al partner de la cuenta.</p></div><p class="partner-close">La forma comercial y operativa de cada alianza se define caso a caso.</p></div>
  </div></section>

  <section class="partner-contact"><div class="shell"><p class="eyebrow">NexusG</p><h2>Conversemos.</h2><a class="partner-link" href="mailto:contacto@nexusg.cl?subject=Conversemos%20sobre%20NexusG">contacto@nexusg.cl →</a></div></section>
</main>
${footer()}`
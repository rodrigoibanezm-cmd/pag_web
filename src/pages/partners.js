import { brand, footer } from '../components/chrome.js'

const partnerNav = () => `
<header class="topbar"><nav class="nav shell">
  ${brand()}
  <div class="navlinks">
    <a href="#oportunidad">La oportunidad</a><a href="#oferta">Qué puede ofrecer</a>
    <a href="#alianza">La alianza</a><a href="#proceso">Cómo comienza</a>
    <span class="nav-separator" aria-hidden="true"></span><a data-route href="/">Conocer NexusG</a><a data-route href="/ejemplos">Ejemplos</a>
  </div>
  <details class="mobile-nav"><summary>Índice <span>＋</span></summary>
    <div class="mobile-nav-links"><a href="#oportunidad">La oportunidad</a><a href="#oferta">Qué puede ofrecer</a><a href="#alianza">La alianza</a><a href="#proceso">Cómo comienza</a><a data-route href="/">Conocer NexusG</a><a data-route href="/ejemplos">Ejemplos</a></div>
  </details>
</nav></header>`

const card = (title, text) => `<article class="partner-card"><h3>${title}</h3><p>${text}</p></article>`
const signal = (label, text) => `<article class="partner-signal"><span>${label}</span><p>${text}</p></article>`

export const partnersPage = () => `
${partnerNav()}
<main id="top" class="partners-page">
  <section class="partner-hero"><div class="shell partner-hero-grid">
    <div><p class="eyebrow">Programa de Partners</p><h1>Una nueva capacidad, sin tocar ni reemplazar sistemas ya implementados.</h1></div>
    <div class="partner-hero-copy"><p>NexusG trabaja sobre la información distribuida entre ERP, CRM, correo, documentos y otras fuentes para construir situaciones que merecen atención, explicar qué las provoca y entregar evidencia para actuar.</p><p>Para un partner, esto abre una conversación posterior a la implementación: más valor sobre la infraestructura existente, nuevas líneas de servicio y continuidad después del proyecto inicial.</p></div>
  </div></section>

  <section id="oportunidad"><div class="shell partner-split">
    <p class="eyebrow">La oportunidad</p><div><h2>La implementación termina. La necesidad de entender la empresa no.</h2><p>Los sistemas registran gran parte de lo que ocurre, pero esa información suele quedar repartida entre plataformas, reportes y conversaciones. La integración resuelve el acceso. No necesariamente construye comprensión.</p><p>NexusG permite volver sobre clientes ya implementados con una capacidad adicional, sin reemplazar los sistemas que ya operan ni iniciar una transformación completa desde cero.</p></div>
  </div></section>

  <section id="oferta" class="partner-paper"><div class="shell">
    <div class="section-head"><p class="eyebrow">Qué puede ofrecer el partner</p><h2>Una capacidad permanente para comprender, priorizar e investigar la operación.</h2></div>
    <div class="partner-hero-copy"><p>El cliente no compra una integración aislada ni una consultoría puntual. Incorpora una capacidad conectada a sus fuentes existentes para investigar situaciones en Workspace y ver qué requiere atención en PressureBoard.</p></div>
    <div class="partner-cases">
      ${card('Ventas y CRM','Detectar oportunidades que pierden tracción, riesgos concentrados y acciones que requieren intervención antes del cierre.')}
      ${card('Rentabilidad y ERP','Relacionar ingresos, costos y carga operativa para identificar dónde el crecimiento está deteriorando margen o caja.')}
      ${card('Operación y correo','Reconstruir bloqueos, dependencias y compromisos distribuidos entre conversaciones que normalmente se revisarían por separado.')}
      ${card('Experiencia de clientes','Detectar patrones de deterioro entre encuestas, reseñas, reclamos y comentarios antes de que el efecto sea evidente en el resultado.')}
    </div>
    <a class="partner-link" data-route href="/ejemplos">Ver ejemplos completos →</a>
  </div></section>

  <section id="alianza" class="partner-dark"><div class="shell">
    <div class="section-head"><p class="eyebrow">La alianza</p><h2>El partner mantiene la relación. NexusG aporta el producto.</h2></div>
    <div class="partner-cases">
      ${card('El partner','Identifica la oportunidad, comprende el contexto del cliente y mantiene la relación comercial y de confianza.')}
      ${card('NexusG','Evalúa factibilidad, aporta producto e implementación, y entrega soporte técnico y evolución.')}
      ${card('El cliente recibe','Una capacidad operativa conectada a sus fuentes, con Workspace y/o PressureBoard, evidencia y trazabilidad.')}
    </div>
    <p class="partner-close">La alianza puede adaptarse al modelo comercial del partner: identificación de oportunidades, implementación conjunta, continuidad de servicio y evolución sobre el cliente.</p>
  </div></section>

  <section id="proceso"><div class="shell">
    <div class="section-head"><p class="eyebrow">Cómo comienza</p><h2>Busquemos una oportunidad juntos.</h2></div>
    <div class="partner-hero-copy"><p>Comencemos con un cliente, una fuente y una pregunta concreta.</p><p>Evaluamos si la información disponible permite construir una capacidad útil antes de pensar en una implementación más amplia.</p></div>
    <div class="partner-signals">
      ${signal('1 · Oportunidad','El partner identifica junto al cliente una situación donde hoy cuesta comprender qué está ocurriendo o decidir cómo actuar.')}
      ${signal('2 · Evaluación','NexusG revisa las fuentes disponibles, el contexto y la factibilidad para determinar si esa situación puede resolverse con la información existente.')}
      ${signal('3 · Alcance','Se define la primera capacidad: qué fuentes conectar, qué preguntas responder y qué situaciones construir.')}
      ${signal('4 · Implementación','NexusG implementa la capacidad y el partner acompaña la relación con el cliente.')}
      ${signal('5 · Evolución','A partir de los resultados, la capacidad puede extenderse a nuevas fuentes, nuevas preguntas y nuevos dominios.')}
    </div>
  </div></section>

  <section class="partner-proof"><div class="shell">
    <div class="section-head"><p class="eyebrow">Respaldo técnico</p><h2>Una capacidad que puede incorporarse sin rediseñar la operación del cliente.</h2></div>
    <div class="partner-signals">
      ${signal('Integraciones','Se conecta con ERP, CRM, correo, documentos, bases de datos y APIs existentes.')}
      ${signal('Arquitectura','Separa la lógica controlada del trabajo semántico para combinar control, flexibilidad y trazabilidad.')}
      ${signal('Seguridad','Opera con permisos por fuente, acceso mínimo necesario, trazabilidad de evidencia y control por usuario.')}
      ${signal('Despliegue','Implementación cloud y evaluación de alternativas privadas cuando el caso lo requiere.')}
    </div>
    <a class="partner-link" data-route href="/como">Ver cómo funciona →</a>
  </div></section>

  <section class="partner-contact"><div class="shell"><p class="eyebrow">NexusG para partners</p><h2>Conversemos sobre una oportunidad concreta.</h2><a class="partner-link" href="mailto:contacto@nexusg.cl?subject=Oportunidad%20de%20partner%20para%20NexusG">contacto@nexusg.cl →</a></div></section>
</main>
${footer()}`
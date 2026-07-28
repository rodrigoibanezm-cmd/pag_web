const section = (id, eyebrow, title, body, extraClass = '') => `
<section id="${id}" class="labs-section ${extraClass}">
  <div class="shell labs-grid">
    <p class="eyebrow">${eyebrow}</p>
    <div class="labs-copy">
      <h2>${title}</h2>
      ${body}
    </div>
  </div>
</section>`

export const labsPage = () => `
<header class="labs-nav">
  <div class="shell labs-nav-inner">
    <a class="labs-brand" href="/" data-route>NexusG</a>
    <nav class="labs-menu" aria-label="Secciones de la página">
      <a href="#problema">Problema</a>
      <a href="#que-es">Qué es</a>
      <a href="#producto">Producto</a>
      <a href="#como-funciona">Cómo funciona</a>
      <a href="#adaptacion">Adaptación</a>
      <a href="#arquitectura">Arquitectura</a>
      <a href="#datos">Datos</a>
      <a href="#partners">Partners</a>
      <a href="#faq">FAQ</a>
    </nav>
    <a class="button labs-nav-cta" href="mailto:contacto@nexusg.cl">Conversemos</a>
  </div>
</header>

<main id="top" class="labs-page">
  <section class="labs-hero">
    <div class="shell labs-hero-inner">
      <p class="eyebrow">Comprensión operativa</p>
      <h1>NexusG incorpora a tu empresa una capacidad permanente para comprender su operación y convertir esa comprensión en decisiones.</h1>
      <p class="labs-lead">Trabaja sobre ERP, CRM, correo, documentos y otras fuentes para detectar situaciones relevantes, explicar qué las provoca y responder con evidencia del negocio.</p>
      <div class="labs-hero-actions">
        <a class="button" href="mailto:contacto@nexusg.cl">Conversemos</a>
        <a class="labs-text-link" href="#problema">Ver cómo funciona</a>
      </div>
    </div>
  </section>

  ${section('problema', 'El problema', 'La información creció. El tiempo para comprenderla, no.', `
    <p>La operación produce más señales de las que una persona puede revisar entre reuniones, correos, reportes y sistemas.</p>
    <p>El trabajo real es simple de formular y difícil de resolver:</p>
    <blockquote>Necesito entender qué está pasando, dónde intervenir ahora y qué decisión tomar sin perder tiempo buscando información.</blockquote>
  `)}

  ${section('que-es', 'Qué es NexusG', 'Una capacidad permanente de comprensión', `
    <p>NexusG conecta evidencia distribuida, aplica reglas y cálculos controlados y mantiene contexto sobre la operación.</p>
    <div class="labs-pill-row">
      <span>Relaciona evidencia</span><span>Detecta situaciones</span><span>Explica causas</span><span>Apoya decisiones</span>
    </div>
    <p>No reemplaza los sistemas existentes. Agrega una nueva capacidad sobre ellos.</p>
  `)}

  ${section('producto', 'Qué entrega', 'Dos interfaces sobre la misma comprensión', `
    <div class="labs-cards">
      <article class="labs-card">
        <p class="labs-card-kicker">Atención</p>
        <h3>PressureBoard</h3>
        <p>Presenta las situaciones construidas por NexusG, explica por qué importan ahora y muestra qué acción conviene evaluar.</p>
      </article>
      <article class="labs-card">
        <p class="labs-card-kicker">Investigación</p>
        <h3>Workspace</h3>
        <p>Es la interfaz conversacional para investigar una situación y hacer preguntas sobre el negocio utilizando evidencia verificable.</p>
      </article>
    </div>
    <p>PressureBoard no detecta ni calcula: presenta el resultado construido por el motor. Workspace no es ChatGPT: puede operar desde clientes compatibles con MCP sobre distintos modelos de lenguaje.</p>
  `)}

  ${section('situaciones', 'Situaciones, no alertas', 'NexusG reúne señales dispersas en una explicación operativa', `
    <div class="labs-comparison">
      <div><span>Eventos aislados</span><p>Propuesta antigua, correos sin respuesta, sin próxima actividad y cierre próximo.</p></div>
      <div><span>Situación</span><p>Oportunidad de alto valor en riesgo de estancamiento que requiere intervención esta semana.</p></div>
    </div>
  `)}

  ${section('como-funciona', 'Cómo funciona', 'De las fuentes a una decisión', `
    <div class="labs-flow">
      <article><b>1</b><h3>Conecta</h3><p>ERP, CRM, correo, documentos, bases de datos y APIs.</p></article>
      <article><b>2</b><h3>Comprende</h3><p>Relaciona evidencia, reglas, cálculos y contexto del negocio.</p></article>
      <article><b>3</b><h3>Prioriza</h3><p>Construye situaciones y determina cuáles requieren atención.</p></article>
      <article><b>4</b><h3>Decide</h3><p>Presenta respuestas y evidencia para actuar con criterio.</p></article>
    </div>
  `)}

  ${section('adaptacion', 'Adaptación automática', 'El sistema descubre primero y pregunta solo cuando hace falta', `
    <p>Al conectar las fuentes, los motores del backend comienzan a analizar automáticamente la estructura de la operación, relacionar información, detectar patrones y actualizar un modelo operativo de la empresa.</p>
    <p>Cuando la evidencia no permite resolver una hipótesis con suficiente certeza, NexusG presenta preguntas específicas y cerradas para validarla antes de continuar.</p>
    <p>El proceso incluye comprobaciones parciales y una validación final antes de habilitar la capacidad. El usuario confirma o corrige resultados; no tiene que describir la empresa desde cero ni configurar manualmente cada caso de uso.</p>
  `)}

  ${section('casos', 'Casos de uso', 'Dónde puede aportar valor', `
    <div class="labs-use-grid">
      <article><h3>Ventas</h3><p>Oportunidades detenidas, negocios en riesgo y prioridades comerciales.</p></article>
      <article><h3>Margen</h3><p>Productos, clientes o tiendas donde crecer está deteriorando rentabilidad.</p></article>
      <article><h3>Stock</h3><p>Quiebres relevantes y reposiciones priorizadas por impacto.</p></article>
      <article><h3>Clientes</h3><p>Señales tempranas de riesgo y cambios de comportamiento.</p></article>
      <article><h3>Operación</h3><p>Compromisos detenidos, solicitudes envejecidas y fricciones entre áreas.</p></article>
      <article><h3>Correo</h3><p>Conversaciones críticas sin respuesta y compromisos pendientes.</p></article>
    </div>
  `)}

  ${section('arquitectura', 'Arquitectura', 'Lenguaje natural, ejecución controlada', `
    <p>El modelo de lenguaje interpreta la intención, selecciona capacidades y presenta resultados. Workspace permite esa interacción desde clientes compatibles con MCP; no depende de una interfaz ni de un proveedor específico.</p>
    <p>Las consultas, reglas, cálculos, validaciones y construcción de situaciones ocurren en componentes controlados del backend. PressureBoard solo presenta esas situaciones y su evidencia.</p>
    <p>Cada respuesta conserva trazabilidad sobre las capacidades ejecutadas, las fuentes consultadas y los cálculos aplicados.</p>
    <div class="labs-architecture-strip">
      <span>Intención</span><i>→</i><span>Capacidades</span><i>→</i><span>Fuentes y cálculos</span><i>→</i><span>Situaciones y evidencia</span><i>→</i><span>Workspace o PressureBoard</span>
    </div>
  `)}

  ${section('datos', 'Datos y propiedad', 'La información y el conocimiento generado permanecen bajo control del cliente', `
    <p>NexusG trabaja sobre las fuentes que la empresa ya utiliza y consulta únicamente la información necesaria para cada operación, con permisos definidos por fuente y por usuario.</p>
    <p>La configuración, el estado operativo, el modelo construido y los persistentes generados por Workspace pueden mantenerse en infraestructura controlada por el cliente.</p>
    <p>Así, no solo los datos originales, sino también el conocimiento y los artefactos generados durante el uso de NexusG permanecen como activos del cliente.</p>
    <p>Cada respuesta conserva trazabilidad sobre las fuentes consultadas, los motores ejecutados, las reglas aplicadas y los cálculos realizados.</p>
  `)}

  ${section('entregable', 'El entregable', 'Una capacidad operativa implementada', `
    <p>Incluye conexiones, capacidades de consulta y cálculo, reglas del negocio, detección de situaciones, evidencia, trazabilidad y acceso mediante Workspace, PressureBoard o ambos.</p>
    <p>No es una asesoría ni una colección de reportes.</p>
  `)}

  ${section('partners', 'Partners', 'Una nueva capacidad sobre los sistemas que tus clientes ya utilizan', `
    <p>El partner identifica la oportunidad y mantiene la relación con el cliente. NexusG aporta producto, implementación, soporte técnico y evolución.</p>
    <a class="labs-text-link" href="/partners" data-route>Conocer el modelo de alianza</a>
  `)}

  ${section('faq', 'Preguntas frecuentes', 'Lo esencial', `
    <div class="labs-faq">
      <details><summary>¿Qué compra el cliente?</summary><p>Una capacidad operativa para comprender la operación y convertir esa comprensión en decisiones.</p></details>
      <details><summary>¿Qué son Workspace y PressureBoard?</summary><p>Workspace es la interfaz conversacional para investigar situaciones. PressureBoard presenta las situaciones construidas por NexusG y explica por qué merecen atención.</p></details>
      <details><summary>¿Cómo se adapta NexusG a cada empresa?</summary><p>Los motores del backend analizan las fuentes conectadas y construyen automáticamente un modelo operativo. NexusG solo presenta preguntas específicas y cerradas cuando necesita validar una hipótesis o comprobar el resultado antes de habilitar la capacidad.</p></details>
      <details><summary>¿Dónde quedan los datos y los persistentes de Workspace?</summary><p>La configuración, el estado operativo, el modelo construido y los persistentes generados por Workspace pueden mantenerse en infraestructura controlada por el cliente. El conocimiento generado permanece como un activo del cliente.</p></details>
      <details><summary>¿Workspace es ChatGPT?</summary><p>No. Workspace puede operar desde clientes compatibles con MCP sobre distintos modelos de lenguaje.</p></details>
      <details><summary>¿PressureBoard calcula o detecta situaciones?</summary><p>No. Las situaciones, reglas y cálculos se construyen en capacidades controladas del backend. PressureBoard las presenta.</p></details>
      <details><summary>¿Dónde ocurren los cálculos?</summary><p>En motores especializados del backend, utilizando las definiciones válidas del negocio.</p></details>
      <details><summary>¿Cómo se audita una respuesta?</summary><p>Revisando las fuentes, evidencia, capacidades ejecutadas, cálculos y reglas aplicadas.</p></details>
      <details><summary>¿Reemplaza al ERP, CRM o BI?</summary><p>No. Trabaja sobre ellos y agrega una capacidad de comprensión y decisión.</p></details>
    </div>
  `)}

  <section class="labs-cta">
    <div class="shell labs-cta-inner">
      <p class="eyebrow">NexusG</p>
      <h2>Comprender la operación antes de decidir.</h2>
      <p>Conversemos sobre dónde esta capacidad podría aportar valor en tu empresa o en la de tus clientes.</p>
      <a class="button" href="mailto:contacto@nexusg.cl">Conversemos</a>
    </div>
  </section>
</main>

<footer class="labs-footer"><div class="shell"><span>NexusG</span><span>Comprensión operativa para decisiones</span></div></footer>
`
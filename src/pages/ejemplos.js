export const ejemplosIndexPage = () => `
<header class="labs-nav">
  <div class="shell labs-nav-inner">
    <a class="labs-brand" href="/" data-route>NexusG</a>
    <nav class="example-nav" aria-label="Navegación de ejemplos">
      <a href="/" data-route>Inicio</a>
      <span>Ejemplos</span>
    </nav>
    <a class="button labs-nav-cta" href="mailto:contacto@nexusg.cl">Conversemos</a>
  </div>
</header>

<main class="example-page">
  <section class="example-hero">
    <div class="shell example-hero-inner">
      <p class="eyebrow">Ejemplos</p>
      <h1>Así se ve una situación construida por NexusG.</h1>
      <p class="example-lead">Cada ejemplo muestra cómo señales distribuidas se convierten en una situación priorizada, con evidencia y una acción concreta para evaluar.</p>
      <p class="example-disclaimer">Todos los ejemplos utilizan datos ficticios y no representan a ninguna empresa real.</p>
    </div>
  </section>

  <section class="example-section">
    <div class="shell">
      <div class="labs-use-grid">
        <article>
          <p class="labs-card-kicker">Ventas</p>
          <h3>CRM</h3>
          <p>Oportunidades avanzadas que están perdiendo tracción antes de registrarse como perdidas.</p>
          <a class="labs-text-link" href="/ejemplos/crm" data-route>Ver ejemplo →</a>
        </article>
        <article>
          <p class="labs-card-kicker">Rentabilidad</p>
          <h3>ERP y margen</h3>
          <p>Clientes, productos o líneas que crecen mientras deterioran margen o caja.</p>
          <a class="labs-text-link" href="/ejemplos/erp" data-route>Ver ejemplo →</a>
        </article>
        <article>
          <p class="labs-card-kicker">Operación</p>
          <h3>Correo</h3>
          <p>Compromisos, dependencias y problemas repetidos ocultos entre conversaciones distintas.</p>
          <span class="example-disclaimer">Próximamente</span>
        </article>
        <article>
          <p class="labs-card-kicker">Clientes</p>
          <h3>Experiencia de clientes</h3>
          <p>Patrones de deterioro que aparecen antes de reflejarse claramente en el resultado final.</p>
          <span class="example-disclaimer">Próximamente</span>
        </article>
      </div>
    </div>
  </section>

  <section class="example-compatibility">
    <div class="shell example-compatibility-inner">
      <p class="eyebrow">Qué muestran</p>
      <h2>Señales → situación → evidencia → acción.</h2>
      <p>Los ejemplos no son capturas de clientes ni casos reales publicados. Son demostraciones sanitizadas de cómo NexusG organiza y presenta una capacidad operativa.</p>
      <a class="labs-text-link" href="/" data-route>Volver a NexusG</a>
    </div>
  </section>
</main>

<footer class="labs-footer"><div class="shell"><span>NexusG</span><span>Ejemplos ilustrativos · datos ficticios</span></div></footer>
`

export const ejemplosPage = () => `
<header class="labs-nav">
  <div class="shell labs-nav-inner">
    <a class="labs-brand" href="/" data-route>NexusG</a>
    <nav class="example-nav" aria-label="Navegación de ejemplos">
      <a href="/ejemplos" data-route>Ejemplos</a>
      <span>CRM</span>
    </nav>
    <a class="button labs-nav-cta" href="mailto:contacto@nexusg.cl">Conversemos</a>
  </div>
</header>

<main class="example-page">
  <section class="example-hero">
    <div class="shell example-hero-inner">
      <p class="eyebrow">Ejemplo · CRM</p>
      <h1>El problema no es la falta de oportunidades. Es no ver dónde están perdiendo tracción.</h1>
      <p class="example-lead">El CRM registra actividad. Los motores de NexusG relacionan señales y construyen situaciones que PressureBoard presenta según su prioridad.</p>
      <p class="example-disclaimer">Ejemplo ilustrativo construido con datos ficticios.</p>
    </div>
  </section>

  <section class="example-section">
    <div class="shell example-two-columns">
      <div><p class="eyebrow">Workspace</p><h2>Preguntas que cambian una decisión comercial</h2></div>
      <div class="example-questions">
        <p>¿Qué parte del pipeline está comenzando a deteriorarse?</p>
        <p>¿Dónde se concentra hoy el riesgo comercial?</p>
        <p>¿Qué requiere intervención antes de la próxima semana?</p>
      </div>
    </div>
  </section>

  <section class="example-section example-board-section">
    <div class="shell">
      <div class="example-board-heading">
        <div><p class="eyebrow">PressureBoard</p><h2>Una situación, no una suma de alertas</h2></div>
        <span class="example-status">Requiere atención</span>
      </div>
      <article class="example-pressure-card">
        <div class="example-card-header">
          <div>
            <p class="example-card-kicker">Riesgo comercial</p>
            <h3>Deterioro creciente en oportunidades avanzadas</h3>
            <p>El pipeline mantiene valor, pero el seguimiento disminuye y varias oportunidades ya no muestran evidencia nueva de avance.</p>
          </div>
          <span class="example-card-marker" aria-hidden="true"></span>
        </div>
        <div class="example-card-grid">
          <section><h4>Señales relacionadas</h4><ul><li>Oportunidades avanzadas sin actividad reciente.</li><li>Ausencia de una próxima acción registrada.</li><li>Fechas de cierre próximas sin nueva evidencia.</li><li>Forecast sostenido pese a la pérdida de interacción.</li></ul></section>
          <section><h4>Por qué importa</h4><p>La pérdida de tracción aparece antes de que la oportunidad sea registrada como perdida. Revisar solo el valor total del pipeline puede ocultar ese deterioro.</p></section>
          <section><h4>Qué hacer</h4><p>Revisar las oportunidades afectadas y asignar una intervención concreta antes de la próxima reunión comercial.</p></section>
          <section><h4>Evidencia</h4><p>Actividad · etapa · próxima acción · fecha de cierre · historial de cambios.</p></section>
        </div>
      </article>
    </div>
  </section>

  <section class="example-section">
    <div class="shell example-two-columns">
      <div><p class="eyebrow">Qué aporta</p><h2>De señales dispersas a una intervención concreta</h2></div>
      <div class="example-benefits">
        <article><span>01</span><p>Detecta deterioro antes de que la oportunidad se pierda.</p></article>
        <article><span>02</span><p>Relaciona señales que un reporte muestra por separado.</p></article>
        <article><span>03</span><p>Prioriza dónde conviene intervenir primero.</p></article>
        <article><span>04</span><p>Conserva evidencia y trazabilidad para revisar el resultado.</p></article>
      </div>
    </div>
  </section>

  <section class="example-compatibility">
    <div class="shell example-compatibility-inner">
      <p class="eyebrow">Sobre sistemas existentes</p>
      <h2>No reemplaza el CRM.</h2>
      <p>Trabaja sobre la información que ya existe en el sistema comercial y agrega capacidades de comprensión, priorización e investigación.</p>
      <a class="labs-text-link" href="/ejemplos" data-route>Ver todos los ejemplos</a>
    </div>
  </section>
</main>

<footer class="labs-footer"><div class="shell"><span>NexusG</span><span>Ejemplo ilustrativo · datos ficticios</span></div></footer>
`

export const ejemplosErpPage = () => `
<header class="labs-nav">
  <div class="shell labs-nav-inner">
    <a class="labs-brand" href="/" data-route>NexusG</a>
    <nav class="example-nav" aria-label="Navegación de ejemplos">
      <a href="/ejemplos" data-route>Ejemplos</a>
      <span>ERP y margen</span>
    </nav>
    <a class="button labs-nav-cta" href="mailto:contacto@nexusg.cl">Conversemos</a>
  </div>
</header>

<main class="example-page">
  <section class="example-hero">
    <div class="shell example-hero-inner">
      <p class="eyebrow">Ejemplo · ERP y margen</p>
      <h1>El problema no es vender menos. Es crecer sin ver dónde se deteriora la rentabilidad.</h1>
      <p class="example-lead">El ERP registra ingresos y costos. Los motores de NexusG relacionan esas señales y construyen situaciones que PressureBoard presenta según su prioridad.</p>
      <p class="example-disclaimer">Ejemplo ilustrativo construido con datos ficticios.</p>
    </div>
  </section>

  <section class="example-section">
    <div class="shell example-two-columns">
      <div><p class="eyebrow">Workspace</p><h2>Preguntas que cambian una decisión de rentabilidad</h2></div>
      <div class="example-questions">
        <p>¿Qué cliente parece rentable cuando se mira la facturación, pero deja de serlo al incorporar el costo operativo?</p>
        <p>¿Qué línea de negocio está creciendo mientras deteriora el margen?</p>
        <p>¿Qué centro de costo requiere revisión antes del próximo cierre?</p>
      </div>
    </div>
  </section>

  <section class="example-section example-board-section">
    <div class="shell">
      <div class="example-board-heading">
        <div><p class="eyebrow">PressureBoard</p><h2>Una situación, no una suma de indicadores</h2></div>
        <span class="example-status">Requiere revisión</span>
      </div>
      <article class="example-pressure-card">
        <div class="example-card-header">
          <div>
            <p class="example-card-kicker">Rentabilidad</p>
            <h3>Rentabilidad aparente con deterioro operativo</h3>
            <p>La facturación mantiene una tendencia positiva, pero el costo asociado crece más rápido que el ingreso.</p>
          </div>
          <span class="example-card-marker" aria-hidden="true"></span>
        </div>
        <div class="example-card-grid">
          <section><h4>Señales relacionadas</h4><ul><li>Aumento sostenido del costo logístico.</li><li>Incremento de horas de soporte.</li><li>Devoluciones por encima de la tendencia.</li><li>Descuentos recurrentes.</li><li>Utilización creciente de recursos.</li></ul></section>
          <section><h4>Qué revela el patrón</h4><p>La rentabilidad comienza a deteriorarse antes de que el efecto sea visible en los indicadores consolidados.</p></section>
          <section><h4>Qué hacer</h4><p>Revisar condiciones comerciales, estructura de costos y nivel de servicio antes del siguiente ciclo de revisión.</p></section>
          <section><h4>Evidencia</h4><p>Facturación · costos operativos · logística · soporte · devoluciones · condiciones comerciales.</p></section>
        </div>
      </article>
    </div>
  </section>

  <section class="example-section">
    <div class="shell example-two-columns">
      <div><p class="eyebrow">Qué aporta</p><h2>De datos financieros separados a una decisión operativa</h2></div>
      <div class="example-benefits">
        <article><span>01</span><p>Detecta deterioro antes de que aparezca claramente en el cierre consolidado.</p></article>
        <article><span>02</span><p>Relaciona ingreso, costo y carga operativa que el ERP muestra por separado.</p></article>
        <article><span>03</span><p>Prioriza qué cliente, línea o centro de costo conviene revisar primero.</p></article>
        <article><span>04</span><p>Conserva evidencia y trazabilidad para revisar la decisión.</p></article>
      </div>
    </div>
  </section>

  <section class="example-compatibility">
    <div class="shell example-compatibility-inner">
      <p class="eyebrow">Sobre sistemas existentes</p>
      <h2>No reemplaza el ERP.</h2>
      <p>Trabaja sobre la información financiera y operativa que ya existe y agrega capacidades de comprensión, priorización e investigación.</p>
      <a class="labs-text-link" href="/ejemplos" data-route>Ver todos los ejemplos</a>
    </div>
  </section>
</main>

<footer class="labs-footer"><div class="shell"><span>NexusG</span><span>Ejemplo ilustrativo · datos ficticios</span></div></footer>
`

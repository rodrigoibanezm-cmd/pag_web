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
    <nav class="labs-menu" aria-label="Navegación principal">
      <a href="#problema">Problema</a>
      <a href="#producto">Producto</a>
      <a href="#como-funciona">Cómo funciona</a>
      <a href="/ejemplos" data-route>Ejemplos</a>
      <a href="#implementacion">Implementación</a>
      <a href="/partners" data-route>Partners</a>
      <a href="#faq">FAQ</a>
    </nav>
    <a class="button labs-nav-cta" href="mailto:contacto@nexusg.cl">Conversemos</a>
  </div>
</header>

<main id="top" class="labs-page">
  <section class="labs-hero">
    <div class="shell labs-hero-inner">
      <p class="eyebrow">Comprensión operativa</p>
      <h1>La empresa genera más señales de las que una persona puede atender</h1>
      <p class="labs-lead">Algunas son demasiado caras como para dejarlas pasar<br>NexusG las descubre antes de que cuesten más</p>
      <div class="labs-hero-actions">
        <a class="button" href="mailto:contacto@nexusg.cl">Conversemos</a>
        <a class="labs-text-link" href="#problema">Ver cómo funciona</a>
      </div>
    </div>
  </section>

  ${section('problema', 'El problema', 'La mayoría de las señales pueden esperar.', `
    <p><strong>El problema es que no sabes cuáles no.</strong></p>
    <p>Mientras revisas correos, reuniones, reportes y dashboards, las señales que realmente pueden afectar el negocio compiten por la misma atención que todo lo demás. Cuando una de ellas pasa inadvertida, el costo aparece después.</p>
    <p>No falta información.</p>
    <p>No faltan sistemas.</p>
    <p><strong>Falta saber qué no puedes dejar pasar.</strong></p>
    <blockquote>Necesito saber qué no puedo dejar pasar, por qué importa y dónde intervenir ahora.</blockquote>
  `)}

  ${section('que-es', 'Qué es NexusG', 'Una capacidad permanente de comprensión', `
    <p><strong>Plataforma de comprensión operativa que conecta tus sistemas y descubre las situaciones que requieren intervención.</strong></p>
    <p>NexusG conecta evidencia distribuida, aplica reglas y cálculos controlados y mantiene contexto sobre la operación.</p>
    <div class="labs-pill-row">
      <span>Relaciona evidencia</span><span>Detecta situaciones</span><span>Explica causas</span><span>Apoya decisiones</span>
    </div>
    <p>No reemplaza los sistemas existentes. Agrega una nueva capacidad sobre ellos.</p>
  `)}

  ${section('producto', 'Qué entrega', 'La misma comprensión. Distintas decisiones.', `
    <p>La misma comprensión puede utilizarse de formas distintas según las decisiones que cada persona debe tomar.</p>
    <p>Por eso NexusG ofrece dos interfaces complementarias.</p>
    <div class="labs-cards">
      <article class="labs-card">
        <p class="labs-card-kicker">Atención</p>
        <h3>PressureBoard</h3>
        <p><strong>Para quienes deben decidir dónde intervenir.</strong></p>
        <p>Prioriza las señales que no puedes dejar pasar, explica por qué requieren atención y muestra dónde conviene actuar primero.</p>
      </article>
      <article class="labs-card">
        <p class="labs-card-kicker">Investigación</p>
        <h3>Workspace</h3>
        <p><strong>Para quienes investigan, analizan y preparan decisiones.</strong></p>
        <p>Permite explorar evidencia, reconstruir contexto y responder preguntas complejas utilizando lenguaje natural y resultados verificables.</p>
      </article>
    </div>
    <p>Ambas interfaces utilizan la misma comprensión construida por NexusG. PressureBoard concentra la atención en lo que requiere intervención. Workspace permite investigar, profundizar y preparar decisiones con evidencia.</p>
  `)}

  ${section('comprension-personalizada', 'Comprensión personalizada', 'La comprensión no se construye para toda la empresa.', `
    <p>La comprensión que necesita un gerente comercial no es la misma que necesita un planner, un jefe de operaciones o un responsable de postventa.</p>
    <p>Por eso NexusG construye una comprensión específica para cada usuario, enfocada en su propio dominio de decisión.</p>
    <p><strong>Cada usuario recibe un PressureBoard distinto, construido a partir de las señales, prioridades y decisiones que le corresponde gestionar.</strong></p>
    <p>No todos necesitan comprender lo mismo.</p>
    <p>Necesitan comprender aquello sobre lo que deben decidir.</p>
    <blockquote>La empresa es una sola.<br>Las decisiones no.</blockquote>
  `)}

  ${section('adaptacion', 'Adaptación por descubrimiento', 'NexusG aprende de lo que ocurrió, no solo de lo que alguien recuerda.', `
    <p>Al conectar las fuentes, una serie de motores analiza la historia real de la operación.</p>
    <p>Cada motor descubre una parte del contexto —personas, relaciones, patrones, responsabilidades y formas de trabajo— y entrega sus resultados al siguiente.</p>
    <p>Cuando la evidencia no permite resolver algo con suficiente certeza, NexusG hace preguntas específicas y cerradas para confirmarlo.</p>
    <p>Así, la implementación no depende de entrevistas largas, de la memoria de una persona ni de configurar manualmente cada situación posible.</p>
    <blockquote>Primero descubre.<br>Después pregunta solo lo necesario.</blockquote>
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

  ${section('casos', 'Casos de uso', 'Dónde puede aportar valor', `
    <div class="labs-use-grid">
      <article><h3>Ventas</h3><p>Oportunidades detenidas, negocios en riesgo y prioridades comerciales.</p></article>
      <article><h3>Margen</h3><p>Productos, clientes o tiendas donde crecer está deteriorando rentabilidad.</p></article>
      <article><h3>Stock</h3><p>Quiebres relevantes y reposiciones priorizadas por impacto.</p></article>
      <article><h3>Clientes</h3><p>Señales tempranas de riesgo y cambios de comportamiento.</p></article>
      <article><h3>Operación</h3><p>Compromisos detenidos, solicitudes envejecidas y fricciones entre áreas.</p></article>
      <article><h3>Correo</h3><p>Conversaciones críticas sin respuesta y compromisos pendientes.</p></article>
    </div>
    <a class="labs-text-link" href="/ejemplos" data-route>Ver ejemplos completos →</a>
  `)}

  ${section('arquitectura', 'Arquitectura', 'Lenguaje natural, ejecución controlada', `
    <p>El modelo de lenguaje interpreta la intención, selecciona capacidades y presenta resultados. Workspace permite esa interacción desde clientes compatibles con MCP; no depende de una interfaz ni de un proveedor específico.</p>
    <p>Las consultas, reglas, cálculos, validaciones y construcción de situaciones ocurren en componentes controlados del backend. PressureBoard solo presenta esas situaciones y su evidencia.</p>
    <p>Cada respuesta conserva trazabilidad sobre las capacidades ejecutadas, las fuentes consultadas y los cálculos aplicados.</p>
    <div class="labs-architecture-strip">
      <span>Intención</span><i>→</i><span>Capacidades</span><i>→</i><span>Fuentes y cálculos</span><i>→</i><span>Situaciones y evidencia</span><i>→</i><span>Workspace o PressureBoard</span>
    </div>
    <p><strong>Referencia arquitectónica pública.</strong> Los principios, límites, contratos conceptuales y fundamentos de diseño que respaldan estas afirmaciones están documentados en una referencia técnica pública.</p>
    <a class="labs-text-link" href="https://github.com/rodrigoibanezm-cmd/nexusg-reference" target="_blank" rel="noopener noreferrer">Ver referencia arquitectónica →</a>
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

  ${section('implementacion', 'Implementación y escala', 'Una capacidad concreta, no una transformación tecnológica', `
    <p>NexusG incorpora nuevas capacidades sobre los sistemas que la empresa ya utiliza. No requiere reemplazar el ERP, CRM ni iniciar un proyecto de transformación tecnológica.</p>
    <p>La mayoría de las implementaciones comienza con una única capacidad sobre una fuente existente y evoluciona incorporando nuevas capacidades según las necesidades del negocio.</p>
    <div class="labs-cards">
      <article class="labs-card">
        <p class="labs-card-kicker">Implementación inicial</p>
        <h3>Desde USD 2.000</h3>
        <p>Por capacidad, según las fuentes conectadas y los motores requeridos.</p>
      </article>
      <article class="labs-card">
        <p class="labs-card-kicker">Operación continua</p>
        <h3>Desde USD 50 mensuales</h3>
        <p>Según el alcance y la modalidad de implementación.</p>
      </article>
    </div>
    <p>El valor final depende de las fuentes conectadas, los motores implementados y las interfaces habilitadas.</p>
    <p><strong>NexusG está diseñado para empresas que desean obtener más valor de los sistemas que ya poseen, no para reemplazarlos por una nueva plataforma corporativa.</strong></p>
  `)}

  ${section('partners', 'Partners', 'Una nueva capacidad sobre los sistemas que tus clientes ya utilizan', `
    <p>El partner identifica la oportunidad y mantiene la relación con el cliente. NexusG aporta producto, implementación, soporte técnico y evolución.</p>
    <a class="labs-text-link" href="/partners" data-route>Conocer el modelo de alianza</a>
  `)}

  ${section('faq', 'Preguntas frecuentes', 'Lo esencial', `
    <div class="labs-faq">
      <details><summary>¿Qué compra el cliente?</summary><p>Una capacidad operativa para comprender la operación y convertir esa comprensión en decisiones.</p></details>
      <details><summary>¿Qué son Workspace y PressureBoard?</summary><p>Workspace es la interfaz conversacional para investigar situaciones. PressureBoard presenta las situaciones construidas por NexusG y explica por qué merecen atención.</p></details>
      <details><summary>¿Cómo se accede a Workspace y PressureBoard?</summary><p>Workspace puede utilizarse desde clientes compatibles con MCP o integrarse en otras interfaces conversacionales. PressureBoard puede utilizarse desde una interfaz web o integrarse en otras aplicaciones.</p></details>
      <details><summary>¿Cómo se adapta NexusG a cada empresa?</summary><p>Los motores del backend analizan las fuentes conectadas y construyen automáticamente un modelo operativo. NexusG solo presenta preguntas específicas y cerradas cuando necesita validar una hipótesis o comprobar el resultado antes de habilitar la capacidad.</p></details>
      <details><summary>¿Dónde quedan los datos y los persistentes de Workspace?</summary><p>La configuración, el estado operativo, el modelo construido y los persistentes generados por Workspace pueden mantenerse en infraestructura controlada por el cliente. El conocimiento generado permanece como un activo del cliente.</p></details>
      <details><summary>¿Cómo se implementa y cuánto cuesta comenzar?</summary><p>La mayoría de los proyectos comienza con una única capacidad sobre una fuente existente. Las implementaciones iniciales parten desde USD 2.000 por capacidad y la operación continua desde USD 50 mensuales, según alcance y modalidad.</p></details>
      <details><summary>¿Workspace es ChatGPT?</summary><p>No. Workspace puede operar desde clientes compatibles con MCP sobre distintos modelos de lenguaje.</p></details>
      <details><summary>¿PressureBoard calcula o detecta situaciones?</summary><p>No. Las situaciones, reglas y cálculos se construyen en capacidades controladas del backend. PressureBoard las presenta.</p></details>
      <details><summary>¿Dónde ocurren los cálculos?</summary><p>En motores especializados del backend, utilizando las definiciones válidas del negocio.</p></details>
      <details><summary>¿Cómo se audita una respuesta?</summary><p>Revisando las fuentes, evidencia, capacidades ejecutadas, cálculos y reglas aplicadas.</p></details>
      <details><summary>¿Reemplaza al ERP, CRM o BI?</summary><p>No. Trabaja sobre ellos y agrega una capacidad de comprensión y decisión.</p></details>
    </div>
  `)}
</main>
`
const section = (eyebrow, title, body) => `
<section class="labs-section">
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
    <a class="labs-brand" href="/labs" data-route>NexusG</a>
    <a class="button" href="mailto:contacto@nexusg.cl">Conversemos</a>
  </div>
</header>
<main id="top" class="labs-page">
  <section class="labs-hero">
    <div class="shell labs-hero-inner">
      <p class="eyebrow">Comprensión operativa</p>
      <h1>NexusG incorpora a tu empresa una capacidad permanente para comprender su operación y convertir esa comprensión en decisiones.</h1>
      <p class="labs-lead">Conecta información distribuida entre ERP, CRM, correo, documentos, bases de datos y otras fuentes para detectar situaciones relevantes, explicar qué las provoca y responder con evidencia verificable del negocio.</p>
      <a class="button" href="mailto:contacto@nexusg.cl">Conversemos</a>
    </div>
  </section>

  ${section('El problema', 'La empresa tiene más información que nunca. El tiempo para comprenderla sigue siendo limitado.', `
    <p>La operación produce señales continuamente: ventas que cambian, oportunidades que se detienen, márgenes que se deterioran, compromisos que envejecen, problemas de stock y clientes que empiezan a mostrar señales de riesgo.</p>
    <p>La información existe, pero permanece distribuida entre sistemas, reportes, correos, documentos y personas. Mientras tanto, quienes toman decisiones pasan de una reunión a otra y disponen de ventanas limitadas para entender qué está ocurriendo.</p>
    <p>El problema no es solamente acceder a los datos. Es poder dedicar atención a lo que realmente importa y contar con suficiente comprensión para decidir qué hacer.</p>
  `)}

  ${section('JTBD', 'El trabajo que NexusG ayuda a resolver', `
    <blockquote>Necesito entender qué está pasando realmente en la empresa, saber dónde debo intervenir ahora y tomar una decisión sin perder tiempo buscando información entre múltiples sistemas.</blockquote>
    <p>Los sistemas tradicionales permiten registrar, consultar y visualizar información. NexusG agrega una capacidad distinta: relacionar evidencia distribuida, interpretar el contexto operativo y convertirlo en situaciones comprensibles y accionables.</p>
  `)}

  ${section('La tesis', 'Una capacidad permanente de comprensión', `
    <p>NexusG no genera una fotografía aislada ni responde solamente una consulta puntual. Construye una comprensión que puede mantenerse y utilizarse de forma continua.</p>
    <p>Esa comprensión incluye qué entidades forman parte de la operación, cómo se relacionan, qué reglas y condiciones son relevantes, qué situaciones requieren atención y qué evidencia explica cada conclusión.</p>
    <p>La empresa deja de depender exclusivamente de que una persona encuentre, reúna e interprete manualmente toda la información necesaria antes de decidir.</p>
  `)}

  ${section('Qué es NexusG', 'Un motor de comprensión operativa', `
    <p>NexusG se conecta con las fuentes existentes de la empresa y ejecuta capacidades especializadas para consultar datos, aplicar reglas, realizar cálculos, relacionar evidencia y construir respuestas.</p>
    <p>La lógica de negocio, los cálculos y las validaciones ocurren en componentes controlados del backend. El modelo de lenguaje interpreta la intención del usuario, selecciona las capacidades necesarias y presenta los resultados de forma comprensible.</p>
    <p>Así combina interacción natural con ejecución controlada, evidencia y trazabilidad.</p>
  `)}

  ${section('Qué entrega', 'Dos interfaces sobre la misma comprensión', `
    <div class="labs-cards">
      <article class="labs-card"><h3>PressureBoard</h3><p>Muestra qué situaciones merecen atención, por qué importan ahora y qué acción debería evaluarse.</p><p>No presenta cada evento por separado. Agrupa evidencia distribuida y la convierte en situaciones con significado operativo.</p></article>
      <article class="labs-card"><h3>Workspace</h3><p>Permite investigar una situación o formular preguntas sobre el negocio utilizando la comprensión construida por NexusG.</p><p>El usuario pregunta por la operación. NexusG decide qué capacidades ejecutar, qué fuentes consultar y qué evidencia relacionar.</p></article>
    </div>
    <p>PressureBoard ayuda a decidir dónde invertir atención. Workspace ayuda a comprender la situación y evaluar qué hacer. Ambos trabajan sobre la misma base de evidencia, reglas y capacidades.</p>
  `)}

  ${section('Cómo funciona', 'De las fuentes a una situación comprensible', `
    <ol class="labs-steps">
      <li><strong>Se conecta a las fuentes existentes.</strong> ERP, CRM, correo, documentos, bases de datos, plataformas internas y APIs.</li>
      <li><strong>Se construyen capacidades especializadas.</strong> Consultas, cálculos, reglas y validaciones controladas.</li>
      <li><strong>Se incorpora el contexto del negocio.</strong> Criterios, excepciones, responsables, permisos e indicadores válidos.</li>
      <li><strong>Se detectan y construyen situaciones.</strong> Señales relacionadas se reúnen en una explicación operativa.</li>
      <li><strong>La comprensión se utiliza para decidir.</strong> Las situaciones se priorizan o se investigan en profundidad.</li>
    </ol>
  `)}

  ${section('Situaciones, no alertas', 'De eventos aislados a una unidad de comprensión', `
    <p>Una alerta informa que algo ocurrió. Una situación explica qué está ocurriendo y por qué merece atención.</p>
    <div class="labs-example">
      <p><strong>Eventos:</strong> propuesta enviada hace 24 días; dos correos sin respuesta; ninguna próxima actividad; monto superior al promedio; fecha estimada de cierre próxima.</p>
      <p><strong>Situación:</strong> oportunidad comercial de alto valor en riesgo de estancamiento. No registra actividad próxima, lleva 24 días sin avance y los últimos contactos no han recibido respuesta.</p>
    </div>
    <p>La utilidad no está en repetir los datos. Está en convertirlos en una unidad de comprensión sobre la cual alguien pueda actuar.</p>
  `)}

  ${section('Casos de uso', 'Situaciones donde NexusG puede aportar valor', `
    <div class="labs-cards labs-cards-three">
      <article class="labs-card"><h3>Ventas</h3><p>Negocios en riesgo, oportunidades sin próxima acción, carteras estancadas y prioridades de intervención.</p></article>
      <article class="labs-card"><h3>Margen</h3><p>Productos, clientes o sucursales donde el crecimiento está deteriorando la rentabilidad.</p></article>
      <article class="labs-card"><h3>Stock</h3><p>Ventas limitadas por disponibilidad, quiebres relevantes y reposiciones priorizadas por impacto.</p></article>
      <article class="labs-card"><h3>Clientes</h3><p>Señales tempranas de riesgo, reclamos, atrasos y cambios de comportamiento.</p></article>
      <article class="labs-card"><h3>Operación</h3><p>Compromisos detenidos, solicitudes envejecidas y problemas repetidos entre áreas.</p></article>
      <article class="labs-card"><h3>Correo</h3><p>Conversaciones relevantes sin respuesta, compromisos pendientes y evidencia dispersa.</p></article>
    </div>
  `)}

  ${section('Arquitectura', 'Comprensión basada en evidencia', `
    <p>Cada conclusión debe poder explicarse. NexusG conserva la relación entre una respuesta y los registros consultados, reglas aplicadas, cálculos ejecutados, fuentes utilizadas, condiciones cumplidas e información faltante.</p>
    <p>El modelo de lenguaje facilita la interacción y la interpretación semántica. No sustituye la lógica controlada de la empresa.</p>
    <p>Las consultas, reglas, cálculos y validaciones que requieren precisión se ejecutan de manera controlada y reproducible. Cuando una respuesta requiere un dato que no está disponible, el sistema debe reconocer esa limitación en lugar de inventarlo.</p>
  `)}

  ${section('Sistemas existentes', 'La integración resuelve el acceso. NexusG busca resolver la lectura.', `
    <p>El ERP registra la operación. El CRM organiza la actividad comercial. Las herramientas de inteligencia de negocios permiten visualizar y analizar indicadores.</p>
    <p>NexusG trabaja sobre esas capacidades. Su función es relacionar información distribuida, mantener contexto, detectar situaciones y permitir que esa comprensión se utilice al decidir.</p>
  `)}

  ${section('Adaptación', 'Una capacidad construida para la operación real de cada empresa', `
    <p>Cada implementación considera las fuentes disponibles, la estructura de los datos, las definiciones del negocio, las preguntas que deben poder responderse, las situaciones relevantes, los roles, los permisos y las reglas de priorización.</p>
    <p>El entregable no es una asesoría ni una colección de reportes. Es una capacidad operativa implementada sobre los sistemas existentes.</p>
  `)}

  ${section('Partners', 'Una nueva capacidad sobre los sistemas que tus clientes ya utilizan', `
    <p>NexusG puede implementarse junto a partners que conocen los sistemas, procesos y necesidades del cliente.</p>
    <p>El partner identifica la oportunidad y mantiene la relación. NexusG aporta producto, arquitectura, metodología, construcción de capacidades, soporte técnico y evolución.</p>
  `)}

  ${section('Preguntas frecuentes', 'Lo esencial, en una sola página', `
    <div class="labs-faq">
      <details><summary>¿Qué compra el cliente?</summary><p>Una capacidad operativa implementada para detectar situaciones, investigar el negocio y convertir comprensión en decisiones.</p></details>
      <details><summary>¿Cuál es el entregable?</summary><p>Conexiones, capacidades, reglas, evidencia, trazabilidad e interfaces configuradas para la operación del cliente.</p></details>
      <details><summary>¿Qué son Workspace y PressureBoard?</summary><p>Workspace investiga situaciones mediante conversación. PressureBoard muestra qué situaciones merecen atención y por qué.</p></details>
      <details><summary>¿Dónde ocurren los cálculos?</summary><p>En capacidades especializadas del backend, utilizando las definiciones válidas del negocio.</p></details>
      <details><summary>¿El sistema es determinístico?</summary><p>Las consultas, reglas, cálculos y validaciones que requieren precisión se ejecutan de manera controlada y reproducible.</p></details>
      <details><summary>¿Cómo se audita una respuesta?</summary><p>Revisando las fuentes, la evidencia, las capacidades ejecutadas, los cálculos y las reglas aplicadas.</p></details>
      <details><summary>¿Reemplaza al ERP, CRM o BI?</summary><p>No. Se conecta con ellos y agrega una capacidad de comprensión y decisión sobre la información existente.</p></details>
    </div>
  `)}

  <section class="labs-cta">
    <div class="shell labs-cta-inner">
      <h2>De más información a mejores decisiones.</h2>
      <p>NexusG incorpora a tu empresa una capacidad permanente para comprender su operación y convertir esa comprensión en decisiones.</p>
      <a class="button" href="mailto:contacto@nexusg.cl">Conversemos</a>
    </div>
  </section>
</main>
<footer class="labs-footer"><div class="shell"><span>NexusG</span><span>Comprensión operativa para decisiones</span></div></footer>
`
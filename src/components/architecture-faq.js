const items = [
  ['¿Qué es NexusG?', 'NexusG es un motor que construye y mantiene comprensión sobre la operación de una empresa a partir de la información distribuida entre sus sistemas y fuentes existentes.'],
  ['¿Cuál es el entregable?', 'El entregable es una capacidad operativa instalada sobre un dominio concreto de la empresa: motores conectados a las fuentes disponibles, criterios definidos para interpretar ese dominio y dos formas de uso —Workspace y PressureBoard— trabajando sobre la misma comprensión.'],
  ['¿Qué son Workspace y PressureBoard?', 'Workspace es la interfaz conversacional para investigar una situación utilizando la comprensión construida por el motor. PressureBoard es la interfaz de priorización que muestra qué situaciones requieren atención y por qué importan ahora.'],
  ['¿Cómo se adapta a cada empresa?', 'Durante el onboarding se define el dominio, se revisan los sistemas disponibles y se configuran los motores necesarios para trabajar con sus datos, estructuras, reglas y vocabulario. NexusG no usa una plantilla genérica para todas las empresas.'],
  ['¿Reemplaza al ERP, CRM o BI?', 'No. NexusG trabaja sobre los sistemas existentes. Los conecta, relaciona su información y agrega una capa de comprensión y atención sin reemplazar las herramientas donde la empresa ya opera.'],
  ['¿Qué responsabilidad tiene el LLM?', 'El LLM interpreta lenguaje, organiza la consulta y presenta la respuesta. No ejecuta cálculos críticos ni inventa resultados operativos: utiliza capacidades expuestas por los motores y responde sobre la evidencia que estos entregan.'],
  ['¿Dónde ocurre el cálculo?', 'El cálculo ocurre en los motores y servicios del backend, mediante reglas, consultas y transformaciones controladas. El modelo de lenguaje no calcula indicadores ni decide valores por aproximación.'],
  ['¿El sistema es determinístico?', 'Las operaciones que deben producir el mismo resultado frente a los mismos datos son determinísticas. Las capacidades semánticas se utilizan para comprender intención, relacionar contexto y redactar, pero no para reemplazar cálculos o reglas de negocio.'],
  ['¿Cómo se audita una respuesta?', 'Cada respuesta puede vincularse con las fuentes, datos, motores y criterios que participaron en su construcción. Esto permite revisar la evidencia, comprobar el uso correcto de las herramientas y detectar datos faltantes o configuraciones incorrectas.'],
  ['¿Qué pasa si falta una capacidad?', 'NexusG identifica qué información o herramienta necesita para responder correctamente. Si la capacidad no existe, se define el requerimiento y se incorpora un nuevo motor o micromotor conectado a los endpoints disponibles, sin forzar una respuesta con capacidades insuficientes.']
]

export const architectureFaq = () => `
<section class="shell architecture-faq">
  <header class="architecture-faq-hero">
    <p class="eyebrow">ARQUITECTURA</p>
    <h1>Cómo está construido NexusG</h1>
    <p>Las decisiones de arquitectura que permiten construir comprensión, calcular con control y responder con evidencia.</p>
  </header>
  <div class="architecture-faq-list">
    ${items.map(([question, answer], index) => `
      <article class="architecture-faq-item">
        <span>${String(index + 1).padStart(2, '0')}</span>
        <div><h2>${question}</h2><p>${answer}</p></div>
      </article>`).join('')}
  </div>
</section>`

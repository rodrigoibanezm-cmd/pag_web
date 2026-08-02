# Canonical Conceptual Model (CCM)

Version: 0.1.0-draft  
Status: Draft / Working Note

## Purpose

Este documento registra una idea arquitectónica en desarrollo para NexusG.

Su objetivo es definir el modelo conceptual oficial de NexusG y preservar la consistencia semántica entre todas sus representaciones públicas e internas.

La hipótesis central es:

> El vocabulario canónico es parte del contrato del producto.

NexusG no necesita solo una guía de estilo. Necesita una especificación que defina conceptos, relaciones, acciones y reglas de nombres que deben mantenerse estables en código, documentación, interfaces y comunicación.

Este documento es un respaldo inicial. No pretende cerrar todavía el CCM v1.0.0. Se completará cuando la web y la documentación asociada queden estabilizadas.

## Why this exists

Una API define nombres de campos, tipos y reglas. No sería aceptable usar `customer_id`, luego `clientId` y después `user` para la misma entidad.

La misma lógica aplica al lenguaje del producto.

Si NexusG alterna entre:

- situación;
- alerta;
- caso;
- evento;

para referirse a la misma entidad conceptual, introduce deriva semántica.

Esa deriva afecta:

- la comprensión humana;
- la interpretación de LLMs;
- la coherencia entre frontend y backend;
- los contratos JSON;
- la documentación técnica;
- los prompts;
- los ejemplos;
- los partners;
- los materiales comerciales.

El CCM busca evitar esa deuda arquitectónica.

## Core principle

> Nunca reemplazar un concepto propio por un sinónimo.
>
> Solo eliminar repeticiones cuando sean sintácticas y no semánticas.

Esto permite dos cosas al mismo tiempo:

- que una persona no sienta que lee el mismo párrafo varias veces;
- que un LLM encuentre siempre el mismo vocabulario canónico y construya un grafo conceptual estable.

La consistencia terminológica tiene más valor que la variedad estilística.

## Scope

El CCM debe aplicar, cuando corresponda, a:

- backend;
- frontend;
- APIs;
- contratos JSON;
- motores;
- prompts;
- documentación técnica;
- sitio web;
- FAQ;
- `llms.txt`;
- README;
- ejemplos;
- presentaciones;
- partners;
- demos;
- nombres de endpoints;
- nombres de variables;
- artefactos derivados.

## Canonical Concept Graph

Representación conceptual inicial:

```text
NexusG
 ├── comprensión operativa
 ├── dominio de decisión
 ├── Workspace
 ├── PressureBoard
 ├── situaciones
 ├── evidencia
 ├── capacidades
 ├── descubrimiento
 └── atención
```

Relaciones preliminares:

```text
Operational Comprehension
→ is built for
Decision Domain

PressureBoard
→ presents
Situations

Situations
→ are built from
Evidence

Workspace
→ investigates
Operational Comprehension

Operational Comprehension
→ is specific to
User
```

## Canonical Concepts

Esta lista es inicial y debe completarse antes de declarar el modelo estable.

### Comprensión operativa

**Definition**  
Representación operacional construida y mantenida por NexusG a partir de fuentes, relaciones, evidencia, reglas, cálculos y contexto.

**Purpose**  
Permitir que Workspace y PressureBoard operen sobre un contexto persistente y verificable.

**Naming rule**  
No reemplazar por:

- entendimiento;
- inteligencia;
- visión;
- contexto, cuando el concepto sea exactamente comprensión operativa.

### Dominio de decisión

**Definition**  
Ámbito de señales, prioridades, responsabilidades y decisiones que corresponde gestionar a un usuario.

**Purpose**  
Definir qué parte de la operación necesita comprender cada usuario.

**Naming rule**  
No reemplazar por:

- perfil;
- rol;
- área;
- contexto del usuario,

cuando el concepto sea específicamente el dominio de decisión.

### Situación

**Definition**  
Unidad operacional construida al relacionar señales y evidencia que, en conjunto, explican algo que requiere atención, seguimiento o intervención.

**Purpose**  
Representar el objeto priorizable de PressureBoard y el punto de partida de una investigación en Workspace.

**Naming rule**  
No sustituir por:

- alerta;
- evento;
- caso;
- incidente;

salvo que se esté hablando realmente de una entidad distinta.

### Evidencia

**Definition**  
Información trazable que respalda una conclusión, situación, cálculo o recomendación.

**Purpose**  
Permitir auditoría, verificación y reconstrucción de resultados.

### Capacidad

**Definition**  
Resultado operativo permanente incorporado sobre los sistemas existentes del cliente.

**Purpose**  
Diferenciar el producto de una funcionalidad aislada, una feature o un entregable único.

**Naming rule**  
No reemplazar por:

- feature;
- funcionalidad;
- módulo,

cuando se describa el resultado permanente implementado por NexusG.

### Descubrimiento

**Definition**  
Proceso por el cual NexusG construye contexto y relaciones a partir de evidencia existente en los sistemas.

**Purpose**  
Explicar que NexusG no depende de que alguien le enseñe manualmente cómo funciona la empresa.

**Naming rule**  
No usar aprendizaje cuando pueda interpretarse como entrenamiento de modelos o modificación automática del comportamiento.

### Atención

**Definition**  
Recurso limitado que NexusG ayuda a asignar hacia las situaciones que no conviene dejar pasar.

**Purpose**  
Expresar la tesis principal del producto: el problema no es solo información o capacidad cognitiva, sino dónde intervenir.

## Canonical Products

### NexusG

**Rule**  
Siempre escribir `NexusG`.

### Workspace

**Definition**  
Interfaz de investigación y análisis sobre comprensión operativa.

**Consumes**

- comprensión operativa;
- evidencia;
- capacidades.

**Produces**

- investigaciones;
- contexto preparado;
- respuestas verificables;
- recomendaciones fundamentadas.

**Naming rule**  
No traducir. No reemplazar por chat, asistente o chatbot.

### PressureBoard

**Definition**  
Interfaz de priorización que presenta las situaciones que requieren atención.

**Consumes**

- comprensión operativa;
- situaciones;
- prioridades;
- evidencia.

**Produces**

- situaciones priorizadas;
- explicación de por qué importan;
- orientación sobre dónde intervenir.

**Naming rule**  
No traducir. No reemplazar por dashboard, panel, tablero o board cuando se hable del producto.

## Canonical Actions

Esta sección debe definir acciones del sistema, no solo verbos editoriales.

### descubrir

**Meaning**  
Construir contexto y relaciones desde evidencia existente.

**Allowed contexts**

- descubrir el dominio de decisión;
- descubrir patrones;
- descubrir relaciones;
- descubrir situaciones.

**Avoid**

- aprender, cuando sugiera entrenamiento;
- interpretar, cuando el proceso incluya más que una inferencia puntual.

### priorizar

**Meaning**  
Determinar qué situaciones merecen atención antes que otras.

### construir

**Meaning**  
Producir una entidad conceptual a partir de evidencia, reglas, cálculos o relaciones.

**Examples**

- construir una situación;
- construir comprensión operativa;
- construir contexto.

### comprender

**Meaning**  
Operar sobre una representación relacionada de la realidad operacional, no solo recuperar información.

### incorporar

**Meaning**  
Añadir una capacidad permanente sobre sistemas existentes.

## Forbidden Synonyms

Mapa preliminar de sustituciones no conformes:

```text
alerta
→ usar "situación" cuando el concepto sea la unidad operacional priorizable

feature
→ usar "capacidad" cuando se describa el resultado permanente

chat
→ usar "Workspace" cuando se hable del producto

dashboard
→ usar "PressureBoard" cuando se hable del producto

aprendizaje
→ usar "descubrimiento" cuando se describa construcción desde evidencia

entendimiento
→ usar "comprensión operativa" cuando corresponda al concepto canónico
```

## Naming Rules

1. Los términos canónicos son parte del contrato del producto.
2. Los términos canónicos no tienen sinónimos en contenido público.
3. Puede variar la sintaxis, nunca la terminología.
4. No introducir un término nuevo para representar una entidad ya definida.
5. Si aparece un concepto nuevo, debe agregarse primero al CCM.
6. El mismo concepto debe usar el mismo nombre en código, documentación y comunicación cuando sea razonable.
7. Las variaciones lingüísticas solo son válidas si representan entidades distintas.

## Conformance

Toda representación relevante debería poder declarar:

```text
Conforms to:
Canonical Conceptual Model
v1.0.0
```

Un artefacto conforme debe:

- usar entidades canónicas;
- preservar relaciones canónicas;
- no introducir sinónimos prohibidos;
- mantener acciones oficiales;
- no contradecir definiciones del CCM.

Ejemplo de incumplimiento:

```json
{
  "alerts": []
}
```

Si la entidad representada es una `Situation`, el nombre `alerts` no conforma al modelo conceptual.

La observación correcta deja de ser editorial:

> No conforma al CCM. La entidad canónica es `Situation`.

## Semantic Contract Check

Criterio preliminar para revisión de PRs:

```text
Semantic Contract Check

✓ no introduce nuevos términos para conceptos existentes
✓ no rompe entidades canónicas
✓ mantiene verbos y acciones oficiales
✓ preserva relaciones del CCM
✓ no introduce sinónimos prohibidos
```

A futuro, parte de esta revisión podría automatizarse mediante:

- linters semánticos;
- listas de términos prohibidos;
- revisión de contratos JSON;
- validaciones de documentación;
- revisión asistida por LLM.

## Evolution Rules

Propuesta de versionado semántico:

### Major

- eliminar un concepto;
- cambiar sustancialmente una definición;
- modificar una relación incompatible;
- renombrar una entidad canónica.

### Minor

- agregar un concepto nuevo;
- agregar una relación compatible;
- incorporar una acción canónica nueva.

### Patch

- aclaraciones editoriales;
- ejemplos;
- notas;
- correcciones que no alteran significado.

Ejemplos:

```text
CCM v1.0.0
CCM v1.1.0
CCM v2.0.0
```

## Source of Truth

El CCM debería convertirse en la única fuente de verdad conceptual de NexusG.

Desde él deberían derivarse:

- Home;
- FAQ;
- Partners;
- one-pagers;
- `llms.txt`;
- README;
- prompts;
- contratos JSON;
- documentación de APIs;
- ejemplos;
- presentaciones;
- documentación técnica.

La meta es que no exista una versión para marketing, otra para ingeniería y otra para partners.

Debe existir un único modelo conceptual y múltiples representaciones derivadas.

## Current status

Este documento es un respaldo preliminar de la conversación y de las decisiones conceptuales emergentes.

Aún falta:

- cerrar la lista de conceptos canónicos;
- revisar definiciones con la arquitectura técnica;
- validar relaciones;
- decidir nombres internos en inglés o español;
- alinear contratos JSON existentes;
- definir reglas de conformidad obligatorias;
- mover la especificación final a `nexusg-reference`;
- declarar `v1.0.0` estable.

Hasta entonces, este archivo debe considerarse una working note y no una especificación final.

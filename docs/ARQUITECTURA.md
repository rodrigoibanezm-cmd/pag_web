# ARQUITECTURA FRONTEND

## Objetivo

Sitio estático modular, responsive y desplegado en Vercel. No usa framework ni
backend porque la landing no los necesita.

## Rutas

```txt
/       → página Qué
/como   → página Cómo
```

Vercel reescribe ambas rutas a `index.html`. El router selecciona la página con
`window.location.pathname` y conserva navegación sin recarga.

## Estructura

```txt
index.html
vercel.json
src/
  app.js
  router.js
  pages/
  components/
  data/
  helpers/
styles/
  tokens.css
  base.css
  layout.css
  navigation.css
  hero.css
  cards.css
  sections.css
  responsive.css
```

## Responsabilidades

- `index.html`: cascarón, metadatos, estilos y entrada de la app.
- `app.js`: montaje y navegación del cliente.
- `router.js`: resolución de ruta.
- `pages`: composición de secciones, sin estilos ni routing.
- `components`: una unidad visual reutilizable.
- `data`: copy, preguntas, fuentes y dominios.
- `styles`: CSS separado por responsabilidad.

## Reglas obligatorias

- Ningún archivo supera 100 líneas, incluida documentación.
- Un archivo tiene una responsabilidad.
- Se refactoriza antes de crecer.
- No se duplican componentes ni estilos.
- No se agrega un framework sin una necesidad real.
- No se modifica contenido validado durante la refactorización.

## Criterio responsive

Desktop y mobile son dos composiciones del mismo contenido. No se oculta
información esencial en mobile. Se prueban navegación, jerarquía, ancho de texto,
cards, espacios, overflow y objetivos táctiles.

## Principio

HTML mínimo, componentes pequeños, contenido separado y estilos compartidos.

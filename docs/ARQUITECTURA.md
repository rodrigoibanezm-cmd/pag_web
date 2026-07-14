# ARQUITECTURA FRONTEND

## Objetivo

Sitio estático modular desplegado en Vercel.

No usa framework.

No necesita backend.

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

### index.html

```txt
cascarón HTML
carga estilos
carga app.js
```

### app.js

```txt
inicia la aplicación
renderiza navegación
renderiza página activa
```

### router.js

```txt
/       → Qué
/como   → Cómo
```

### pages

```txt
componen secciones
no contienen estilos
no contienen lógica de routing
```

### components

```txt
renderizan una unidad visual
reciben datos
no conocen la ruta completa
```

### data

```txt
copy
preguntas
fuentes
dominios
```

### styles

```txt
separados por responsabilidad
sin CSS inline salvo casos excepcionales
```

## Reglas

```txt
1 archivo = 1 responsabilidad
preferencia: menos de 100 líneas
refactor antes de crecer
no duplicar componentes
no duplicar estilos
no introducir framework sin necesidad real
```

## Routing en Vercel

`vercel.json` debe redirigir rutas de aplicación al mismo `index.html`.

```txt
/como → /index.html
```

El router decide qué página renderizar según `window.location.pathname`.

## Principio central

```txt
HTML mínimo
componentes pequeños
contenido separado
estilos compartidos
```
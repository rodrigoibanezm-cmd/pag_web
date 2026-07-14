# PAG WEB — NexusG

Sitio público de NexusG desplegado en Vercel

## Responsabilidad

Esta repo contiene únicamente la experiencia web pública

```txt
página Qué
página Cómo
componentes visuales
data editorial
estilos responsive
configuración de deploy
```

No contiene backend, lógica de negocio, agentes, MCP, bases de datos ni procesos de integración

## Rutas

```txt
/       página Qué
/como   página Cómo
```

La página `Qué` provoca reconocimiento

La página `Cómo` reduce incertidumbre después de que el visitante ya quiere entender el sistema

## Arquitectura

```txt
index.html
→ src/app.js
→ src/router.js
→ pages
→ components
→ data
→ styles
```

Reglas obligatorias

```txt
1 archivo = 1 responsabilidad
ningún archivo supera 100 líneas
refactorizar antes de alcanzar el límite
main debe permanecer desplegable
```

## Documentación

- [Contexto y objetivo](docs/CONTEXTO.md)
- [Producto visible](docs/PRODUCTO.md)
- [Responsabilidad de las páginas](docs/PAGINAS.md)
- [Criterios editoriales](docs/CONTENIDO.md)
- [Aprendizajes de investigación](docs/INVESTIGACION.md)
- [Historia de decisiones](docs/HISTORIA.md)
- [Arquitectura frontend](docs/ARQUITECTURA.md)
- [Responsive y mobile](docs/RESPONSIVE.md)
- [Deploy en Vercel](docs/DEPLOY.md)

## Fuente de verdad

`docs/CONTEXTO.md` fija el objetivo de la landing

`docs/PRODUCTO.md` fija qué significan PressureBoard y Workspace en la web

`docs/PAGINAS.md` fija qué puede y qué no puede hacer cada ruta

La implementación no debe reabrir estrategia, hero, estructura ni narrativa validadas

## Estado

```txt
estrategia cerrada
narrativa cerrada
contenido principal validado
arquitectura modular iniciada
implementación pendiente de completar y probar
Vercel conectado a main
```
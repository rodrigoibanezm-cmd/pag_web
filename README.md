# PAG WEB — NexusG

Landing pública de NexusG desplegada en Vercel.

## Responsabilidad

La web muestra qué trabajo hace NexusG, cómo trabaja y por qué PressureBoard y
Workspace son útiles. No contiene backend, motores, agentes, MCP, bases de datos
ni lógica de negocio.

## Rutas

```txt
/       página Qué
/como   página Cómo
```

La página `Qué` provoca la pregunta. La página `Cómo` reduce la incertidumbre.

## Arquitectura

```txt
index.html
→ src/app.js
→ src/router.js
→ páginas
→ componentes
→ datos y estilos
```

Reglas obligatorias:

```txt
1 archivo = 1 responsabilidad
ningún archivo supera 100 líneas
refactorizar antes de alcanzar el límite
```

## Documentación

- [Contexto y objetivo](docs/CONTEXTO.md)
- [Producto visible](docs/PRODUCTO.md)
- [Responsabilidad de las páginas](docs/PAGINAS.md)
- [Criterios editoriales](docs/CONTENIDO.md)
- [Aprendizajes de investigación](docs/INVESTIGACION.md)
- [Historia de las decisiones](docs/HISTORIA.md)
- [Arquitectura frontend](docs/ARQUITECTURA.md)
- [Responsive y mobile](docs/RESPONSIVE.md)
- [Deploy en Vercel](docs/DEPLOY.md)

## Estado

```txt
estrategia y narrativa cerradas
contenido principal validado
arquitectura modular iniciada
implementación de páginas pendiente
Vercel conectado a main
```

La implementación puede corregir estructura técnica y responsive. No debe
reabrir el hero, agregar secciones, introducir conceptos ni reescribir la
narrativa validada.

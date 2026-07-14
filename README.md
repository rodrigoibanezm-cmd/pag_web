# PAG WEB — NexusG

Landing pública de NexusG desplegada en Vercel.

## Responsabilidad

```txt
explicar qué hace NexusG
mostrar cómo trabaja
presentar PressureBoard y Workspace
convertir preguntas complejas en una experiencia web clara
```

## Esta repo NO contiene

```txt
backend de NexusG
motores de dominio
agentes
MCP
bases de datos
lógica de negocio
```

La web solo presenta el producto.

## Rutas

```txt
/       página Qué
/como   página Cómo
```

## Arquitectura

```txt
index.html
→ src/app.js
→ src/router.js
→ páginas
→ componentes
→ estilos
```

Regla:

```txt
1 archivo = 1 responsabilidad
ningún archivo debe crecer sin límite
preferencia: menos de 100 líneas
```

## Documentación

- [Producto y narrativa](docs/PRODUCTO.md)
- [Arquitectura frontend](docs/ARQUITECTURA.md)
- [Contenido editorial](docs/CONTENIDO.md)
- [Responsive y mobile](docs/RESPONSIVE.md)
- [Deploy en Vercel](docs/DEPLOY.md)

## Principio central

```txt
la página Qué provoca la pregunta
la página Cómo reduce la incertidumbre
```

## Estado

```txt
estrategia de la página Qué cerrada
contenido principal validado
arquitectura modular en construcción
Vercel conectado a main
```
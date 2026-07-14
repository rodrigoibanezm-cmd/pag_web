# DEPLOY EN VERCEL

## Infraestructura

```txt
GitHub main
↓
Vercel
↓
sitio público
```

Cada commit en `main` genera un nuevo deploy.

## Configuración Vercel

```txt
Framework Preset: Other
Root Directory: ./
Build Command: vacío
Output Directory: vacío
Environment Variables: ninguna
```

## Archivos necesarios

```txt
index.html
vercel.json
src/
styles/
```

## Rutas públicas

```txt
/       página Qué
/como   página Cómo
```

## Deploy automático

Flujo normal:

```txt
cambio en GitHub
↓
commit en main
↓
Vercel detecta el cambio
↓
crea deployment
↓
publica nueva versión
```

## Error 404

Si Vercel muestra `404 NOT_FOUND`, revisar:

```txt
existe index.html en la raíz
vercel.json es válido
la ruta está contemplada por el rewrite
el último commit llegó a main
```

## Validación después de cada deploy

Comprobar:

```txt
/ carga correctamente
/como carga directamente
navegación entre rutas funciona
mobile no tiene scroll horizontal
no existen errores en consola
```

## Rollback

Vercel mantiene deployments anteriores.

Si una versión falla:

```txt
abrir Deployments
seleccionar versión anterior estable
promover a Production
```

## Regla

```txt
main siempre debe representar una versión desplegable
```
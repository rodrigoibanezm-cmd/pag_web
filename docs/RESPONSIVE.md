# RESPONSIVE Y MOBILE

## Principio

Existe una sola web responsive.

No se mantienen versiones separadas para desktop y mobile.

## Objetivo

La experiencia debe conservar:

```txt
jerarquía
ritmo
legibilidad
contraste
orden narrativo
```

en cualquier ancho.

## Breakpoints de referencia

```txt
1440 px  desktop amplio
1024 px  notebook / tablet horizontal
768 px   tablet
390 px   mobile estándar
360 px   mobile pequeño
```

Los breakpoints no reemplazan la prueba visual.

## Desktop

```txt
hero dividido
secciones en grilla
tarjetas con densidad editorial
navegación completa
```

## Tablet

```txt
reducir columnas
reducir padding
conservar jerarquía tipográfica
```

## Mobile

```txt
una columna
orden narrativo vertical
navegación simplificada
sin scroll horizontal
botones cómodos para tocar
```

## Reglas

```txt
no usar anchos fijos que rompan mobile
usar clamp para tipografía principal
usar grids que colapsan a una columna
mantener mínimo 12 px de margen exterior
no reducir texto hasta volverlo ilegible
```

## Validación mínima

Revisar ambas rutas en:

```txt
/       Qué
/como   Cómo
```

Y comprobar:

```txt
ningún elemento sale de pantalla
las tarjetas mantienen orden
los textos no se superponen
los enlaces funcionan
el hero conserva su intención
```

## Principio final

```txt
responsive no es achicar desktop
es conservar la experiencia en otro ancho
```
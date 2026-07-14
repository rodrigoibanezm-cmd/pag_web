# CÓMO LLEGAMOS A ESTA VERSIÓN

## 1. Definición inicial

La web comenzó como una landing tradicional orientada a explicar qué hacía
NexusG. PressureBoard y Workspace aparecían como productos o capacidades.

## 2. Cambio de objetivo

Se definió una conducta más precisa: que un gerente encuentre valiosas las
preguntas, intente responderlas dentro de su empresa y descubra el costo real de
reconstruir el contexto.

Esto desplazó el foco desde conversión explícita hacia reconocimiento.

## 3. Auditorías editoriales

Las revisiones desde mirada ejecutiva, producto, UX y conversión coincidieron en
que las preguntas tenían más fuerza que las explicaciones. Cuando la página
explicaba demasiado, el lector volvía a sentirse frente a software en venta.

## 4. Refinamiento del producto

Se dejó de presentar PressureBoard como alertas y se definió como selección de
situaciones cuyo costo de ignorarlas supera el costo de investigarlas.

Workspace dejó de presentarse como chat. Su entregable quedó definido como
contexto preparado, evidencia y recomendación.

## 5. Separación narrativa

La versión `Qué` quedó dedicada a preguntas, prueba y trabajos resueltos. La
explicación de fuentes, dominios, reglas y operación se movió a `Cómo`.

## 6. Implementación

Se decidió un sitio estático sin framework, desplegado en Vercel, con rutas `/`
y `/como`. La implementación debe conservar exactamente el contenido validado,
ser responsive y separar estructura, componentes, datos y estilos.

## 7. Regla de ingeniería

Ningún archivo puede superar 100 líneas. No es una preferencia. Se refactoriza
antes de alcanzar el límite, incluyendo documentación.

## Estado actual

La estrategia y la narrativa están cerradas. La siguiente fase es implementar,
comparar visualmente escritorio y mobile, y corregir defectos sin reabrir la
estructura, el hero ni los conceptos.

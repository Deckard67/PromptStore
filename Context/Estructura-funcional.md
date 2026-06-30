# PromptStore: tareas pequeñas y ordenadas para construir el proyecto

## Fase 1. Preparación del proyecto

### Tarea 1. Definir el nombre y propósito de la app

Resultado esperado: una frase clara que explique qué es PromptStore.

### Tarea 2. Definir la propuesta de valor principal

Resultado esperado: un mensaje breve tipo “Guarda, mejora y comparte tus prompts de inteligencia artificial”.

### Tarea 3. Definir el usuario objetivo inicial

Resultado esperado: una descripción sencilla del primer tipo de usuario al que va dirigida la app.

### Tarea 4. Confirmar el alcance del MVP

Resultado esperado: lista cerrada de funcionalidades imprescindibles para la primera versión.

### Tarea 5. Separar funcionalidades futuras

Resultado esperado: lista de funciones que no se construirán todavía.

### Tarea 6. Definir el flujo principal de uso

Resultado esperado: recorrido básico del usuario desde que entra hasta que guarda y comparte un prompt.

### Tarea 7. Definir el tono visual general

Resultado esperado: una orientación simple de diseño: limpio, claro, productivo y moderno.

## Fase 2. Estructura inicial de pantallas

### Tarea 8. Crear la estructura base de navegación

Resultado esperado: la app tiene una navegación inicial entre pantallas principales.

### Tarea 9. Crear la pantalla Home pública

Resultado esperado: una página inicial con explicación del producto y llamadas a registro/login.

### Tarea 10. Crear la pantalla de registro

Resultado esperado: una pantalla visual con campos de nombre, email y contraseña.

### Tarea 11. Crear la pantalla de login

Resultado esperado: una pantalla visual con campos de email y contraseña.

### Tarea 12. Crear el dashboard privado visual

Resultado esperado: una pantalla inicial para usuario registrado, aunque todavía use datos ficticios.

### Tarea 13. Crear la pantalla de biblioteca de prompts

Resultado esperado: una pantalla con una lista simulada de prompts.

### Tarea 14. Crear la pantalla de crear prompt

Resultado esperado: un formulario visual para añadir un prompt.

### Tarea 15. Crear la pantalla de editar prompt

Resultado esperado: un formulario visual similar al de creación, preparado para editar datos existentes.

### Tarea 16. Crear la pantalla de detalle privado del prompt

Resultado esperado: una pantalla donde se ve un prompt completo con acciones principales.

### Tarea 17. Crear la página pública de prompt

Resultado esperado: una página visible sin login con estructura de título, descripción y texto del prompt.

### Tarea 18. Crear la pantalla de perfil de usuario

Resultado esperado: una pantalla simple con datos básicos del usuario.

### Tarea 19. Crear estados vacíos básicos

Resultado esperado: mensajes para cuando no hay prompts, favoritos o resultados de búsqueda.

### Tarea 20. Crear pantalla o mensaje de error para prompt no encontrado

Resultado esperado: una vista clara cuando una URL pública no existe.

## Fase 3. Revisión del prototipo visual

### Tarea 21. Revisar que todas las pantallas están conectadas

Resultado esperado: se puede navegar por toda la app sin quedarse atrapado.

### Tarea 22. Revisar el flujo de usuario nuevo

Resultado esperado: el recorrido home → registro → dashboard se entiende.

### Tarea 23. Revisar el flujo de usuario recurrente

Resultado esperado: el recorrido login → dashboard → biblioteca se entiende.

### Tarea 24. Revisar el flujo de creación de prompt

Resultado esperado: el usuario puede entender cómo se añade un prompt.

### Tarea 25. Revisar el flujo de publicación de prompt

Resultado esperado: queda claro cómo un prompt pasa de privado a público.

### Tarea 26. Eliminar pantallas duplicadas o innecesarias

Resultado esperado: estructura más limpia antes de conectar lógica real.

## Fase 4. Modelo de datos conceptual

### Tarea 27. Definir los datos del usuario

Resultado esperado: lista clara de campos del usuario.

### Tarea 28. Definir los datos del prompt

Resultado esperado: lista clara de campos del prompt.

### Tarea 29. Definir la relación entre usuario y prompt

Resultado esperado: cada prompt queda asociado a un usuario propietario.

### Tarea 30. Definir el sistema de categorías

Resultado esperado: decisión sobre usar categorías fijas en el MVP.

### Tarea 31. Definir los datos SEO del prompt público

Resultado esperado: campos necesarios para título SEO, descripción SEO y slug.

### Tarea 32. Decidir qué campos son obligatorios

Resultado esperado: lista de campos que el usuario debe completar sí o sí.

### Tarea 33. Decidir qué campos son opcionales

Resultado esperado: lista de campos que pueden quedar vacíos.

### Tarea 34. Decidir si se guardan sugerencias de IA

Resultado esperado: decisión clara; para el MVP, lo recomendable es no guardarlas.

## Fase 5. Autenticación

### Tarea 35. Activar sistema de registro

Resultado esperado: el usuario puede crear una cuenta.

### Tarea 36. Activar sistema de login

Resultado esperado: el usuario puede iniciar sesión.

### Tarea 37. Activar sistema de cierre de sesión

Resultado esperado: el usuario puede salir de su cuenta.

### Tarea 38. Proteger el dashboard privado

Resultado esperado: solo usuarios con sesión pueden entrar.

### Tarea 39. Proteger la biblioteca de prompts

Resultado esperado: solo usuarios con sesión pueden ver su biblioteca.

### Tarea 40. Proteger crear y editar prompt

Resultado esperado: solo usuarios con sesión pueden crear o modificar prompts.

### Tarea 41. Crear redirección si no hay sesión

Resultado esperado: un usuario sin sesión va a login si intenta entrar en una zona privada.

### Tarea 42. Mostrar errores básicos de login

Resultado esperado: el usuario entiende si el email o la contraseña fallan.

### Tarea 43. Mostrar errores básicos de registro

Resultado esperado: el usuario entiende si falta un dato o el email ya existe.

## Fase 6. Base de datos de prompts

### Tarea 44. Crear estructura para guardar usuarios

Resultado esperado: los usuarios registrados quedan almacenados correctamente.

### Tarea 45. Crear estructura para guardar prompts

Resultado esperado: existe un lugar donde guardar prompts.

### Tarea 46. Asociar prompts al usuario propietario

Resultado esperado: cada prompt pertenece a un usuario concreto.

### Tarea 47. Guardar fecha de creación del prompt

Resultado esperado: cada prompt registra cuándo fue creado.

### Tarea 48. Guardar fecha de última modificación

Resultado esperado: cada prompt registra cuándo fue actualizado.

### Tarea 49. Guardar estado favorito

Resultado esperado: cada prompt puede estar marcado o no como favorito.

### Tarea 50. Guardar estado público o privado

Resultado esperado: cada prompt puede ser privado o público.

### Tarea 51. Guardar slug público

Resultado esperado: los prompts públicos pueden tener una URL propia.

### Tarea 52. Guardar campos SEO básicos

Resultado esperado: cada prompt público puede tener título SEO y meta descripción.

## Fase 7. Crear prompts

### Tarea 53. Conectar formulario de crear prompt con la base de datos

Resultado esperado: el formulario guarda prompts reales.

### Tarea 54. Validar campo título

Resultado esperado: no se guarda un prompt sin título si el título es obligatorio.

### Tarea 55. Validar campo texto del prompt

Resultado esperado: no se guarda un prompt vacío.

### Tarea 56. Guardar descripción del prompt

Resultado esperado: la descripción queda asociada al prompt.

### Tarea 57. Guardar categoría del prompt

Resultado esperado: la categoría queda asociada al prompt.

### Tarea 58. Guardar estado favorito al crear

Resultado esperado: el usuario puede crear un prompt ya marcado como favorito.

### Tarea 59. Guardar estado público o privado al crear

Resultado esperado: el usuario puede decidir visibilidad desde el formulario.

### Tarea 60. Mostrar confirmación al guardar

Resultado esperado: el usuario sabe que el prompt se ha guardado.

### Tarea 61. Redirigir al detalle después de crear

Resultado esperado: tras guardar, el usuario ve el prompt creado.

## Fase 8. Biblioteca privada

### Tarea 62. Cargar prompts del usuario en la biblioteca

Resultado esperado: el usuario ve solo sus prompts.

### Tarea 63. Mostrar título de cada prompt

Resultado esperado: la lista muestra títulos claros.

### Tarea 64. Mostrar descripción breve de cada prompt

Resultado esperado: cada prompt se entiende desde el listado.

### Tarea 65. Mostrar categoría de cada prompt

Resultado esperado: el usuario puede identificar el tipo de prompt.

### Tarea 66. Mostrar estado favorito

Resultado esperado: se ve qué prompts están marcados como favoritos.

### Tarea 67. Mostrar estado público o privado

Resultado esperado: se ve si un prompt está publicado o no.

### Tarea 68. Mostrar fecha de última modificación

Resultado esperado: el usuario sabe qué prompts se han editado recientemente.

### Tarea 69. Crear enlace desde la lista al detalle

Resultado esperado: al pulsar un prompt, se abre su vista completa.

### Tarea 70. Crear estado vacío de biblioteca

Resultado esperado: si no hay prompts, se invita a crear el primero.

## Fase 9. Detalle privado del prompt

### Tarea 71. Cargar datos reales del prompt

Resultado esperado: la pantalla muestra el prompt seleccionado.

### Tarea 72. Mostrar texto completo del prompt

Resultado esperado: el usuario puede leer el prompt entero.

### Tarea 73. Añadir botón copiar prompt

Resultado esperado: el usuario puede copiar el texto completo.

### Tarea 74. Mostrar confirmación al copiar

Resultado esperado: el usuario sabe que el prompt se ha copiado.

### Tarea 75. Añadir botón editar

Resultado esperado: el usuario puede ir a la edición del prompt.

### Tarea 76. Añadir botón eliminar

Resultado esperado: el usuario puede iniciar el borrado del prompt.

### Tarea 77. Añadir confirmación antes de eliminar

Resultado esperado: se evita borrar por accidente.

### Tarea 78. Mostrar URL pública si el prompt es público

Resultado esperado: el usuario puede ver y copiar el enlace público.

### Tarea 79. Ocultar URL pública si el prompt es privado

Resultado esperado: no se muestra enlace cuando el prompt no está publicado.

## Fase 10. Editar prompts

### Tarea 80. Cargar datos existentes en el formulario de edición

Resultado esperado: el usuario ve los datos actuales antes de modificar.

### Tarea 81. Guardar cambios de título

Resultado esperado: el título se actualiza correctamente.

### Tarea 82. Guardar cambios de descripción

Resultado esperado: la descripción se actualiza correctamente.

### Tarea 83. Guardar cambios del texto del prompt

Resultado esperado: el contenido principal se actualiza correctamente.

### Tarea 84. Guardar cambios de categoría

Resultado esperado: la categoría se actualiza correctamente.

### Tarea 85. Guardar cambios de favorito

Resultado esperado: el estado favorito se actualiza correctamente.

### Tarea 86. Guardar cambios de público/privado

Resultado esperado: la visibilidad se actualiza correctamente.

### Tarea 87. Actualizar fecha de modificación

Resultado esperado: cada edición actualiza la fecha correspondiente.

### Tarea 88. Volver al detalle después de editar

Resultado esperado: el usuario ve el prompt actualizado.

## Fase 11. Eliminar prompts

### Tarea 89. Activar eliminación desde detalle

Resultado esperado: el usuario puede borrar un prompt desde su pantalla privada.

### Tarea 90. Activar eliminación desde biblioteca, si se desea

Resultado esperado: el usuario puede borrar sin entrar al detalle.

### Tarea 91. Confirmar eliminación antes de ejecutar

Resultado esperado: aparece un aviso antes de borrar.

### Tarea 92. Redirigir a biblioteca tras eliminar

Resultado esperado: el usuario vuelve a la lista tras borrar.

### Tarea 93. Verificar que el prompt eliminado ya no aparece

Resultado esperado: el prompt desaparece de la biblioteca.

### Tarea 94. Verificar que la URL pública deja de funcionar

Resultado esperado: si era público, la página pública ya no muestra el prompt.

## Fase 12. Favoritos

### Tarea 95. Marcar prompt como favorito desde biblioteca

Resultado esperado: el usuario puede destacar un prompt desde la lista.

### Tarea 96. Desmarcar favorito desde biblioteca

Resultado esperado: el usuario puede quitar el favorito desde la lista.

### Tarea 97. Marcar favorito desde detalle

Resultado esperado: el usuario puede destacar un prompt desde la vista completa.

### Tarea 98. Desmarcar favorito desde detalle

Resultado esperado: el usuario puede quitar el favorito desde la vista completa.

### Tarea 99. Mostrar favoritos en dashboard

Resultado esperado: el dashboard muestra accesos rápidos a prompts favoritos.

### Tarea 100. Crear estado vacío de favoritos

Resultado esperado: si no hay favoritos, la app lo explica bien.

## Fase 13. Búsqueda y filtros

### Tarea 101. Añadir buscador en biblioteca

Resultado esperado: aparece un campo de búsqueda visible.

### Tarea 102. Buscar por título

Resultado esperado: el usuario encuentra prompts por título.

### Tarea 103. Buscar por descripción

Resultado esperado: el usuario encuentra prompts por descripción.

### Tarea 104. Buscar por texto del prompt

Resultado esperado: el usuario encuentra prompts por contenido.

### Tarea 105. Añadir filtro por categoría

Resultado esperado: el usuario puede ver prompts de una categoría concreta.

### Tarea 106. Añadir filtro por favoritos

Resultado esperado: el usuario puede ver solo favoritos.

### Tarea 107. Añadir filtro por públicos

Resultado esperado: el usuario puede ver solo prompts públicos.

### Tarea 108. Añadir filtro por privados

Resultado esperado: el usuario puede ver solo prompts privados.

### Tarea 109. Crear mensaje de búsqueda sin resultados

Resultado esperado: si no hay coincidencias, la app lo comunica claramente.

### Tarea 110. Limpiar búsqueda y filtros

Resultado esperado: el usuario puede volver al listado completo fácilmente.

## Fase 14. Parte pública y SEO

### Tarea 111. Generar slug al hacer público un prompt

Resultado esperado: cada prompt público tiene una URL limpia.

### Tarea 112. Crear página pública accesible sin login

Resultado esperado: cualquier visitante puede abrir un prompt público.

### Tarea 113. Bloquear acceso público a prompts privados

Resultado esperado: un prompt privado no se muestra aunque se conozca la URL.

### Tarea 114. Mostrar título en página pública

Resultado esperado: el visitante ve un título claro.

### Tarea 115. Mostrar descripción en página pública

Resultado esperado: el visitante entiende para qué sirve el prompt.

### Tarea 116. Mostrar categoría en página pública

Resultado esperado: el visitante identifica el tipo de prompt.

### Tarea 117. Mostrar texto completo del prompt público

Resultado esperado: el visitante puede leer el prompt.

### Tarea 118. Añadir botón copiar en página pública

Resultado esperado: el visitante puede copiar el prompt sin registrarse.

### Tarea 119. Añadir enlace de vuelta a la home

Resultado esperado: el visitante puede conocer la app.

### Tarea 120. Añadir llamada a crear cuenta

Resultado esperado: la página pública puede captar nuevos usuarios.

### Tarea 121. Añadir título SEO

Resultado esperado: cada página pública tiene un título optimizado.

### Tarea 122. Añadir meta descripción

Resultado esperado: cada página pública tiene una descripción para buscadores.

### Tarea 123. Usar H1 claro en la página pública

Resultado esperado: la estructura SEO básica es correcta.

### Tarea 124. Crear error público para prompt inexistente

Resultado esperado: una URL inválida muestra un mensaje correcto.

## Fase 15. Dashboard

### Tarea 125. Mostrar total de prompts

Resultado esperado: el usuario ve cuántos prompts tiene guardados.

### Tarea 126. Mostrar total de favoritos

Resultado esperado: el usuario ve cuántos favoritos tiene.

### Tarea 127. Mostrar últimos prompts modificados

Resultado esperado: el usuario accede rápidamente a actividad reciente.

### Tarea 128. Mostrar prompts favoritos destacados

Resultado esperado: el usuario accede a sus prompts clave.

### Tarea 129. Añadir botón crear prompt en dashboard

Resultado esperado: el usuario puede crear un prompt sin ir primero a biblioteca.

### Tarea 130. Añadir enlace a biblioteca completa

Resultado esperado: el usuario puede acceder al listado total.

## Fase 16. Perfil de usuario

### Tarea 131. Mostrar datos básicos del usuario

Resultado esperado: el usuario ve su nombre y email.

### Tarea 132. Permitir editar nombre

Resultado esperado: el usuario puede actualizar su nombre visible.

### Tarea 133. Añadir acceso a cerrar sesión

Resultado esperado: el usuario puede salir desde perfil.

### Tarea 134. Mostrar información básica de cuenta

Resultado esperado: el perfil se entiende aunque sea simple.

### Tarea 135. Revisar si cambio de contraseña entra en MVP

Resultado esperado: decisión clara sobre incluirlo ahora o dejarlo para después.

## Fase 17. Función de IA: mejorar prompt

### Tarea 136. Añadir botón “Mejorar con IA”

Resultado esperado: el usuario ve la opción en crear, editar o detalle.

### Tarea 137. Enviar el texto actual a la función de IA

Resultado esperado: la IA recibe el contenido del prompt.

### Tarea 138. Recibir una versión mejorada

Resultado esperado: la IA devuelve una propuesta clara.

### Tarea 139. Mostrar versión original y versión mejorada

Resultado esperado: el usuario puede comparar.

### Tarea 140. Añadir botón aceptar mejora

Resultado esperado: el usuario puede sustituir el texto original si quiere.

### Tarea 141. Añadir botón descartar mejora

Resultado esperado: el usuario puede mantener el texto original.

### Tarea 142. Evitar sobrescritura automática

Resultado esperado: ningún texto cambia sin permiso del usuario.

### Tarea 143. Mostrar error si falla la IA

Resultado esperado: el usuario entiende que la mejora no se ha podido generar.

## Fase 18. Función de IA: sugerir título

### Tarea 144. Añadir botón “Sugerir título”

Resultado esperado: el usuario puede pedir ayuda para nombrar el prompt.

### Tarea 145. Generar varias opciones de título

Resultado esperado: la IA propone títulos alternativos.

### Tarea 146. Mostrar títulos sugeridos

Resultado esperado: el usuario puede ver las opciones.

### Tarea 147. Permitir elegir un título

Resultado esperado: el usuario puede aplicar una sugerencia.

### Tarea 148. Permitir descartar títulos

Resultado esperado: el usuario puede no usar ninguna sugerencia.

## Fase 19. Función de IA: sugerir categoría

### Tarea 149. Añadir botón “Sugerir categoría”

Resultado esperado: el usuario puede pedir una categoría.

### Tarea 150. Analizar el contenido del prompt

Resultado esperado: la IA interpreta el uso principal del prompt.

### Tarea 151. Proponer una categoría

Resultado esperado: la IA sugiere una categoría adecuada.

### Tarea 152. Permitir aceptar categoría

Resultado esperado: el usuario puede aplicar la categoría sugerida.

### Tarea 153. Permitir mantener categoría actual

Resultado esperado: el usuario no pierde su selección si no quiere.

## Fase 20. Función de IA: generar variantes

### Tarea 154. Añadir botón “Generar variantes”

Resultado esperado: el usuario puede pedir versiones alternativas.

### Tarea 155. Generar variante breve

Resultado esperado: la IA devuelve una versión más corta.

### Tarea 156. Generar variante detallada

Resultado esperado: la IA devuelve una versión más completa.

### Tarea 157. Generar variante creativa

Resultado esperado: la IA devuelve una versión más imaginativa.

### Tarea 158. Mostrar variantes en pantalla

Resultado esperado: el usuario puede comparar opciones.

### Tarea 159. Permitir copiar una variante

Resultado esperado: el usuario puede usar una variante sin guardarla.

### Tarea 160. Permitir guardar variante como nuevo prompt

Resultado esperado: una variante puede convertirse en prompt independiente.

## Fase 21. Pulido de experiencia

### Tarea 161. Revisar textos de botones

Resultado esperado: todos los botones son claros.

### Tarea 162. Revisar mensajes de error

Resultado esperado: los errores se entienden sin tecnicismos.

### Tarea 163. Revisar mensajes de éxito

Resultado esperado: el usuario sabe cuándo una acción ha salido bien.

### Tarea 164. Revisar estados de carga

Resultado esperado: la app no parece bloqueada mientras trabaja.

### Tarea 165. Revisar estados vacíos

Resultado esperado: las pantallas vacías orientan al usuario.

### Tarea 166. Revisar confirmaciones peligrosas

Resultado esperado: eliminar o cambiar privacidad requiere confirmación clara.

### Tarea 167. Revisar coherencia visual

Resultado esperado: las pantallas parecen parte de la misma app.

### Tarea 168. Revisar jerarquía visual

Resultado esperado: lo importante se ve primero.

## Fase 22. Responsive y accesibilidad básica

### Tarea 169. Revisar Home en móvil

Resultado esperado: la home se lee bien en pantalla pequeña.

### Tarea 170. Revisar biblioteca en móvil

Resultado esperado: la lista de prompts funciona bien en móvil.

### Tarea 171. Revisar formularios en móvil

Resultado esperado: crear y editar prompt es cómodo desde móvil.

### Tarea 172. Revisar detalle de prompt en móvil

Resultado esperado: el texto largo se puede leer y copiar bien.

### Tarea 173. Revisar página pública en móvil

Resultado esperado: un visitante puede copiar el prompt desde el teléfono.

### Tarea 174. Revisar contraste básico

Resultado esperado: los textos se leen bien.

### Tarea 175. Revisar tamaño de botones

Resultado esperado: los botones se pueden pulsar cómodamente.

### Tarea 176. Revisar navegación con teclado, si procede

Resultado esperado: la app tiene una accesibilidad mínima razonable.

## Fase 23. Seguridad y privacidad básica

### Tarea 177. Verificar que cada usuario solo ve sus prompts

Resultado esperado: no hay mezcla de datos entre usuarios.

### Tarea 178. Verificar que los prompts privados no son públicos

Resultado esperado: un prompt privado no se puede abrir sin permiso.

### Tarea 179. Verificar que las rutas privadas están protegidas

Resultado esperado: no se accede al área privada sin login.

### Tarea 180. Verificar que no se muestran datos sensibles

Resultado esperado: no aparecen claves, emails innecesarios ni datos internos.

### Tarea 181. Revisar mensajes de error técnicos

Resultado esperado: los errores no muestran información sensible.

### Tarea 182. Revisar uso de IA con contenido del usuario

Resultado esperado: queda claro cómo se usa el texto enviado a IA.

## Fase 24. Preparación para publicación

### Tarea 183. Revisar variables de entorno

Resultado esperado: la app no depende de datos locales mal configurados.

### Tarea 184. Eliminar datos falsos de prueba

Resultado esperado: la versión publicable no contiene contenido de maqueta.

### Tarea 185. Crear prompts públicos de ejemplo

Resultado esperado: la app tiene contenido inicial para revisar la parte pública.

### Tarea 186. Revisar home pública final

Resultado esperado: la home explica bien la app.

### Tarea 187. Revisar SEO básico de páginas públicas

Resultado esperado: las páginas públicas tienen título, descripción y estructura clara.

### Tarea 188. Revisar URL pública de cada prompt

Resultado esperado: las URLs son limpias y compartibles.

### Tarea 189. Revisar flujo completo en entorno online

Resultado esperado: todo funciona fuera del entorno de desarrollo.

### Tarea 190. Revisar errores en producción

Resultado esperado: no hay fallos graves visibles.

## Fase 25. Validación manual completa

### Tarea 191. Probar registro desde cero

Resultado esperado: una cuenta nueva se crea correctamente.

### Tarea 192. Probar login con cuenta existente

Resultado esperado: el acceso funciona.

### Tarea 193. Probar creación de prompt

Resultado esperado: el prompt se guarda.

### Tarea 194. Probar edición de prompt

Resultado esperado: los cambios se guardan.

### Tarea 195. Probar eliminación de prompt

Resultado esperado: el prompt desaparece.

### Tarea 196. Probar favorito

Resultado esperado: el estado favorito cambia correctamente.

### Tarea 197. Probar búsqueda

Resultado esperado: el usuario encuentra prompts.

### Tarea 198. Probar filtros

Resultado esperado: los filtros muestran resultados correctos.

### Tarea 199. Probar copiar prompt privado

Resultado esperado: el texto se copia.

### Tarea 200. Probar publicar prompt

Resultado esperado: se genera una URL pública.

### Tarea 201. Probar copiar prompt público

Resultado esperado: un visitante puede copiar el texto.

### Tarea 202. Probar mejorar prompt con IA

Resultado esperado: la IA devuelve una mejora útil.

### Tarea 203. Probar sugerir título con IA

Resultado esperado: la IA propone títulos.

### Tarea 204. Probar sugerir categoría con IA

Resultado esperado: la IA propone una categoría coherente.

### Tarea 205. Probar generar variantes con IA

Resultado esperado: la IA genera versiones alternativas.

### Tarea 206. Probar desde móvil

Resultado esperado: la app funciona correctamente en móvil.

### Tarea 207. Probar desde escritorio

Resultado esperado: la app funciona correctamente en escritorio.

## Fase 26. Cierre de primera versión publicable

### Tarea 208. Hacer lista de errores pendientes

Resultado esperado: se sabe qué queda por corregir.

### Tarea 209. Clasificar errores por importancia

Resultado esperado: los errores críticos se separan de los menores.

### Tarea 210. Corregir errores críticos

Resultado esperado: no hay fallos que bloqueen el uso principal.

### Tarea 211. Dejar mejoras no urgentes para versión posterior

Resultado esperado: no se retrasa el lanzamiento por caprichos.

### Tarea 212. Revisar que el MVP cumple su promesa

Resultado esperado: la app permite guardar, encontrar, mejorar y compartir prompts.

### Tarea 213. Preparar una descripción corta de lanzamiento

Resultado esperado: texto breve para presentar PromptStore.

### Tarea 214. Preparar una lista de próximas mejoras

Resultado esperado: roadmap posterior al MVP.

### Tarea 215. Dar por cerrada la primera versión publicable



# PromptStore - Documento base de vibe coding

## 1. Explicación en lenguaje natural: 
quiero crear una aplicación web sencilla llamada PromptStore donde los usuarios puedan registrarse, iniciar sesión y guardar los prompts que usan con inteligencia artificial. 

Cada prompt tendrá un título, una descripción, el texto del prompt, una categoría y la posibilidad de marcarlo como favorito. 

También quiero que alguno de los prompts puedan hacerse públicos, para compartirlos mediante una URL propia. estas páginas públicas deberán estar preparadas para SEO, con título, descripción y una estructura clara.

La app debe incluir funciones de IA para mejorar prompts y generar variantes, sugerir títulos y proponer categorías.

El objetivo final es tener una aplicación funcional, clara y publicable online.

## 2. Briefing de Producto

## 1. Objetivo de la app

**PromptStore** es una aplicación web sencilla para guardar, organizar, mejorar y compartir prompts utilizados con herramientas de inteligencia artificial.

El objetivo principal es que cualquier usuario pueda tener una biblioteca privada de prompts, marcar sus favoritos y decidir cuáles quiere hacer públicos mediante una URL propia optimizada para SEO.

La aplicación debe ser funcional, clara, publicable online y preparada para crecer sin complicar demasiado la primera versión.

## 2. Usuario objetivo

PromptStore está pensada para usuarios que utilizan inteligencia artificial de forma habitual y necesitan guardar instrucciones que les funcionan.

El perfil principal incluye creadores de contenido, copywriters, marketers, guionistas, docentes, programadores, diseñadores, consultores, estudiantes, emprendedores y cualquier persona que use herramientas como ChatGPT, Claude, Gemini, Midjourney, Runway, Perplexity o similares.

No debe estar pensada solo para usuarios técnicos. La experiencia tiene que ser simple, visual y directa.

## 3. Problema que resuelve

El problema central es que los prompts útiles se pierden.

Muchos usuarios guardan prompts en notas del móvil, documentos sueltos, conversaciones antiguas, capturas de pantalla o directamente no los guardan. Eso provoca pérdida de tiempo, desorden y dificultad para reutilizar prompts que ya han dado buenos resultados.

PromptStore resuelve ese problema ofreciendo un espacio único donde guardar, clasificar, buscar, mejorar y compartir prompts.

## 4. Funcionalidades principales

La app debe permitir que el usuario pueda registrarse, iniciar sesión y gestionar sus propios prompts.

Cada prompt tendrá estos elementos:

Título.

Descripción.

Texto completo del prompt.

Categoría.

Estado de favorito.

Estado público o privado.

URL pública si el prompt se comparte.

Además, el usuario debe poder crear, editar, eliminar, buscar y copiar prompts de forma rápida.

Una funcionalidad importante es el botón de copiar prompt, porque el uso natural de la app será entrar, localizar un prompt y reutilizarlo en otra herramienta de IA.

También debe existir la posibilidad de marcar prompts como favoritos para acceder rápidamente a los más usados.

## 5. Pantallas necesarias

## Home pública

Página principal de presentación de PromptStore.

Debe explicar qué es la aplicación, para quién sirve y qué problema resuelve. Debe tener llamadas claras a la acción para registrarse o iniciar sesión.

La home debería transmitir esta idea: “Guarda, mejora y comparte tus mejores prompts de IA.”

## Registro

Pantalla para que el usuario cree una cuenta.

Campos recomendados:

Nombre.

Email.

Contraseña.

Confirmación de contraseña, opcional.

## Login

Pantalla para iniciar sesión.

Campos:

Email.

Contraseña.

Enlace a recuperar contraseña, si el sistema lo permite.

Enlace a crear cuenta.

## Dashboard privado

Pantalla principal una vez el usuario ha iniciado sesión.

Debe mostrar:

Número total de prompts guardados.

Prompts favoritos.

Últimos prompts creados o editados.

Botón para crear nuevo prompt.

Acceso rápido a la biblioteca completa.

## Biblioteca de prompts

Pantalla donde se listan todos los prompts del usuario.

Debe incluir:

Buscador.

Filtro por categoría.

Filtro por favoritos.

Filtro por públicos o privados.

Listado de prompts con título, descripción breve, categoría y estado.

Botón para copiar.

Botón para editar.

Botón para ver detalle.

## Crear prompt

Formulario para añadir un nuevo prompt.

Campos:

Título.

Descripción.

Texto del prompt.

Categoría.

Favorito: sí/no.

Público: sí/no.

Opciones de IA para mejorar, generar variantes, sugerir título y sugerir categoría.

## Editar prompt

Puede reutilizar el mismo formulario de creación, pero cargando los datos existentes.

Debe permitir cambiar todos los campos del prompt.

## Detalle privado del prompt

Pantalla interna donde el usuario ve toda la información del prompt.

Debe incluir:

Título.

Descripción.

Texto completo.

Categoría.

Estado de favorito.

Estado público o privado.

URL pública, si está activada.

Botón copiar.

Botón editar.

Botón eliminar.

Botón mejorar con IA.

Botón generar variantes.

## Página pública del prompt

Cada prompt público debe tener una URL propia.

Ejemplo conceptual:

`/prompts/prompts-para-crear-articulos-seo`

Esta página debe estar preparada para SEO y mostrar:

Título del prompt.

Descripción.

Categoría.

Texto del prompt.

Botón para copiar.

Nombre del autor, si se quiere mostrar.

Fecha de publicación o actualización.

Estructura clara con encabezados HTML correctos.

## Perfil de usuario

Pantalla sencilla para gestionar datos básicos del usuario.

Debe incluir:

Nombre.

Email.

Cambio de contraseña, si procede.

Preferencias básicas.

## 6. Datos que hay que guardar

## Usuario

ID de usuario.

Nombre.

Email.

Contraseña cifrada o gestionada por el sistema de autenticación.

Fecha de creación.

Fecha de último acceso, opcional.

## Prompt

ID del prompt.

ID del usuario propietario.

Título.

Descripción.

Texto completo del prompt.

Categoría.

Favorito: verdadero/falso.

Público: verdadero/falso.

Slug o URL pública.

Meta título SEO.

Meta descripción SEO.

Fecha de creación.

Fecha de última modificación.

## Categoría

Para el MVP puede ser un campo de texto o una lista simple.

Categorías iniciales recomendadas:

Marketing.

Escritura.

Programación.

Imagen.

Vídeo.

Educación.

Productividad.

Negocio.

SEO.

Otros.

Más adelante, el usuario podría crear sus propias categorías.

## Datos SEO del prompt público

Cada prompt público debería guardar:

Título SEO.

Meta descripción.

Slug.

Texto visible principal.

Fecha de publicación.

Estado indexable o no indexable.

Esto permitirá que las páginas públicas puedan posicionarse en Google.

## 7. Parte pública y SEO

PromptStore debe tener una parte privada y una parte pública.

La parte privada sirve para guardar y organizar prompts personales.

La parte pública sirve para compartir prompts mediante una URL y captar tráfico orgánico desde buscadores.

La estructura SEO básica debe incluir:

Home pública optimizada.

Página pública individual para cada prompt compartido.

URLs limpias y legibles.

Título SEO en cada página pública.

Meta descripción.

Encabezado H1 claro.

Descripción breve antes del prompt.

Categoría visible.

Botón de copiar.

La parte pública puede crecer después con páginas de categorías públicas, por ejemplo:

Prompts de marketing.

Prompts para ChatGPT.

Prompts para copywriting.

Prompts para crear imágenes.

Prompts para programación.

Para el MVP, basta con que los prompts públicos tengan una página individual bien construida.

## 8. Funciones de IA

Las funciones de IA deben ayudar al usuario a crear mejores prompts y ahorrar tiempo.

Funciones principales:

## Mejorar prompt

El usuario escribe o pega un prompt y la IA propone una versión más clara, precisa y útil.

Ejemplo:

Prompt original:

“Hazme un texto para vender un curso.”

Prompt mejorado:

“Actúa como copywriter especializado en venta de formación online. Escribe un texto persuasivo para promocionar un curso dirigido a…”

## Generar variantes

La IA puede crear varias versiones del mismo prompt.

Variantes posibles:

Más breve.

Más detallada.

Más profesional.

Más creativa.

Más orientada a SEO.

Más orientada a redes sociales.

## Sugerir títulos

La IA puede proponer títulos claros para prompts mal nombrados o demasiado genéricos.

Ejemplo:

De “Prompt Instagram” a “Generador de publicaciones persuasivas para Instagram”.

## Proponer categorías

La IA puede analizar el contenido del prompt y sugerir una categoría.

Ejemplo:

Si el prompt habla de artículos, keywords y posicionamiento, puede proponer “SEO”.

## Generar descripción

Aunque no estaba en la explicación inicial, sería muy útil que la IA también pueda proponer una descripción breve del prompt. Esto ayuda tanto en la biblioteca privada como en la página pública SEO.

## 9. MVP o primera versión mínima

La primera versión debe ser sencilla y funcional. Nada de convertir esto en una catedral antes de tener una puerta.

El MVP debería incluir:

Registro de usuarios.

Inicio de sesión.

Crear prompt.

Editar prompt.

Eliminar prompt.

Ver biblioteca de prompts.

Buscar prompts.

Marcar prompts como favoritos.

Filtrar por categoría.

Copiar prompt.

Marcar prompt como público o privado.

Generar URL pública para prompts públicos.

Página pública SEO para cada prompt compartido.

Función de IA para mejorar prompts.

Función de IA para sugerir título y categoría.

Eso ya sería una primera versión publicable y con sentido.

## 10. Funcionalidades que pueden esperar

No incluiría todavía en la primera versión:

Marketplace de prompts.

Sistema de pagos.

Prompts colaborativos entre equipos.

Likes públicos.

Comentarios.

Valoraciones.

Extensión de navegador.

Historial de versiones.

Carpetas avanzadas.

Importación masiva.

Panel de analítica SEO.

Todo eso puede llegar después. Ahora lo importante es que el usuario pueda guardar, encontrar, mejorar y compartir prompts sin fricción.

## 11. Resultado final esperado

El resultado final esperado es una aplicación web limpia, rápida y usable donde un usuario pueda crear su cuenta, guardar sus prompts, organizarlos, marcarlos como favoritos, mejorarlos con IA y compartir algunos públicamente mediante páginas optimizadas para SEO.

La experiencia debe ser directa:

Entro.

Guardo un prompt.

Lo mejoro si quiero.

Lo marco como favorito.

Lo hago público si me interesa.

Lo copio cuando lo necesito.

La app debe sentirse como una herramienta de trabajo sencilla, no como una red social disfrazada ni como un Notion mal afeitado.

## 3. Prompt maestro de desarrollo

Actúa como product manager y arquitecto funcional especializado en aplicaciones web creadas con herramientas de inteligencia artificial y vibe coding.

Quiero desarrollar una aplicación web llamada PromptStore.

Contexto general del proyecto:

PromptStore será una aplicación web sencilla para guardar, organizar, mejorar y compartir prompts utilizados con herramientas de inteligencia artificial. La idea es que los usuarios puedan tener una biblioteca privada de prompts, marcar sus favoritos y publicar algunos prompts mediante una URL propia optimizada para SEO.

No quiero construir una aplicación compleja desde el principio. Quiero empezar con una primera versión funcional, clara y publicable online.

Objetivo de la aplicación:

El objetivo de PromptStore es permitir que cualquier usuario pueda registrarse, iniciar sesión y guardar sus prompts de inteligencia artificial en un espacio ordenado, fácil de consultar y reutilizar.

La app debe permitir que el usuario cree, edite, elimine, copie, organice y mejore prompts. También debe permitir que algunos prompts se hagan públicos para compartirlos mediante una URL propia preparada para SEO.

Funcionalidades del MVP:

La primera versión mínima debe incluir:

Registro de usuarios.

Inicio de sesión.

Cierre de sesión.

Biblioteca privada de prompts.

Creación de nuevos prompts.

Edición de prompts existentes.

Eliminación de prompts.

Búsqueda de prompts.

Filtro por categoría.

Marcado de prompts como favoritos.

Botón para copiar el texto completo del prompt.

Opción para marcar un prompt como público o privado.

Generación de una URL pública para cada prompt público.

Página pública SEO para cada prompt compartido.

Funciones básicas de IA para mejorar prompts, generar variantes, sugerir títulos y proponer categorías.

Cada prompt debe tener como mínimo:

Título.

Descripción.

Texto completo del prompt.

Categoría.

Estado de favorito.

Estado público o privado.

Slug o URL pública, si el prompt es público.

Fecha de creación.

Fecha de última modificación.

Pantallas necesarias:

La aplicación debe contemplar estas pantallas:

Home pública.

Página de registro.

Página de login.

Dashboard privado del usuario.

Biblioteca de prompts.

Pantalla o formulario para crear prompt.

Pantalla o formulario para editar prompt.

Vista de detalle privado de un prompt.

Página pública individual para cada prompt compartido.

Perfil básico del usuario.

Pantallas de estado vacío, por ejemplo cuando el usuario aún no tiene prompts guardados.

Pantallas de error sencillas, por ejemplo cuando un prompt público no existe.

Login y base de datos:

La aplicación necesita sistema de autenticación y base de datos.

Debe existir una tabla o colección de usuarios y una tabla o colección de prompts.

Cada prompt debe estar asociado a un usuario propietario.

Los prompts privados solo deben ser visibles para el usuario que los creó.

Los prompts públicos deben poder verse sin iniciar sesión mediante una URL pública.

La estructura debe ser sencilla y mantenible. Propón una solución simple usando herramientas habituales en proyectos de vibe coding, por ejemplo Supabase, Firebase u otra alternativa equivalente, pero no desarrolles código todavía.

Parte pública y SEO:

La aplicación debe tener una parte pública pensada para captación orgánica.

La home pública debe explicar claramente qué es PromptStore, para quién sirve y qué problema resuelve.

Cada prompt público debe tener una página propia optimizada para SEO con:

URL limpia y legible.

Título SEO.

Meta descripción.

H1 claro.

Descripción visible del prompt.

Categoría.

Texto del prompt.

Botón para copiar.

Fecha de publicación o actualización.

La parte pública debe estar preparada para crecer en el futuro con páginas de categorías, pero en el MVP basta con la home pública y las páginas públicas individuales de prompts.

Funciones de IA:

La app debe incluir funciones de IA, pero sin sobrecargar la primera versión.

Funciones de IA previstas para el MVP:

Mejorar un prompt existente.

Generar variantes del prompt.

Sugerir títulos mejores.

Proponer una categoría adecuada.

Opcionalmente, generar una descripción breve del prompt.

Estas funciones deben estar integradas de forma práctica dentro del flujo de creación y edición de prompts. La IA debe ayudar al usuario a trabajar mejor, no convertir la app en algo confuso.

Instrucciones de trabajo:

No generes código completo todavía.

Primero analiza el proyecto y propón un plan de desarrollo paso a paso.

Divide el trabajo en fases pequeñas y claras.

Empieza por el MVP y deja las funciones avanzadas para fases posteriores.

Explica qué habría que construir primero, qué dependencias técnicas hacen falta y qué decisiones conviene tomar antes de empezar.

No sobrecompliques la arquitectura.

Prioriza una estructura simple, fácil de mantener y adecuada para una primera versión publicable.

Evita proponer microservicios, sistemas complejos de permisos, arquitectura empresarial, paneles avanzados o funcionalidades que no sean necesarias para validar el producto.

Antes de proponer cambios grandes en el alcance, la arquitectura, el modelo de datos o las funcionalidades principales, pregunta primero.

Cuando expliques cambios o decisiones técnicas, hazlo de forma sencilla, clara y comprensible para una persona no técnica.

Quiero que tu primera respuesta sea únicamente:

Un resumen de lo que has entendido.

Una propuesta de alcance para el MVP.

Una lista de pantallas.

Una propuesta básica de modelo de datos.

Un plan de desarrollo por fases.

Una lista de preguntas importantes antes de empezar.

No escribas todavía el código de la aplicación.

## Plan de desarrollo por fases

## Principio general

El proyecto debe avanzar en fases pequeñas, comprobables y reversibles. Cada fase debe producir algo tangible que se pueda ver, probar o revisar antes de pasar a la siguiente.

No se debe construir todo a la vez. La prioridad es validar primero la estructura básica de producto, después la experiencia privada del usuario, luego la base de datos, después la parte pública y finalmente las funciones de IA y publicación online.

La arquitectura debe mantenerse sencilla. No hace falta una estructura empresarial, ni microservicios, ni permisos avanzados, ni sistemas complejos antes de validar que la aplicación funciona y resuelve bien su problema principal.

# Fase 0. Definición funcional del producto

## Objetivo de la fase

Aclarar qué es la aplicación, para quién sirve, qué problema resuelve y qué debe incluir la primera versión mínima.

## Qué se construye

En esta fase no se construye todavía la aplicación. Se construye la base de decisión del producto:

Briefing funcional.

Lista de funcionalidades del MVP.

Lista de pantallas necesarias.

Modelo básico de datos.

Criterios de éxito de la primera versión.

## Decisiones antes de avanzar

Qué problema exacto resuelve la app.

Quién será el primer usuario objetivo.

Qué funcionalidades entran en el MVP.

Qué funcionalidades quedan fuera.

Qué significa “versión publicable” en este proyecto.

## Resultado tangible

Un documento breve de producto con:

Objetivo de la app.

Usuario objetivo.

Problema que resuelve.

Funcionalidades principales.

Pantallas necesarias.

Datos que se deben guardar.

Alcance del MVP.

## Qué revisar o validar antes de pasar a la siguiente fase

Comprobar que la app se puede explicar en una frase.

Comprobar que el MVP no está hinchado.

Comprobar que todas las funcionalidades responden al problema principal.

Eliminar cualquier función bonita pero no esencial.

# Fase 1. Estructura visual navegable sin lógica real

## Objetivo de la fase

Crear una primera maqueta funcional navegable para entender cómo se moverá el usuario dentro de la aplicación.

## Qué se construye

Una versión visual sencilla de las pantallas principales, todavía sin base de datos real ni autenticación completa.

Pantallas mínimas:

Home pública.

Registro.

Login.

Dashboard privado.

Biblioteca de prompts.

Crear prompt.

Editar prompt.

Detalle privado de prompt.

Página pública de prompt.

Perfil básico.

Estados vacíos y errores básicos.

## Decisiones antes de avanzar

Qué estructura de navegación tendrá la app.

Qué pantallas son realmente necesarias.

Qué información aparece en cada pantalla.

Qué acciones principales tendrá cada pantalla.

Qué tono visual se busca: sobrio, productivo, creativo, técnico, minimalista.

## Resultado tangible

Un prototipo navegable donde se pueda recorrer la app de forma básica, aunque los datos sean ficticios.

## Qué revisar o validar antes de pasar a la siguiente fase

Comprobar que el flujo principal se entiende:

Entrar.

Registrarse o iniciar sesión.

Ver biblioteca.

Crear prompt.

Ver prompt.

Copiar prompt.

Hacerlo público.

Comprobar que no hay pantallas duplicadas.

Comprobar que la interfaz no parece más compleja de lo necesario.

Comprobar que el usuario entiende qué hacer sin leer un manual.

# Fase 2. Modelo de datos y estructura interna

## Objetivo de la fase

Definir qué información necesita guardar la aplicación y cómo se relacionan los datos principales.

## Qué se construye

Modelo básico de datos para usuarios y prompts.

Estructura mínima recomendada:

Usuario:

ID.

Nombre.

Email.

Contraseña gestionada por el sistema de autenticación.

Fecha de creación.

Prompt:

ID.

ID del usuario propietario.

Título.

Descripción.

Texto completo del prompt.

Categoría.

Favorito: sí/no.

Público: sí/no.

Slug público.

Título SEO.

Meta descripción SEO.

Fecha de creación.

Fecha de última modificación.

## Decisiones antes de avanzar

Si las categorías serán fijas o editables por el usuario.

Si las etiquetas entran en el MVP o se dejan para una fase posterior.

Si los prompts públicos mostrarán o no el nombre del autor.

Si los prompts públicos podrán ser indexados por buscadores desde el inicio.

Qué campos son obligatorios y cuáles opcionales.

## Resultado tangible

Un esquema claro de base de datos o estructura de colecciones/tablas.

## Qué revisar o validar antes de pasar a la siguiente fase

Comprobar que cada prompt pertenece a un usuario.

Comprobar que los prompts privados no podrán verse públicamente.

Comprobar que los prompts públicos tienen suficiente información SEO.

Comprobar que no se guardan datos innecesarios.

Comprobar que el modelo permite crecer sin rehacerlo todo desde cero.

# Fase 3. Autenticación y área privada

## Objetivo de la fase

Permitir que los usuarios se registren, inicien sesión y accedan a una zona privada.

## Qué se construye

Registro de usuario.

Inicio de sesión.

Cierre de sesión.

Protección de rutas privadas.

Redirección automática según estado de sesión.

Perfil básico del usuario.

## Decisiones antes de avanzar

Qué datos se pedirán en el registro.

Si se permitirá login con email y contraseña solamente o también con proveedores externos más adelante.

Qué ocurre si un usuario intenta entrar en una ruta privada sin sesión.

Qué información mínima se mostrará en el perfil.

## Resultado tangible

Una aplicación donde un usuario pueda crear cuenta, iniciar sesión y acceder a un dashboard privado protegido.

## Qué revisar o validar antes de pasar a la siguiente fase

Comprobar que las rutas privadas no son accesibles sin login.

Comprobar que el cierre de sesión funciona.

Comprobar que el flujo de registro no tiene fricción innecesaria.

Comprobar que los mensajes de error son comprensibles.

# Fase 4. CRUD privado de prompts

## Objetivo de la fase

Construir el núcleo real de PromptStore: guardar, ver, editar y eliminar prompts.

## Qué se construye

Creación de prompts.

Listado de prompts del usuario.

Detalle privado de cada prompt.

Edición de prompts.

Eliminación de prompts.

Marcado como favorito.

Categoría.

Botón para copiar el prompt.

Estados vacíos cuando no hay prompts.

## Decisiones antes de avanzar

Qué campos serán obligatorios al crear un prompt.

Cómo se mostrará el listado: tarjetas, tabla o lista sencilla.

Cómo se confirma la eliminación.

Cómo se indicará que un prompt está marcado como favorito.

Cómo se mostrará la categoría.

## Resultado tangible

Una biblioteca privada funcional donde cada usuario puede gestionar sus propios prompts.

## Qué revisar o validar antes de pasar a la siguiente fase

Comprobar que un usuario solo ve sus propios prompts.

Comprobar que crear, editar y eliminar funciona correctamente.

Comprobar que copiar prompt es rápido y evidente.

Comprobar que el formulario no resulta pesado.

Comprobar que la biblioteca sigue siendo clara con varios prompts guardados.

# Fase 5. Búsqueda, filtros y favoritos

## Objetivo de la fase

Mejorar la recuperación de prompts para que la app sea útil en el uso diario.

## Qué se construye

Buscador por título y contenido.

Filtro por categoría.

Filtro por favoritos.

Filtro por públicos y privados, si ya existe el campo.

Acceso rápido a prompts favoritos desde el dashboard.

## Decisiones antes de avanzar

Qué campos debe consultar el buscador.

Si los filtros se pueden combinar.

Qué ocurre cuando no hay resultados.

Si el dashboard mostrará últimos prompts, favoritos o ambos.

## Resultado tangible

Una biblioteca donde el usuario puede encontrar rápidamente sus prompts sin revisar toda la lista.

## Qué revisar o validar antes de pasar a la siguiente fase

Comprobar que la búsqueda responde rápido.

Comprobar que los filtros son comprensibles.

Comprobar que los estados vacíos ayudan al usuario.

Comprobar que los favoritos tienen sentido práctico y no son solo decoración.

# Fase 6. Parte pública y páginas SEO

## Objetivo de la fase

Permitir que algunos prompts puedan compartirse públicamente mediante una URL propia optimizada para SEO.

## Qué se construye

Campo público/privado en cada prompt.

Generación de slug público.

Página pública individual para cada prompt.

Vista pública accesible sin login.

Campos SEO:

Título SEO.

Meta descripción.

H1 claro.

Descripción visible.

Categoría.

Texto del prompt.

Botón copiar.

Fecha de publicación o actualización.

Home pública básica orientada a captación.

## Decisiones antes de avanzar

Cómo se genera el slug.

Si el usuario puede editar el slug.

Si todos los prompts públicos serán indexables.

Si el nombre del autor será visible.

Qué ocurre si un prompt público se vuelve privado.

Qué contenido mínimo debe tener una página pública para no parecer pobre.

## Resultado tangible

Un usuario puede marcar un prompt como público, obtener una URL y compartirla con otra persona. Esa URL muestra una página clara y preparada para buscadores.

## Qué revisar o validar antes de pasar a la siguiente fase

Comprobar que los prompts privados no tienen acceso público.

Comprobar que las URLs públicas funcionan.

Comprobar que las páginas públicas tienen estructura SEO básica.

Comprobar que el botón copiar funciona sin login.

Comprobar que la home pública explica bien el producto.

# Fase 7. Funciones básicas de IA

## Objetivo de la fase

Añadir valor real a la app mediante IA sin convertirla en un monstruo confuso.

## Qué se construye

Funciones de IA dentro del flujo de crear y editar prompt:

Mejorar prompt.

Generar variantes.

Sugerir título.

Proponer categoría.

Opcionalmente, generar descripción breve.

## Decisiones antes de avanzar

Qué función de IA se implementa primero.

Si la IA sobrescribe el texto original o propone una versión revisable.

Cuántas variantes se generan.

Cómo se muestra el resultado al usuario.

Si el usuario puede aceptar, descartar o copiar la sugerencia.

Cómo se controlará el coste o uso de IA.

## Resultado tangible

El usuario puede pegar un prompt básico y recibir una versión mejorada, variantes útiles, títulos sugeridos y categorías propuestas.

## Qué revisar o validar antes de pasar a la siguiente fase

Comprobar que la IA ayuda y no molesta.

Comprobar que el usuario conserva el control.

Comprobar que las sugerencias no sobrescriben contenido sin permiso.

Comprobar que los textos generados son realmente útiles.

Comprobar que la interfaz no se llena de botones innecesarios.

# Fase 8. Pulido de experiencia y calidad

## Objetivo de la fase

Convertir la app funcional en una app agradable, clara y preparada para enseñar a usuarios reales.

## Qué se construye

Mejoras visuales.

Mensajes de carga.

Mensajes de error.

Confirmaciones de acciones.

Diseño responsive.

Revisión de textos de interfaz.

Mejora de estados vacíos.

Revisión de accesibilidad básica.

Optimización del flujo principal.

## Decisiones antes de avanzar

Qué tono de comunicación tendrá la app.

Qué elementos visuales son necesarios y cuáles sobran.

Qué mensajes necesitan ser más claros.

Qué errores deben estar previstos.

Qué partes deben simplificarse.

## Resultado tangible

Una versión usable y presentable de PromptStore, suficientemente clara para que una persona externa pueda probarla sin explicación previa.

## Qué revisar o validar antes de pasar a la siguiente fase

Probar la app como usuario nuevo.

Crear varios prompts de prueba.

Marcar favoritos.

Publicar un prompt.

Compartir una URL pública.

Usar una función de IA.

Revisar desde móvil.

Revisar desde escritorio.

Detectar puntos de fricción.

# Fase 9. Preparación para publicación online

## Objetivo de la fase

Preparar la aplicación para estar disponible públicamente en internet.

## Qué se construye

Configuración de entorno de producción.

Conexión estable con backend y base de datos.

Configuración de dominio o URL pública.

Revisión de variables de entorno.

Revisión de seguridad básica.

Revisión de SEO básico.

Revisión de rendimiento inicial.

Comprobación de rutas públicas y privadas.

## Decisiones antes de avanzar

Dónde se desplegará la app.

Qué dominio se utilizará.

Qué datos de prueba deben eliminarse.

Qué páginas deben ser indexables.

Qué páginas deben permanecer privadas.

Si se necesita aviso legal, política de privacidad o términos básicos.

## Resultado tangible

Una versión online de PromptStore accesible mediante una URL pública.

## Qué revisar o validar antes de pasar a la siguiente fase

Comprobar que el registro funciona en producción.

Comprobar que el login funciona en producción.

Comprobar que la base de datos guarda correctamente.

Comprobar que las páginas públicas se pueden compartir.

Comprobar que las páginas privadas no son accesibles sin sesión.

Comprobar que no hay claves o datos sensibles expuestos.

# Fase 10. Validación con usuarios reales

## Objetivo de la fase

Probar la app con usuarios reales antes de ampliar funcionalidades.

## Qué se construye

No se construyen grandes funcionalidades nuevas. Se prepara la validación:

Lista de tareas de prueba.

Formulario o sistema sencillo de feedback.

Registro de errores encontrados.

Lista de mejoras priorizadas.

## Decisiones antes de avanzar

Con qué tipo de usuarios se probará.

Cuántos usuarios hacen falta para una primera validación.

Qué preguntas se les harán.

Qué métricas mínimas se observarán.

Qué errores bloquean la publicación.

## Resultado tangible

Feedback real sobre la utilidad, claridad y facilidad de uso de la app.

## Qué revisar o validar antes de pasar a la siguiente fase

Si los usuarios entienden para qué sirve la app.

Si saben crear un prompt sin ayuda.

Si encuentran fácilmente sus prompts.

Si usan favoritos.

Si entienden la diferencia entre público y privado.

Si las funciones de IA les parecen útiles.

Si compartir un prompt público tiene valor real.

# Fase 11. Versión publicable

## Objetivo de la fase

Cerrar una primera versión digna de ser publicada, comunicada y compartida.

## Qué se construye

Ajustes finales derivados de la validación.

Corrección de errores importantes.

Mejora de la home pública.

Revisión de SEO.

Revisión de textos.

Revisión de diseño responsive.

Preparación de una pequeña comunicación de lanzamiento.

## Decisiones antes de publicar

Si la app se lanza como beta pública o versión inicial.

Si se permite registro abierto.

Si se limita a usuarios invitados.

Qué funcionalidades se anuncian.

Qué funcionalidades se dejan como futuras.

Qué canal se usará para presentar la app.

## Resultado tangible

Primera versión publicable de PromptStore.

Debe permitir:

Registrarse.

Iniciar sesión.

Guardar prompts.

Editar prompts.

Eliminar prompts.

Buscar prompts.

Marcar favoritos.

Copiar prompts.

Publicar prompts con URL propia.

Ver páginas públicas optimizadas para SEO.

Usar funciones básicas de IA.

## Qué revisar o validar antes de darla por cerrada

Flujo completo de usuario nuevo.

Seguridad básica.

Privacidad de datos.

Funcionamiento en móvil.

Funcionamiento en escritorio.

Claridad de la propuesta de valor.

Ausencia de errores graves.

Velocidad razonable.

Páginas públicas compartibles.

# Reglas de trabajo para metodología vibe coding

Trabajar siempre por fases pequeñas.

No pedir a la herramienta que construya toda la app de golpe.

Pedir primero plan, luego estructura, luego pantallas, luego lógica, luego datos, luego IA.

No aceptar cambios grandes sin entender sus consecuencias.

Pedir explicación sencilla de cada cambio.

Revisar visualmente cada fase antes de avanzar.

No añadir funcionalidades nuevas mientras una fase básica aún falla.

Mantener la arquitectura simple.

Evitar dependencias innecesarias.

No construir pensando en miles de usuarios antes de tener diez usuarios reales.

Priorizar claridad, utilidad y velocidad de iteración.

## 5. Reglas de trabajo con IA

- Trabajar siempre por pasos pequeños.
- No construir funcionalidades que no estén en el MVP sin confirmación.
- Explicar cada cambio antes de aplicarlo.
- Evitar arquitecturas demasiado complejas.
- Priorizar claridad, sencillez y facilidad de mantenimiento.
- Revisar errores después de cada cambio importante.
- Mantener separadas las partes privadas y públicas de la app.
- No exponer claves privadas ni datos sensibles.
- Pedir confirmación antes de cambios estructurales grandes.
- Mantener el objetivo final: una app funcional, clara y publicable online.





# Definiciones Unidad 1
## API

Las API son un mecanismo que permite que dos componentes de software se comuniquen entre sí. Un ejemplo de esto sería un sistema climatológico que recolecta información diaria sobre el clima. Una aplicación en nuestro teléfono "habla" con este sistema por medio de una o múltiples APIs y nos muestra las más recientes actualizaciones sobre el clima.

### _¿Qué significa API?_

Las siglas API se refieren a Application Programming Interface (Interfaz de Programación de Aplicación). En el contexto de APIs, la palabra aplicación se refiere a cualquier software con una función distinta. La interfaz puede ser pensada como un contrato de servicio entre 2 aplicaciones. Este contrato puede referirse a 2 comunicándose entre sí, utilizando peticiones y respuestas.

### _¿Cómo funcionan las APIs?_

La arquitectura de la API usualmente es explicada por medio del término Cliente-Servidor. La aplicación enviando las peticiones se le llama cliente y aquella devolviendo las respuestas es el servidor.

Existen diferentes formas en las que una API puede funcionar, dependiendo de cuándo y el porqué fue creada.

## REST

### _¿Qué es REST?_

Una API REST es una interfaz de programación que sigue los principios de diseño de REST y su estilo de arquitectura. REST es el acrónimo de "REpresentational State Transfer", y es un conjunto de reglas y guías acerca de cómo deberías construir una API.

### _REST_

REST es un conjunto de requerimientos y limitaciones de arquitectura, no es un protocolo ni un estándar. Los desarrolladores implementan REST en una gran variedad de formas.

Cuando un cliente realiza una petición vía una "RESTful API", esta transfiere una representación del estado del recurso al endpoint del cliente. Esta información, o representación, es enviada en uno de múltiples formatos vía HTTP: JSON, HTML, XML, Python, PHP o texto plano.

### _Para que una API sea considerada REST ha de cumplir con la siguiente criteria:_

- Una arquitectura cliente-servidor hecha a partir de clientes, servidores y recursos, con peticiones manejadas por medio de HTTP.
- Comunicación libre de estado entre el cliente-servidor, refiriéndose a que ninguna información es almacenada entre peticiones GET y cualquier petición está separada y no conectada.
- Información cacheable que fluye entre interacciones entre cliente-servidor.
- Una interfaz uniforme entre componentes, tanto que la información sea transferida mediante una forma estándar. Esto requiere que:
    1. Recursos solicitados sean identificables y separados de la representación enviada al cliente.
    2. Los recursos pueden ser manipulados por el cliente vía la representación que les es enviada, puesto que la representación contiene suficiente información para hacerlo.
    3. Mensajes autodescriptivos regresados al cliente tienen suficiente información para describir cómo el cliente debería procesarlos.
    4. Hipertexto/Hipermedia está disponible, refiriéndose a que después de acceder al recurso el cliente debería ser capaz de hacer uso de hipervínculos para encontrar todas las otras acciones que puede tomar.
- Un sistema basado en capas que organice cada tipo de servidor envuelto en el regreso de información solicitada en jerarquías, invisible al cliente.
- Código en demanda (opcional): La habilidad de enviar código ejecutable desde el servidor al cliente cuando es solicitado, extendiendo la funcionalidad del cliente.

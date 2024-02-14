Ejercicio: Sistema de Reservas de Vuelos
Es un sistema de reservas de vuelos para una aplicación de viajes. 

- El sistema debe verificar la disponibilidad de vuelos
- reservar un vuelo y enviar un correo electrónico de confirmación al usuario.

Tareas:
Verificar Disponibilidad de Vuelos:

<!-- función verificarDisponibilidad que simule la verificación de la disponibilidad de un vuelo. Esta función debe retornar una promesa.
La promesa debe resolverse con true si el vuelo está disponible o rechazarse con el mensaje "Vuelo no disponible" si no lo está.
Utiliza setTimeout para simular un retraso de 1 segundo en la respuesta del servidor. -->

<!-- Reservar Vuelo:
función reservarVuelo que tome como argumento el resultado de la verificación de disponibilidad. Esta función también debe retornar una promesa.
Si recibe true, la promesa se resuelve con el mensaje "Vuelo reservado exitosamente". De lo contrario, se rechaza con "Error al reservar vuelo". -->

<!-- Enviar Correo de Confirmación:
función enviarCorreoConfirmacion que simule el envío de un correo electrónico de confirmación al usuario. Esta función retorna una promesa.
La promesa se resuelve con "Correo de confirmación enviado" después de un retraso simulado de 1 segundo. -->

<!-- Requisitos:
Utiliza encadenamiento de promesas para conectar las operaciones de verificar la disponibilidad, reservar el vuelo y enviar el correo de confirmación.
Asegúrate de manejar los posibles errores en cada paso del proceso.
Para probar tu código, simula tanto casos exitosos como casos de error modificando los valores iniciales o los argumentos pasados a las funciones. -->

<!-- Desafío Adicional (Opcional):
Si te sientes cómodo con async/await, intenta reescribir el flujo de operaciones utilizando esta sintaxis para un código más limpio y fácil de seguir. -->
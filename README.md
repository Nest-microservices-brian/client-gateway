## Client Gateway
El gateway es el punto de comunicacion entre nuestros clientes y nuestros servicios.
Es el envargado de recibir las peticiones, enviarlas a los servicios correspondientes y devolver la respuesta al cliente.

## Dev
1. Clonar el repositorio
2. Instalar las dependencias
3. Crear un archivo `.env` basado en el `.env.template`
4. Levantar el servidor de NATS
```
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```
5. Tener levantados los microservicios que se van a consumir
6. Levantar el proyecto con `pnpm start:dev`

## Nats

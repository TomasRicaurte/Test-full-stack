## Clone el repositorio en su maquina local para poder realizar las pruebas
->git clone <repo>

## Cambia a la carpeta principal, para que se ejecuten correctamente los siguientes comandos
->cd backend

## Crea la copia .env del documento .env.example para la correcta ejecución y despliegue del proyecto
->cp .env.example .env

## Ejecutar una prueba completamente limpia, va a permititr que no haya error alguno, ejecuta el codigo de abajo para poder eliminar cualquier tipo de cache y evitar fallos
->mvn clean package

## Limpiaremos cualquier base de datos de docker que pueda haber ejecutado con anterioridad
->docker compose down -v

## Levantaremos ahora si la prueba
->docker compose up -d --build

## Verificamos que todo vaya correctamente
->docker logs colegio-api
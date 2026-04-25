## para la correcta ejecuciòn del proyecto seguir los siguientes pasos EN ORDEN:

1. clonar el repositorio a tu maquina local
git clone https://github.com/TomasRicaurte/Test-full-stack.git

## Para iniciar correctamente el Back end, haz lo siguiente:

1. Vamos a limpiar cualquier rastro de cache que nos pueda llegar a afectar
docker compose down -v --remove-orphans

2. En la carpeta base vamos a levantar la base de datos (Docker)
docker compose up -d mysql

## Vamos a iniciar Spring Boot

1. Nos movemos a la carpeta del back end
cd backend

2. vamos a ejecutar el siguiente codigo para que el maven nos levante spring boot
mvn spring-boot:run

## Para validar que todo este correctamente funcionando en el backend, vaya al navegador de su preferencia, donde colocara esta URL; Nos debera de arrojar una lista vacia []
http://localhost:8080/api/alumnos 

## Para iniciar el front end debemos de irnos a la carpeta raiz y cambiar del backend 

1. Nos devolvemos a la carpeta raiz y nos pasamos a la del front end
cd ..
cd frontend

2. Alli vamos a realizar una instalación de las dependcieas, para evitar que el proyecto falle
npm install

3. Con todo en orden en el front end, vamos a iniciar npm
npm run dev

## Ya podemos ir a nuestra pagina creada, para ello usamos el siguiente url
http://localhost:5173


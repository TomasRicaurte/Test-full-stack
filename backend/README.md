## Base de datos (Docker)

docker run -d \
  --name mysql-db-colegio \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -e MYSQL_DATABASE=colegio_db \
  -p 3307:3306 \
  mysql:8

## Las variables de entorno usadas

DB_URI=jdbc:mysql://localhost:3307/colegio_db  
DB_USER=root  
DB_PASSWORD=123456  
DB_DRIVER=com.mysql.cj.jdbc.Driver
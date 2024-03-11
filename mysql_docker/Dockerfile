# get the latest mysql image
# yo quiero utilizar la imagen de mysql / que tipo de tecnologia quiero utilizar
# configuracion de la imagen que necesito , que tipo de imagen necesito, que tipo de tecnologia necesito
FROM mysql:latest 

# puedo setear variables de entorno
# set the environment variables
# variables que utiliza mysql para la configuracion

ENV MYSQL_DATABASE=blog_db
ENV MYSQL_ROOT_PASSWORD=root_password 

# User and Password for the database
ENV MYSQL_USER=blog_user
ENV MYSQL_PASSWORD=blog_password
 
# copy the sql file to the docker-entrypoint-initdb.d directory
COPY schema.sql /docker-entrypoint-initdb.d/

#!/bin/bash
DB_HOST=terraform-20220706021622633400000001.c1j0gf008ncq.ap-northeast-2.rds.amazonaws.com
echo "DB_HOST=$DB_HOST" > .env

DB_PORT=3306
echo "DB_PORT=$DB_PORT" >> .env

DB_USER=admin
echo "DB_USER=$DB_USER" >> .env

DB_PASSWORD=password
echo "DB_PASSWORD=$DB_PASSWORD" >> .env

DB_DATABASE=shipping
echo "DB_DATABASE=$DB_DATABASE" >> .env

DOCKER_INTERNAL_PORT=3000
echo "DOCKER_INTERNAL_PORT=$DOCKER_INTERNAL_PORT" >> .env

LOCAL_HOSTNAME=$(curl http://169.254.169.254/latest/meta-data/local-hostname)
echo "LOCAL_HOSTNAME=$LOCAL_HOSTNAME" >> .env

LOCAL_IPV4=$(curl http://169.254.169.254/latest/meta-data/local-ipv4)
echo "LOCAL_IPV4=$LOCAL_IPV4" >> .env

PUBLIC_HOSTNAME=$(curl http://169.254.169.254/latest/meta-data/public-hostname)
echo "PUBLIC_HOSTNAME=$PUBLIC_HOSTNAME" >> .env

PUBLIC_IPV4=$(curl http://169.254.169.254/latest/meta-data/public-ipv4)
echo "PUBLIC_IPV4=$PUBLIC_IPV4" >> .env
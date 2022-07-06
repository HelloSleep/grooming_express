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

REGION=$(curl http://169.254.169.254/latest/meta-data/placement/region)
echo "REGION=$REGION" >> .env

AVAILABILITY_ZONE=$(curl http://169.254.169.254/latest/meta-data/placement/availability-zone)
echo "AVAILABILITY_ZONE=$AVAILABILITY_ZONE" >> .env
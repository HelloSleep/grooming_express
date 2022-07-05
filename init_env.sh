#!/bin/bash
DB_HOST=host.docker.internal
echo "DB_HOST=$DB_HOST" > .env

DB_PORT=3306
echo "DB_PORT=$DB_PORT" >> .env

DB_USER=root
echo "DB_USER=$DB_USER" >> .env

DB_PASSWORD=p@ssw0rd
echo "DB_PASSWORD=$DB_PASSWORD" >> .env

DB_DATABASE=shipping
echo "DB_DATABASE=$DB_DATABASE" >> .env

DOCKER_INTERNAL_PORT=3000
echo "DOCKER_INTERNAL_PORT=$DOCKER_INTERNAL_PORT" >> .env

REGION=$(curl http://169.254.169.254/latest/meta-data/placement/region)
echo "REGION=$REGION" >> .env

AVAILABILITY_ZONE=$(curl http://169.254.169.254/latest/meta-data/placement/availability-zone)
echo "AVAILABILITY_ZONE=$AVAILABILITY_ZONE" >> .env
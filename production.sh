#!/bin/bash

docker-compose -f production-compose.yml build
docker-compose -f production-compose.yml up -d

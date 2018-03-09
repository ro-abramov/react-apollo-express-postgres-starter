This is a starter kit for developing web apps.

## Technology stack

### Front-end stack

* [Create react app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
* [Emotion](https://github.com/emotion-js/emotion) (CSS-in-JS)

### Back-end stack

* [Express](http://expressjs.com/en/4x/api.html) framework ([api reference](http://expressjs.com/en/4x/api.html))

### Database

* [Postgres](https://www.postgresql.org/)

## Docker
### Requirements
* Docker;
* Docker-Compose ([CLI](https://docs.docker.com/compose/reference/overview/)).
### Start containers
#### Development
```sh
docker-compose up --build
```
#### Production
```sh
cd ./app
npm run build

cd ..
docker-compose -f production-compose.yml up -d --build
```
### Stop containers
```sh
docker-compose down -v
```
### URLs/Services
#### Development
* localhost:3000 - create-react-app;
* localhost:3100 - express server;
* localhost:5432 - postgres;
* localhost:4040 - adminer.
#### Production
* localhost - application (pm2-runtime);
* localhost:5432 - postgres;
* localhost/adminer - adminer.

### Database
(adminer parameters)
* System - PostgreSQL;
* Server - db;
* Username - root;
* Password - toor;
* Database - db.

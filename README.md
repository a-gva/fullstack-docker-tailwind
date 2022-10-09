# fullstack-docker-tailwind

### Database, Backend & Frontend

- Typescript
- NextJS (Backend & Frontend)
- Postgres (Docker created)

## Step 1

Setup a .env file @ project root folder for postgres db creation and setup by Docker. Sample:

```sh
DB_IMAGE=postgres
DB_ACCESS_PORT=5432
DB_INTERNAL_PORT=5432
POSTGRES_PASSWORD=1234
POSTGRES_USER=postgres
```

## Step 2

Run Docker Compose @ project root folder:

```sh
docker-compose up
```

## Step 3

Setup a .env file @ /app folder. Sample:

```sh
DB="postgresql"
USER_DB="postgres"
PASSWORD="1234"
HOST="localhost"
PORT="5432"
DATABASE="postgres"
SCHEMA="public"

DATABASE_URL='postgresql://${USER_DB}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}?schema=${SCHEMA}'
```

## Step 4

At /app/prisma , run:

```sh
npx prisma generate
```

and

```sh
npx prisma migrate dev --name init
```

## Step 5

Run npm run dev @ /app root folder:

```sh
npm run dev
```

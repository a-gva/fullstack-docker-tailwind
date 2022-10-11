# fullstack-docker-tailwind

- Typescript
- NextJS (Backend & Frontend)
- Postgres (Docker created)

## Step 1

Setup a .env file @ project root folder for postgres db creation and setup by Docker. Sample:

```sh
DB_IMAGE=postgres
DB_ACCESS_PORT=5432
DB_INTERNAL_PORT=5432
DB_USER='postgres'
DB_PASSWORD='1234'
```

## Step 2

Run Docker Compose @ project root folder:

```sh
docker-compose up
```

## Step 3

Setup a .env file @ /app folder. Sample:

```sh

CONNECTOR=postgresql
DB_NAME=postgres
DB_USER=postgres
DB_HOST=localhost
DB_PASSWORD=1234
DB_PORT=5432
ARGS='schema=public'

DATABASE_URL="${CONNECTOR}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?${ARGS}"
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

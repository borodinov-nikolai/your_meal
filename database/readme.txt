скачать образ postgres: "docker pull postgres:16.1-alpine3.19"
создать dump: "docker exec -t my_postgres_container pg_dumpall -c -U postgres > dump.sql"
восстановить windows: "type dump.sql | docker exec -i my_postgres_container psql -U postgres"
восстановить linux: "cat dump.sql | docker exec -i my_postgres_container psql -U postgres"
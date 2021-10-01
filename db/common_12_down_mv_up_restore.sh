#!/bin/bash
export UID_GID="$(id -u):$(id -g)"
CURRENT="$(cd "$(dirname "$0")" && pwd)"
cd "$CURRENT/../" &&
source .env &&
docker-compose down &&
mv "$CURRENT/${DB_DOCKER_VOLUME}" "$CURRENT/${DB_DOCKER_VOLUME}_bak_$(date "+%Y%m%dT%H%M%S")"
mkdir -p "$CURRENT/${DB_DOCKER_VOLUME}" &&
DUMPFILE1="dump_pre-data.sql" &&
DUMPFILE2="dump_data.sql" &&
DUMPFILE3="dump_post-data.sql" &&
docker-compose up -d &&
sleep 3s &&
docker cp "$CURRENT/$DUMPFILE1" "$(docker-compose ps -q postgres):/tmp/$DUMPFILE1" &&
docker cp "$CURRENT/$DUMPFILE2" "$(docker-compose ps -q postgres):/tmp/$DUMPFILE2" &&
docker cp "$CURRENT/$DUMPFILE3" "$(docker-compose ps -q postgres):/tmp/$DUMPFILE3" &&
docker-compose exec postgres psql -d $POSTGRES_DB -U $POSTGRES_USER -f "/tmp/$DUMPFILE1" &&
docker-compose exec postgres psql -d $POSTGRES_DB -U $POSTGRES_USER -f "/tmp/$DUMPFILE2" &&
docker-compose exec postgres psql -d $POSTGRES_DB -U $POSTGRES_USER -f "/tmp/$DUMPFILE3"

echo -n 'Press any key'
read r


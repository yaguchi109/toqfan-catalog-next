#!/bin/bash
CURRENT="$(cd "$(dirname "$0")" && pwd)"

DUMPFILE1="dump_pre-data.sql"
DUMPFILE2="dump_data.sql"
DUMPFILE3="dump_post-data.sql"

export LANG=C.UTF-8
export UID_GID="$(id -u):$(id -g)"
cd "$CURRENT/../" &&
source .env &&
docker-compose exec postgres pg_dump -U $POSTGRES_USER -n public --section=pre-data  $POSTGRES_DB > "$CURRENT/$DUMPFILE1" &&
docker-compose exec postgres pg_dump -U $POSTGRES_USER -n public --section=data      $POSTGRES_DB > "$CURRENT/$DUMPFILE2" &&
docker-compose exec postgres pg_dump -U $POSTGRES_USER -n public --section=post-data $POSTGRES_DB > "$CURRENT/$DUMPFILE3"


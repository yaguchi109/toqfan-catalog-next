#!/bin/bash
export UID_GID="$(id -u):$(id -g)"
CURRENT="$(cd "$(dirname "$0")" && pwd)"
cd "$CURRENT/../" &&
docker-compose down

echo END
sleep 10s

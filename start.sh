#!/usr/bin/env bash
export MONGO_URL=mongodb://{ip}/{nameData}
export ROOT_URL=http://localhost:3000
meteor --settings settings.json --port 3000
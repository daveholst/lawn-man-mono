#!/bin/bash

set -ex

IMAGE_NAME="lawn-man"
REGISTRY="daveholst"

docker login
docker build -t ${REGISTRY}/${IMAGE_NAME}:latest .
docker push ${REGISTRY}/${IMAGE_NAME}
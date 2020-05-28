#!/bin/bash

# update last commit hash in the environment file
CURRENT_VERSION=$(git rev-parse HEAD)
sed -i "/version/c\  version: '$CURRENT_VERSION'," src/environments/environment.prod.ts

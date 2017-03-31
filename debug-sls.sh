#!/bin/bash

node_modules=`npm root -g`
node --debug  "$node_modules/serverless/bin/serverless" "$@"
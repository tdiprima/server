#!/usr/bin/env bash

curl -X POST \
-H "Content-Type: application/json" \
-d '{"query": "{ books { name } }"}' \
http://localhost:4000/graphql

# NOTE: There will be a little % sign at the end of the return data

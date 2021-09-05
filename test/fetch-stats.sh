#!/bin/bash
set -e

curl http://localhost:3000/pm-stats -H 'authorization: Bearer secret'

#!/bin/bash

#start nginx
service nginx start

# start api server
cd /cometa/api && npm run serve &
cd /cometa/app && npm run start
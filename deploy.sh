#!/bin/bash

cd /home/nik/project;

npm i -g pm2;
npm i;
# pm2 start ./src/index.js --name my-server
pm2 restart my-server;

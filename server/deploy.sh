#!/bin/bash
IP="159.69.180.115"

ssh root@$IP "rm -r ~/build"
scp -r build root@$IP:~
scp package.json root@$IP:~/build
ssh root@$IP << EOF
cd build
npm install --production
pm2 stop nku
rm -r ~/nku
mv ~/build ~/nku
pm2 start ~/nku/index.js --name nku
pm2 save
EOF
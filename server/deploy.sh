#!/bin/bash
IP="65.21.249.105"

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

echo "https://nku.su"
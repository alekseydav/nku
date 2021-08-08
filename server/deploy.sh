#!/bin/bash
DOMAIN="nku.su"

ssh root@$DOMAIN "rm -r ~/build"
scp -r build root@$DOMAIN:~
scp package.json root@$DOMAIN:~/build
ssh root@$DOMAIN << EOF
cd build
npm install --production
pm2 stop nku
rm -r ~/nku
mv ~/build ~/nku
pm2 start ~/nku/index.js --name nku
pm2 save
EOF

echo "https://nku.su"
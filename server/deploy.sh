#!/bin/sh
DOMAIN="nku.su"

ssh root@$DOMAIN "rm -r ~/build"
scp -r build root@$DOMAIN:~
scp -r db root@$DOMAIN:~/build
scp package.json root@$DOMAIN:~/build
ssh root@$DOMAIN << EOF
cd build
npm install --production
pm2 stop nku
rm -r ~/nku
mv ~/build ~/nku
pm2 start npm --name nku -- start
pm2 save
EOF

echo "https://nku.su"
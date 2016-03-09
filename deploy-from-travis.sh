#!/bin/bash

echo "Start deplying..."

if [ ! -d ~/.ssh ]; then mkdir ~/.ssh; fi
echo -e "$SSH_PRIVATE_KEY" > ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa

git remote add vps git@$DEPLOY_SERVER:fiveyellowmice.com.git
git push vps master

#!/bin/bash

echo "Start deplying..."

if [ ! -d ~/.ssh ]; then mkdir ~/.ssh; fi
openssl aes-256-cbc -k $PASSWORD -in sshkey.enc -out ~/.ssh/id_rsa -d
chmod 600 ~/.ssh/id_rsa

ssh git@$DEPLOY_SERVER hello
git remote add vps git@$DEPLOY_SERVER:fiveyellowmice.com.git
git push --quiet vps master

#!/bin/bash

echo "Start deplying..."

if [ ! -d ~/.ssh ]; then mkdir ~/.ssh; fi
wget https://cdn.rawgit.com/FiveYellowMice/secret/master/ssh-key-travis.pem.enc
openssl aes-256-cbc -k $PASSWORD -in ssh-key-travis.pem.enc -out ~/.ssh/id_rsa -d
chmod 600 ~/.ssh/id_rsa

ssh -o StrictHostKeyChecking=no \
	-o LogLevel=ERROR \
	git@$DEPLOY_SERVER echo hello
git remote add vps git@$DEPLOY_SERVER:fiveyellowmice.com
git push --quiet vps master

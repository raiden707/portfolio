#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ admin@178.79.178.246:/var/www/ahmedbk.com/
echo "Deployment complete"

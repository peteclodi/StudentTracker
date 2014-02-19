#!/usr/bin/env bash

echo "Update packages"
apt-get update

echo "Install Apache2"
apt-get install -y apache2

echo "Map the assets folder to the Apache2 web root directory"
rm -rf /var/www
ln -fs /vagrant/assets /var/www
#!/usr/bin/env bash

echo "Make sure everything's up to date"
apt-get update

echo "Install MySQL"
debconf-set-selections <<< 'mysql-server mysql-server/root_password password st'
debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password st'
apt-get -y install mysql-server mysql-client

echo "Install Apache2"
apt-get install -y apache2

echo "Install PHP5.x"
apt-get install -y php5 libapache2-mod-php5

echo "Install PHP 5.x modules"
apt-get install -y php5-mysql php5-curl php5-gd php5-idn php-pear php5-imagick php5-imap php5-mcrypt php5-memcache php5-ming php5-ps php5-pspell php5-recode php5-snmp php5-sqlite php5-tidy php5-xmlrpc php5-xsl

rm -rf /var/www
ln -fs /vagrant/assets /var/www
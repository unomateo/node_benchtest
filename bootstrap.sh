#! /usr/bin/env bash

# Update the server
#apt-get update

# install vim and git
sudo apt-get install -y curl

sudo su vagrant -c "curl https://raw.githubusercontent.com/creationix/nvm/v0.10.0/install.sh | sh" 

source /home/vagrant/.profile

nvm install 0.11.13

nvm alias default 0.11.13

cd /vagrant/

npm install

node app.js &

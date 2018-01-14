FROM ubuntu:16.04

# install nginx
RUN apt-get update && apt-get install -y nginx && service nginx start
COPY nginx_conf/sites-available/default /etc/nginx/sites-available/default

# install node
RUN cd ~ && curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh && bash nodesource_setup.sh && apt-get install -y build-essential nodejs
WORKDIR /cometa

ADD . /cometa

RUN cd app/ && 

EXPOSE 80
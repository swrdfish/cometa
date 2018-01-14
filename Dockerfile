FROM ubuntu:16.04

# install nginx
RUN apt-get update && apt-get install -y nginx curl && service nginx start
COPY nginx_conf/sites-available/default /etc/nginx/sites-available/default

# install node and pm2
RUN cd ~ && curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh && bash nodesource_setup.sh && apt-get install -y build-essential nodejs
RUN npm install -g pm2@1.1.3

WORKDIR /cometa

ADD . /cometa

# install dependencies
RUN cd app/ && pwd && npm -v
RUN cd api/ && pwd && npm -v


EXPOSE 80

CMD cd api && npm run serve
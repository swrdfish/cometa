FROM ubuntu:16.04

# install nginx
RUN apt-get update && apt-get install -y nginx curl

COPY nginx_conf/sites-available/default /etc/nginx/sites-available/default

# install node and pm2
RUN cd ~ && curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh && bash nodesource_setup.sh && apt-get install -y build-essential nodejs

WORKDIR /cometa

ADD . /cometa

# install dependencies
RUN cd app/ && npm install
RUN cd api/ && rm -r node_modules/ && npm install


# Start 
ENTRYPOINT ["./entry.sh"]


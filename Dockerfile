FROM ubuntu:16.04

# install nginx
RUN apt-get update && apt-get install -y nginx curl && service nginx enable
COPY nginx_conf/sites-available/default /etc/nginx/sites-available/default

# install node and pm2
RUN cd ~ && curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh && bash nodesource_setup.sh && apt-get install -y build-essential nodejs
RUN npm install -g pm2@1.1.3

WORKDIR /cometa

ADD . /cometa

# install dependencies
RUN cd app/ && npm install
RUN cd api/ && npm install


EXPOSE 80

# Start PM2 as PID 1 process
ENTRYPOINT ["pm2", "--no-daemon", "start"]

CMD ["process.json"]
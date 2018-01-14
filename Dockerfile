FROM ubuntu:16.04

RUN apt-get update && apt-get install nginx && service nginx start

EXPOSE 80

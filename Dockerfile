FROM node:lts-alpine
WORKDIR /app
RUN npm i -g npm nuxi
RUN apk update && apk add git
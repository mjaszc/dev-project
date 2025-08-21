FROM node:current-alpine3.22
WORKDIR /usr/app
COPY package.json .
RUN npm install --quiet
COPY . .
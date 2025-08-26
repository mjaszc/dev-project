FROM node:current-alpine3.22
WORKDIR /usr/app

# copy package files first for layer caching
COPY package*.json ./

RUN npm ci --only=production     # or `npm install` if you need dev deps
COPY . .

EXPOSE 3000
ENV PORT=3000

CMD ["npm", "start"]
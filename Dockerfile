FROM node:14.16-alpine3.10

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]
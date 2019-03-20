FROM node:10-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
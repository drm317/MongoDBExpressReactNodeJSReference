FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5001

CMD [ "npm", "start"]
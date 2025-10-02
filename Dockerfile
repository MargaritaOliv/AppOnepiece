FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --only=production

COPY ./src ./src
COPY main.js .

EXPOSE 3000

CMD [ "node", "main.js" ]
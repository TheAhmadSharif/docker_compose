FROM node:16.3.0-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 8001

CMD ["npm", "run", "start"]
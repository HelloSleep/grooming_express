FROM node:lts-alpine

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

RUN chmod +x ./init_env.sh
RUN ./init_env.sh

EXPOSE 3000
CMD [ "npm", "run", "serve" ]
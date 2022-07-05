FROM node:16.14.0

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

RUN chmod +x ./init_env.sh
RUN ./init_env.sh

EXPOSE 3000
CMD [ "npm", "run", "serve" ]
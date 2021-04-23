FROM node:14-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm build --prod

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/rick-and-morty /usr/share/nginx/html
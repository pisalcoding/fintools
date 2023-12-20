FROM node:20-alpine as builder

COPY . /opt/frontend

RUN npm i -g ionic
WORKDIR /opt/frontend
RUN ionic build --prod

FROM nginx:alpine
WORKDIR /opt/frontend
COPY --from=builder www /usr/share/nginx/html

EXPOSE 80

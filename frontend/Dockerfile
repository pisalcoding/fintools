FROM node:20-alpine as builder

COPY . /opt/frontend

RUN npm uninstall -g ionic
RUN npm i -g @ionic/cli
WORKDIR /opt/frontend
RUN rm -rf www
RUN npm i -D -E @angular/cli
RUN ionic build --prod

FROM nginx:alpine
COPY --from=builder /opt/frontend/www /usr/share/nginx/html

EXPOSE 80

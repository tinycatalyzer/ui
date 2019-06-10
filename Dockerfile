FROM node:12 as builder
#ENV NODE_ENV=production
WORKDIR /src/app
COPY ./src/package.json ./src/package-lock.json ./
# TODO remove the --force from the install...
RUN npm install --force && npm cache clean --force
COPY ./src/ .
RUN npm run-script build

FROM nginx:1-alpine

RUN apk add --update --upgrade --no-cache wget \
# Install envsubst command for replacing config files in system startup
# - it needs libintl package
# - only weights 100KB combined with it's libraries
&& apk add gettext libintl

ADD ./nginx/default.conf /dockertemplates/default.conf
COPY --from=builder --chown=nginx:nginx /src/app/dist /usr/share/nginx/html

COPY ./entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx-debug", "-g", "daemon off;"]

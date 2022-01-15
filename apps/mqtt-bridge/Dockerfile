FROM node:14-alpine
WORKDIR /app
COPY ./dist ./
CMD yarn add aws-sdk mqtt tslib && node main.js

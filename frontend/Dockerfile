# syntax=docker/dockerfile:experimental

FROM node:18-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install 
COPY . .
EXPOSE 8787
RUN npm i --include=dev
RUN npm run build
CMD [ "npm", "run", "preview" ]
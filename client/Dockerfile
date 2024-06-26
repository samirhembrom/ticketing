#Specify a base image
FROM node:18-alpine

WORKDIR /app  

#Install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

#Default command
CMD ["npm","run","dev"]
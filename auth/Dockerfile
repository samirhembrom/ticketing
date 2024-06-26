#Specify a base image
FROM node:18-alpine

WORKDIR /app  

#Install some dependencies
COPY ./package.json ./
RUN npm install --omit=dev
COPY ./ ./

#Default command
CMD ["npm","start"]
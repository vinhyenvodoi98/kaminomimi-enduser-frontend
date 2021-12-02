#!/bin/bash
FROM node:14-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
RUN apt-get update && apt-get install -y ca-certificates && update-ca-certificates
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
ADD https://github.com/yuyuvn/kms-decrypter/releases/download/v1.0.0/decrypter-v1.0.0-linux-amd64 /usr/src/app/

# decrypt enviroment
ENTRYPOINT [ "bash" ,"decrypt.sh" ]
ENV PORT 80
EXPOSE 80

CMD [ "npm", "run", "deploy" ]

# pull basic node image from docker hub (alpine is a scaled down image for size)x
FROM node:21-alpine3.18
# Working directory be app
WORKDIR /usr/app
COPY package*.json ./
# Install dependencies
RUN npm install
# copy local files to app folder
COPY . .
EXPOSE 3000
CMD ["npm","run","dev"]
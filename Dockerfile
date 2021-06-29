FROM node:14

# Create app directory
WORKDIR /usr/src/app
# Install app dependencies 
# A wildcard is used to ensure both package.json and package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm i
# If you are building your code for production 
# Run npm ci --only-production

# Bundle app source
COPY . .
EXPOSE 8080
CMD ["node", "server.ts"]
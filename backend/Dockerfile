# Final stage
FROM node:18
FROM mcr.microsoft.com/playwright


# Set node environment to production
ENV NODE_ENV production

# Update the system
# RUN apk --no-cache -U upgrade

# Prepare destination directory and ensure user node owns it
RUN mkdir -p /home/node/app

# Set CWD
WORKDIR /home/node/app

# Install playwright


# Copy package.json, package-lock.json and process.yml
COPY package*.json process.yml ./

# Switch to user node
#USER node

# Install libraries as user node
#RUN npm i --only=production
RUN apt-get update && apt-get -y install libnss3 libatk-bridge2.0-0 libdrm-dev libxkbcommon-dev libgbm-dev libasound-dev libatspi2.0-0 libxshmfence-dev
RUN npm ci
RUN npm i playwright
RUN npx playwright install                                   


# Copy js files and change ownership to user node
#COPY --chown=node:node . .
COPY  . .
# Open desired port

EXPOSE 5000

CMD ["node", "app.js"]
# Use PM2 to run the application as stated in config fil

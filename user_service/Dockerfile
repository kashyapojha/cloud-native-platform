# Dockerfile
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose the service port
EXPOSE 4002

# Start the app
CMD ["node", "server.js"]
# Local Development Backend Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port 5000
EXPOSE 5000

# Start the server with nodemon for development
RUN npm install -g nodemon
CMD ["nodemon", "server.js"]
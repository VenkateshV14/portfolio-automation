# backend/Dockerfile

# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the backend source code
COPY . .

# Expose the port your backend listens on
EXPOSE 5000

# Start the backend server
CMD ["node", "server.js"]

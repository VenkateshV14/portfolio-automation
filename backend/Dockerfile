# Use Node.js LTS version
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the backend files
COPY . .

# Expose the port your server runs on
EXPOSE 5001

# Start the backend server
CMD ["node", "server.js"]

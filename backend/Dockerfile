# Use a lightweight Node.js image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy backend files
COPY . .

# Install dependencies
RUN npm install

# Expose the backend port (change if needed)
EXPOSE 5001

# Start the backend server
CMD ["node", "server.js"]

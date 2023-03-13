# Use a Node.js runtime as a base image
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the server code to the container
COPY . .

# Expose port 3001 for the server
EXPOSE 3001

# Start the server
CMD ["node", "server.js"]
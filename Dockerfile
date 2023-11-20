# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the local source files to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000
EXPOSE 9229

# Command to run your application
CMD ["npm", "run", "start:debug"]

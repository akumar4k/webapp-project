# Use a Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json
COPY package.json .
RUN npm install
# Copy application code
COPY . .
# Install dependencies
RUN npm run build



# Expose port 3000
EXPOSE 3000

# Command to start the application
CMD [ "npm", "run", "preview" ]
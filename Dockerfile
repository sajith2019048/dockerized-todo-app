# Step 1: Use an official Node.js runtime as the base image
FROM node:22-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json first
# (This allows Docker to cache our installed packages for faster builds)
COPY package*.json ./

# Step 4: Install the application dependencies inside the container
RUN npm install

# Step 5: Copy the rest of your application code
COPY . .

# Step 6: Expose the port your app runs on
EXPOSE 3000

# Step 7: Define the command to run your app
CMD ["npm", "start"]
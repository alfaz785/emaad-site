#!/bin/bash

# Navigate to the project directory on the server
cd /home/new.emaadinfotech.com

# Install project dependencies
npm install

# Build the Next.js app
npm run build

# Start the Next.js app using PM2 to ensure it keeps running in the background
# If PM2 is not installed, install it globally using: npm install -g pm2
pm2 start npm --name "nextjs-app" -- start

# Save the PM2 process list to ensure it auto-starts after reboot
pm2 save

#!/bin/bash

# Activate the virtual environment using the full path
echo "Activating Python virtual environment..."
source ~/myvenv/bin/activate

# Update pip and install/upgrade dependencies
echo "Updating pip and installing/upgrading Python dependencies..."
pip install --upgrade pip
pip install --upgrade -r requirements.txt

# Install Node.js dependencies
echo "Installing Node.js dependencies..."
npm install

# Start the FastAPI backend
echo "Starting FastAPI backend..."
uvicorn server:app --reload &

# Wait for a moment to ensure the backend has started
sleep 5

# Start the Vite development server
echo "Starting Vite development server..."
npm run dev

# This will keep the script running
wait

# Deactivate the virtual environment when done
deactivate
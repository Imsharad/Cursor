#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print messages
print_message() {
    echo -e "${GREEN}$1${NC}"
}

# Function to print errors
print_error() {
    echo -e "${RED}$1${NC}"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js and try again."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm and try again."
    exit 1
fi

# Build the frontend
print_message "Building the frontend..."
if npm run build; then
    print_message "Frontend built successfully!"
else
    print_error "Failed to build the frontend. Please check the error messages above."
    exit 1
fi

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker and try again."
    exit 1
fi

# Check if docker-compose is installed
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose and try again."
    exit 1
fi

# Build and start the containers
print_message "Building and starting Docker containers..."
if docker-compose up --build -d; then
    print_message "Docker containers are up and running!"
else
    print_error "Failed to start Docker containers. Please check the error messages above."
    exit 1
fi

# Wait for the application to start and find the correct port
print_message "Waiting for the application to start..."
for i in {1..30}; do
    for port in {8000..8100}; do
        if curl -s http://localhost:$port &> /dev/null; then
            print_message "Application is now accessible at http://localhost:$port"
            exit 0
        fi
    done
    sleep 1
done

print_error "Application did not start within the expected time. Please check the Docker logs."
print_message "You can view the logs by running: docker-compose logs"
exit 1
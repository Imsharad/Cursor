#!/bin/bash

GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

print_message() {
    echo -e "${GREEN}$1${NC}"
}

print_error() {
    echo -e "${RED}$1${NC}"
}

print_message "Stopping Docker containers..."
if docker-compose down; then
    print_message "Docker containers have been stopped and removed."
else
    print_error "Failed to stop Docker containers. Please check the error messages above."
    exit 1
fi
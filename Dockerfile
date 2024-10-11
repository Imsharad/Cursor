# Use an official Node runtime as the base image
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the frontend
RUN npm run build

# Final stage
FROM python:3.11-slim

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/public ./public
COPY --from=build /app/content ./content
COPY server.py requirements.txt ./

RUN pip install --upgrade pip && pip install -r requirements.txt
RUN chmod -R 755 ./content

EXPOSE 8000-8100

CMD ["python3", "server.py"]
# course-hub-gen-ai

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/Imsharad/course-hub-gen-ai)

## Quick Start

- **Development**: Run `./start.sh` to activate the environment, install dependencies, and start both backend and frontend.
- **Production**: Deploy on Railway using the `railway.toml` configuration. Railway will build the frontend and start the application.
- **Local Testing**: Build the frontend with `npm run build`, then start the server with `npm run start` to test the production build locally.

## Quick Start

- **Development**: Run `./start.sh` to activate the environment, install dependencies, and start both backend and frontend.
- **Production**: Deploy on Railway using the `railway.toml` configuration. Railway will build the frontend and start the application.
- **Local Testing**: Build the frontend with `npm run build`, then start the server with `npm run start` to test the production build locally.

## Development

To run the project in development mode:

1. Start the development environment:
   ```
   ./start.sh
   ```
   This script activates the virtual environment, installs dependencies, starts the FastAPI backend, and launches the Vite development server.

2. Alternatively, you can start the backend and frontend separately:
   ```
   # Terminal 1 (Backend)
   npm run server

   # Terminal 2 (Frontend)
   npm run dev
   ```

## Production

For production deployment (e.g., on Railway):

1. Ensure your code is committed and pushed to your Git repository.

2. Connect your repository to Railway (if not already done).

3. Railway will automatically detect the `railway.toml` file and use it for deployment configuration.

4. To manually trigger a deployment, you can use the Railway CLI:
   ```
   railway up
   ```

5. Railway will execute the following steps based on your configuration:
   - Build the frontend: `npm run build`
   - Start the application: `npm run start`

Remember to set up your environment variables in the Railway dashboard, especially `VITE_API_URL` for the frontend service.

## Local Production Testing

To test the production build locally:

1. Build the frontend:
   ```
   npm run build
   ```

2. Start the server (this will run both backend and serve the frontend):
   ```
   npm run start
   ```

This will start the FastAPI backend and serve the built frontend files.

## Deploying to Railway

To deploy this application to Railway:

1. Sign up for a Railway account at https://railway.app/
2. Install the Railway CLI: `npm i -g @railway/cli`
3. Login to Railway:
   ```
   railway login
   ```
4. Initialize Railway in your project (if not already done):
   ```
   railway init
   ```
5. Link your project (if it already exists on Railway):
   ```
   railway link
   ```
6. Set environment variables:
   ```
   railway variables set NODE_ENV=production
   railway variables set ALLOWED_ORIGINS=https://geometrik-production.up.railway.app
   ```
7. Deploy your application:
   ```
   railway up
   ```
8. Generate a domain for your service:
   ```
   railway domain
   ```
   This will create a URL for your application. In this case:
   https://geometrik-production.up.railway.app

9. View your application logs:
   ```
   railway logs
   ```
10. Open your project dashboard:
    ```
    railway open
    ```

For automatic deployments, connect your GitHub repository in the Railway dashboard.

## Useful Railway Commands

- List all projects: `railway list`
- Show project status: `railway status`
- Change environment: `railway environment`
- Run a local command with Railway variables: `railway run <command>`
- Open a shell with Railway variables: `railway shell`
- View current variables: `railway variables`
- Set a new variable: `railway variables set KEY=VALUE`

# course-hub-gen-ai

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/Imsharad/course-hub-gen-ai)

<<<<<<< HEAD
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
=======


```cdk init app --language typescript```

# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
>>>>>>> 49e9bdb75d0294d1fd7c4a251cfa45a5c074f6cd

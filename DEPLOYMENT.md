# Railway Deployment Guide

## Quick Deploy to Railway

### Step 1: Deploy Backend

1. **Navigate to server directory**
   ```bash
   cd server
   ```

2. **Login to Railway**
   ```bash
   railway login
   ```

3. **Initialize Railway project**
   ```bash
   railway init
   ```

4. **Deploy to Railway**
   ```bash
   railway up
   ```

### Step 2: Configure Environment Variables

1. Go to your Railway project dashboard
2. Navigate to the "Variables" tab
3. Add the following environment variable:
   - **Name**: `MONGODB_URI`
   - **Value**: Your MongoDB connection string
   - **Example**: `mongodb+srv://username:password@cluster.mongodb.net/button-game`

### Step 3: Get Backend URL

```bash
railway status
```

Copy the URL (e.g., `https://your-app.railway.app`)

### Step 4: Deploy Frontend

1. **Navigate to client directory**
   ```bash
   cd ../client
   ```

2. **Create environment file**
   ```bash
   echo "REACT_APP_API_URL=https://your-backend-url.railway.app" > .env
   ```
   (Replace with your actual backend URL)

3. **Build the frontend**
   ```bash
   npm run build
   ```

4. **Deploy to static hosting**
   - Upload the `build` folder to Netlify, Vercel, or any static hosting service
   - Or deploy to Railway as a separate service

## Troubleshooting

### Common Issues

1. **Build fails**: Make sure you're in the `server` directory when running Railway commands
2. **MongoDB connection error**: Check your `MONGODB_URI` environment variable
3. **CORS errors**: The backend is configured to allow all origins for development

### Environment Variables

- `MONGODB_URI`: Your MongoDB connection string
- `PORT`: Railway will set this automatically

### Health Check

The app includes a health check endpoint at `/api/score` that Railway will use to verify the deployment. 
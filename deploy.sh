#!/bin/bash

echo "🚀 Deploying Button Click Game to Railway..."

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "❌ Railway CLI not found. Installing..."
    npm install -g @railway/cli
fi

# Deploy backend
echo "📦 Deploying backend..."
cd server
railway up

# Get the backend URL
BACKEND_URL=$(railway status --json | jq -r '.url')
echo "✅ Backend deployed at: $BACKEND_URL"

# Update frontend environment
cd ../client
echo "REACT_APP_API_URL=$BACKEND_URL" > .env

# Build frontend
echo "🔨 Building frontend..."
npm run build

echo "✅ Deployment complete!"
echo "🌐 Backend URL: $BACKEND_URL"
echo "📱 Frontend built in client/build/" 
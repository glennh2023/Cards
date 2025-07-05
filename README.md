# Button Click Game

A simple MERN stack application where users click a button to gain points. Built with React frontend and Express/Node.js backend with MongoDB.

## Features

- Click button to gain points
- Real-time score tracking
- Persistent data storage with MongoDB
- Modern, responsive UI
- Railway deployment ready

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Railway

## Local Development

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TestButtonGame
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Variables**
   
   Create a `.env` file in the server directory:
   ```
   MONGODB_URI=mongodb://localhost:27017/button-game
   PORT=5000
   ```

5. **Run the Application**
   
   In the server directory:
   ```bash
   npm run dev
   ```
   
   In the client directory (new terminal):
   ```bash
   npm start
   ```

   The app will be available at:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

## Railway Deployment

### Prerequisites

- Railway account
- MongoDB Atlas cluster (or Railway MongoDB plugin)

### Deployment Steps

1. **Deploy Backend to Railway**
   ```bash
   cd server
   railway login
   railway init
   railway up
   ```

2. **Set Environment Variables in Railway**
   - Go to your Railway project dashboard
   - Add environment variable: `MONGODB_URI` (your MongoDB connection string)
   - Example: `mongodb+srv://username:password@cluster.mongodb.net/button-game`

3. **Get Backend URL**
   ```bash
   railway status
   ```
   Copy the URL (e.g., `https://your-app.railway.app`)

4. **Update Frontend for Production**
   ```bash
   cd ../client
   ```
   
   Create a `.env` file in the client directory:
   ```
   REACT_APP_API_URL=https://your-backend-url.railway.app
   ```

5. **Deploy Frontend**
   - Build the frontend: `npm run build`
   - Deploy the `build` folder to any static hosting service (Netlify, Vercel, etc.)
   - Or deploy to Railway as a separate service

## API Endpoints

- `GET /api/score` - Get current score
- `POST /api/score` - Increment score by 1

## Project Structure

```
TestButtonGame/
├── client/                 # React frontend
│   ├── src/
│   │   ├── App.js         # Main game component
│   │   └── App.css        # Styling
│   └── package.json
├── server/                 # Express backend
│   ├── server.js          # Main server file
│   ├── railway.json       # Railway config
│   ├── Procfile          # Railway start command
│   └── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT 
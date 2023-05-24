import express from 'express'
import cors from 'cors'
import corsOptions from './config/corsOptions.js';
import credentials from './middleware/credentials.js';
import path from 'path'
import { fileURLToPath } from 'url';
import db from './config/db.js'
import userRoutes from './routes/users.js'
import registerRoutes from './routes/signup.js'
import authRoutes from './routes/auth.js'
import favoriteRoutes from './routes/favorite.js'
import watchlistRoutes from './routes/watchlist.js'
import dotenv from 'dotenv';

dotenv.config()

const app = express()
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json())
app.use('/users', userRoutes)
app.use('/signup', registerRoutes)
app.use('/auth', authRoutes)
app.use('/favs', favoriteRoutes)
app.use('/watchlist', watchlistRoutes)

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

try {
    db.authenticate()
    console.log("Connected to DB")
} catch (error) {
    console.error("Error connecting to DB: ", error)
}

app.listen(8000, () => {
    console.log("Server UP running in http://localhost:8000/")
})

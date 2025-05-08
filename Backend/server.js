import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './Config/db.js';

dotenv.config();

const app = express();
app.use(express.json());

// Connect to the database
connectDB();

app.get('/', (req, res) => {
  res.send('API is running');
});

// Set the port, defaulting to 5000 if the PORT environment variable is not set
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

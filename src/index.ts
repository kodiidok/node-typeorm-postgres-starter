import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Define a route handler for the root path
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is a simple Express server!');
});

// Define the port number (use process.env.PORT or default to 3000)
const PORT: number = parseInt(process.env.PORT!) || 3000;
const HOST: string = process.env.HOST || 'localhost';

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`);
});

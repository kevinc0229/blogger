import express from 'express';
import postRoutes from './routes/postRoutes';

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use('/api', postRoutes); 

export default app;
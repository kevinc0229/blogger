import app from './app';
import connectMongo from './utils/db';

const PORT = process.env.APP_PORT || 5000;

connectMongo();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
import express from 'express';
import cors from 'cors';
import { authRouter } from './routes/auth.js';
import { errorHandler } from './middleware/error.middleware.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter);

// Error handling middleware should be last
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

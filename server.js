import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import connectDB from './config/db.js';
import projectRoutes from './routes/projectRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import certificationRoutes from './routes/certificationRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';

import adminRoutes from './routes/adminRoutes.js';


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/certifications', certificationRoutes);
app.use('/api/testimonials', testimonialRoutes);

app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('MERN Portfolio API running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

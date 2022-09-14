import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';

const app = express();
app.use("/posts", postRoutes);

// middlewares
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Routes

// Database connection
const CONNECTION_URL = 'mongodb+srv://Potterhead:Potterhead123@cluster0.m9siizk.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL).then(() => {
  app.listen(PORT, () => {
    console.log("Server running...");
  })
}).catch((error) => {
  console.log(error.message);
})
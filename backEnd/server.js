import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import colors from 'colors';
import userRoutes from "./routes/userRoutes.js"
import postRoutes from "./routes/postRoutes.js"
import {notFound, errorHandler } from './middleware/errorMiddlerware.js'
import cors from "cors"





dotenv.config();

connectDb();

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
	res.send('server is running');
});

app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)
app.use(cors())


const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`app running in  ${process.env.NODE_ENV} mode  on PORT ${PORT}`.yellow.bold)
);

import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import colors from 'colors';

dotenv.config();

connectDb();

const app = express();

app.get('/', (req, res) => {
	res.send('server is running');
});


const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`app running in  ${process.env.NODE_ENV} mode  on PORT ${PORT}`.yellow.bold)
);

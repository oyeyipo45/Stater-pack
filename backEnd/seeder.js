import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js'
import User from './models/userModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
	try {
		await User.deleteMany();

		const createdUser = await User.insertMany(users);

		const adminUser = createdUser[0]._id;

		console.log('data inported'.green.inverse)
		process.exit(0);
	} catch (error) {
		console.error(`${error.message}`.red.inverse);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await User.deleteMany();
		console.log('data destroyed'.red.inverse);
		process.exit(0);
	} catch (error) {
		console.error(`${error.message}`.red.inverse);
		process.exit(1);
	}
};



if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}

import express from 'express';
import {
	authUser,
	getUserProfile,
	getUsers,
	registerUser,
	updateUserProfile,
} from '../controllers/userConttroller.js';
const router = express.Router();
import { protect, admin } from './../middleware/authMiddleware.js';


router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser);
router
	.route('/profile')
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile);

export default router;

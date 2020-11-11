import express from 'express';
import {
	authUser,
	getUserProfile,
	registerUser,
	updateUserProfile,
} from '../controllers/userConttroller.js';
const router = express.Router();
import { protect } from './../middleware/authMiddleware.js';

// @desc Fetch All Users
// @route GET /api/users
// @access Public
router.route('/').post(registerUser);
router.post('/login', authUser);
router
	.route('/profile')
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile);

export default router;

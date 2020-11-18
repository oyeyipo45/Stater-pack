import express from 'express';
import {
	authUser,
	deleteUsers,
	getUserProfile,
	getUsers,
	registerUser,
	updateUserProfile,
	updateUser,
	getUserById
} from '../controllers/userConttroller.js';
const router = express.Router();
import { protect, admin } from './../middleware/authMiddleware.js';


router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser);
router
	.route('/profile')
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile)

router.route('/:id')
	.delete(protect, admin, deleteUsers)
	.get(protect, admin, getUserById)
	.put(protect, admin, updateUser)
	

export default router;

import express from 'express';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
const router = express.Router();




// @desc Fetch All Users
// @route GET /api/users
// @access Public
router.get(
	'/',
	asyncHandler(async (req, res) => {
        const users = await User.find({})
        res.json(users);
        
	})
);



// @desc Fetch Single Product
// @route GET /api/products/:id
// @access Public

// router.get(
// 	'/:id',
// 	asyncHandler(async (req, res) => {
// 		const product = await Product.findById(req.params.id);
// 		if (product) {
// 			res.json(products);
// 		} else {
// 			res.status(404).json({ message: 'Product not found' });
// 		}
// 	})
// );

export default router;

import express from 'express';
import Post from '../models/postModel.js';
import asyncHandler from 'express-async-handler';
import {getPosts} from '../controllers/postsController.js'
const router = express.Router();




// @desc Fetch All Posts
// @route GET /api/posts
// @access Public
router.route('/').get(getPosts);



export default router;

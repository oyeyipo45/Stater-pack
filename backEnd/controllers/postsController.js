import Post from '../models/postModel.js';
import asyncHandler from 'express-async-handler';




// @desc Fetch All Posts
// @route GET /api/posts
// @access Public

const getPosts = asyncHandler (async( req, res) => {
    const posts = await Post.find({})
    res.json(posts);
})




export {getPosts}
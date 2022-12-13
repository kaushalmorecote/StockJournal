import express from 'express';
import bodyParser from 'body-parser';
import auth from "../middleware/auth.js";

import { getPosts,  createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();
router.use(bodyParser.json({limit: "30mb", extended: true }));
router.use(bodyParser.urlencoded({ limit: "30mb",extended: true }));
// router.get('/search', getPostsBySearch)
router.get('/', getPosts);
router.post('/',auth,  createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;
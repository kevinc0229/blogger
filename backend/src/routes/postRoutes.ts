import express from 'express';
import { getAllPosts, 
         getOnePost, 
         createPost,
         updatePost,
         deletePost } from '../controllers/postController';

const router = express.Router();

router.get('/posts', getAllPosts);
router.get('/posts/:id', getOnePost);
router.post('/posts', createPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

export default router;
import { Request, Response } from 'express';
import Post from '../models/post';

// Get all posts (do not need content)
export const getAllPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Post.find().select('title updatedAt');
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching posts', err });
    }
};

// Get specific post
export const getOnePost = async (req: Request, res: Response) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching post', err });
    }
};

// Create new post
export const createPost = async (req: Request, res: Response) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ message: 'Error creating post', err });
    }
};

// Update existing post
export const updatePost = async (req: Request, res: Response) => {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true });
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ message: 'Error updating post', err });
    }
};

// Delete a post
export const deletePost = async (req: Request, res: Response) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ message: 'Error deleting post', err });
    }
};
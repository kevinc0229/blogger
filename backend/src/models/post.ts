import { Schema, model, Document } from 'mongoose';

// Define the content interface
interface Content {
    type: 'text' | 'image';
    value: string; 
};

// Define the post interface
interface postInterface extends Document {
    title: string;
    content: Content[];
    tag: string;
    createdAt: Date;
    updatedAt: Date;
};

// Define the post schema
const postSchema = new Schema<postInterface>({
    title: {
        type: String,
        required: true,
    },
    content: [{
        type: {
          type: String,
          enum: ['text', 'image'],
          required: true,
        },
        value: {
          type: String,
          required: true,
        }
    }],
    tag: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

// Create and export the Post model
const Post = model<postInterface>('Post', postSchema);
export default Post;
import { Schema, model, Document } from 'mongoose';

// Define the image interface
interface imageInterface extends Document {
    name: string;
    path: string;
    createdAt: Date;
};

// Define the image schema
const imageSchema = new Schema<imageInterface>({
    name: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    }, 
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

// Create and export the Image model
const Image = model<imageInterface>('Image', imageSchema);
export default Image;
import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        videoUrl: {
            type: String,
            required: true
        },

        category: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('Video', VideoSchema)
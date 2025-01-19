
import mongoose from 'mongoose';

const projectSchema=new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        required: true,
        trim: true,
        unique: [ true, 'Project is already created' ],
    },

    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    ],
})

export const Project = mongoose.model('Project', projectSchema);
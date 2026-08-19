import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    tag: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        
    }
}, {
    timestamps: true
});

const Note = mongoose.model('Note', noteSchema);
export default Note;
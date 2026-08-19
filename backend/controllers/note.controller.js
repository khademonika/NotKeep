import Note from '../models/note.model.js';

export const createNote = async (req, res) => {
    try {
        const { tag, title, content, user } = req.body;
        const note = new Note({ tag, title, content, user });
        await note.save();
        res.status(201).json(note);
    } catch (error) {
        console.error('Error creating note:', error);
        res.status(500).json({message: 'Internal server error'});
    }
};

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        console.error('Error fetching notes:', error);
        res.status(500).json({message: 'Internal server error'});
    } 
};

export const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({message: 'Note not found'});
        }
        res.status(200).json(note);
    } catch (error) {
        console.error('Error fetching note:', error);
        res.status(500).json({message: 'Internal server error'});
    }
};

export const updateNote = async (req, res) => {
    try {
        const { tag, title, content } = req.body;
        const note = await Note.findByIdAndUpdate(req.params.id, { tag, title, content }, { new: true });
        if (!note) {
            return res.status(404).json({message: 'Note not found'});
        }
        res.status(200).json(note);
    } catch (error) {
        console.error('Error updating note:', error);
        res.status(500).json({message: 'Internal server error'});
    }       
};

export const deleteNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if (!note) {
            return res.status(404).json({message: 'Note not found'});
        }
        res.status(200).json({message: 'Note deleted successfully'});
    }
    catch (error) {
        console.error('Error deleting note:', error);
        res.status(500).json({message: 'Internal server error'});
    }   
};


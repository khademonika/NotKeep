import express from 'express'
const router = express.Router();

import { createNote, getNotes, getNoteById, updateNote, deleteNote } from '../controllers/note.controller.js';

router.post('/createNote', createNote);
router.get('/getNotes', getNotes);
router.get('/getNoteById/:id', getNoteById);
router.put('/updateNote/:id', updateNote);
router.delete('/deleteNote/:id', deleteNote);

export default router;
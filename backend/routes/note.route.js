import express from 'express'
const router = express.Router();

import { createNote, getNotes, getNoteById, updateNote, deleteNote } from '../controllers/note.controller.js';

router.post('/', createNote);
router.get('/', getNotes);
router.get('/:id', getNoteById);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;
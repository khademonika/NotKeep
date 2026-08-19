import express from 'express'
const router = express.Router();

import { createNote, getNotes, getNoteById, updateNote, deleteNote } from '../controllers/note.controller.js';

router.post('/createNote',authMiddleware, createNote);
router.get('/getNotes', authMiddleware, getNotes);
router.get('/workspace/:workspaceId', authMiddleware, getNotes);
router.get('/getNoteById/:noteId', authMiddleware, getNoteById);
router.put('/updateNote/:noteId', authMiddleware, updateNote);
router.delete('/deleteNote/:noteId', authMiddleware, deleteNote);
router.patch('/:noteId/favorite', authMiddleware, toggleFavorite);

export default router;
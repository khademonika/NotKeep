import express from 'express'
const router = express.Router();

import { createWorkspace, getWorkspaces, getWorkspaceById, updateWorkspace, deleteWorkspace } from '../controllers/workspace.controller.js';

router.post('/createWorkspace', createWorkspace);
router.get('/workspaces', getWorkspaces);
router.get('/workspaces/:id', getWorkspaceById);
router.put('/workspaces/:id', updateWorkspace);
router.delete('/workspaces/:id', deleteWorkspace);
export default router;
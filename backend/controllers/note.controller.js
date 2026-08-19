// controllers/note.controller.js

import Note from "../models/Note.js";
import Workspace from "../models/Workspace.js";
import User from "../models/User.js";

export const createNote = async (req, res) => {
  try {
    const { title, icon, workspaceId, parentNote } = req.body;

    // Check required field
    if (!workspaceId) {
      return res.status(400).json({
        success: false,
        message: "Workspace ID is required",
      });
    }

    // Create note
    const note = await Note.create({
      title: title || "Untitled",
      icon: icon || "📝",
      workspace: workspaceId,
      parentNote: parentNote || null,
      createdBy: req.user._id,
    });

    return res.status(201).json({
      success: true,
      message: "Note created successfully",
      note,
    });

  } catch (error) {
    console.error("Create Note Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create note",
      error: error.message,
    });
  }
};


export const getNotes = async (req, res) => {
  try {
    const { workspaceId } = req.params;

    if (!workspaceId) {
      return res.status(400).json({
        success: false,
        message: "Workspace ID is required",
      });
    }

    const notes = await Note.find({
      workspace: workspaceId,
      createdBy: req.user._id,
      isDeleted: false,
    })
      .sort({ createdAt: -1 })
      .select("title icon parentNote createdBy createdAt updatedAt");

    return res.status(200).json({
      success: true,
      count: notes.length,
      notes,
    });
  } catch (error) {
    console.error("Get Notes Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch notes",
      error: error.message,
    });
  }
}

export const getNoteById = async (req, res) => {
  try {
    const { noteId } = req.params;

    if (!noteId) {
      return res.status(400).json({
        success: false,
        message: "Note ID is required",
      });
    }

    const note = await Note.findOne({
      _id: noteId,
      createdBy: req.user._id,
      isDeleted: false,
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    return res.status(200).json({
      success: true,
      note,
    });

  } catch (error) {
    console.error("Get Note By ID Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch note",
      error: error.message,
    });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { noteId } = req.params;
    const { title, icon, content, parentNote } = req.body;

    if (!noteId) {
      return res.status(400).json({
        success: false,
        message: "Note ID is required",
      });
    }

    const note = await Note.findOne({
      _id: noteId,
      createdBy: req.user._id,
      isDeleted: false,
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    // Update only the fields that are provided
    if (title !== undefined) note.title = title;
    if (icon !== undefined) note.icon = icon;
    if (content !== undefined) note.content = content;
    if (parentNote !== undefined) note.parentNote = parentNote;

    const updatedNote = await note.save();

    return res.status(200).json({
      success: true,
      message: "Note updated successfully",
      note: updatedNote,
    });

  } catch (error) {
    console.error("Update Note Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update note",
      error: error.message,
    });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { noteId } = req.params;

    if (!noteId) {
      return res.status(400).json({
        success: false,
        message: "Note ID is required",
      });
    }

    const note = await Note.findOne({
      _id: noteId,
      createdBy: req.user._id,
      isDeleted: false,
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    // Soft delete
    note.isDeleted = true;
    note.deletedAt = new Date();

    await note.save();

    return res.status(200).json({
      success: true,
      message: "Note moved to trash",
    });

  } catch (error) {
    console.error("Delete Note Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete note",
      error: error.message,
    });
  }
};

export const toggleFavorite = async (req, res) => {
  try {
    const { noteId } = req.params;

    const note = await Note.findOne({
      _id: noteId,
      createdBy: req.user._id,
      isDeleted: false,
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    note.isFavorite = !note.isFavorite;

    await note.save();

    return res.status(200).json({
      success: true,
      message: "Favorite updated",
      note,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update favorite",
    });
  }
};
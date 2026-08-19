import mongoose from "mongoose";
import Note from "./note.model.js";
import User from "./user.model.js";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      default: "Untitled",
    },

    icon: {
      type: String,
      default: "📝",
    },

    workspace: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace",
      required: true,
    },

    parentNote: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Note",
      default: null,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    content: {
      type: mongoose.Schema.Types.Mixed,
      default: [],
    },

    isArchived: {
      type: Boolean,
      default: false,
    },

    isFavorite: {
      type: Boolean,
      default: false,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },

    tags: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Note", noteSchema);
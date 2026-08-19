import api from "./api";

export const getWorkspaceNotes = async (workspaceId) => {
  const response = await api.get(`/notes/workspace/${workspaceId}`);
  return response.data;
};

export const getNoteById = async (noteId) => {
  const response = await api.get(`/notes/${noteId}`);
  return response.data;
};

export const createNote = async (workspaceId, data = {}) => {
  const response = await api.post("/notes", {
    workspaceId,
    title: data.title || "Untitled",
    icon: data.icon || "📝",
    parentNote: data.parentNote || null,
  });

  return response.data;
};

export const updateNote = async (noteId, data) => {
  const response = await api.put(`/notes/${noteId}`, data);
  return response.data;
};

export const deleteNote = async (noteId) => {
  const response = await api.delete(`/notes/${noteId}`);
  return response.data;
};
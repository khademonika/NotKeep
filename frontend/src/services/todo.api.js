import api from "../api/axios.js"


export const getTodos = async()=>{
    const res = await api.get("/todo")
    return res.data
}

export const createTodo = async (data)=>{
    const res = await api.post("/todo/create-todo",data)
    return res.data
}

export const deleteTodo = async(id)=>{
    const res = await api.post(`/todo/delete-todo/:${id}`)
    return res.data
}
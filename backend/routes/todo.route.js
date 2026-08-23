import express from "express"
import { Router } from "express"
import { createTodoController, deleteTodoController, getTodosController } from "../controllers/todo.controller.js"

const router = Router()

router.get("/", getTodosController);

router.post("/create-todo", createTodoController)

router.post("/delete-todo/:id", deleteTodoController)


export default router
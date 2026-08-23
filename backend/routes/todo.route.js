import express from "express"
import { Router } from "express"
import { createTodoController, deleteTodoController } from "../controllers/todo.controller.js"

const router = Router()

router.post("/create-todo", createTodoController)
router.post("/delete-todo/:id", deleteTodoController)


export default router
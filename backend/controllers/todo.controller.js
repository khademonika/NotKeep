import ToDO from "../models/toDo.model.js"


export const getTodosController = async (req, res) => {
  try {
    const todos = await ToDO.find().sort({ createdAt: -1 });

    res.json({
      message: "Todos fetched successfully",
      todos,
    });
  } catch (error) {
    console.log("Error in getTodosController:", error.message);

    res.status(500).json({
      message: "Failed to fetch todos"
    });
  }
};

export const createTodoController = async (req,res)=>{
    try {
        const {task, date, completed} = req.body
        const todo = await ToDO.create({
            task:task, date:date, completed:completed,user: req.user.id,
        })
        res.json({message:"Todo created successfully", todo})
    } catch (error) {
        console.log("Error in  createTodoController" , error.message)
        res.json({message:"Error in  createTodoController",error:error.message})
    }
}

export const deleteTodoController = async (req,res)=>{
    try {
        const {id} = req.body
        const todo = await ToDO.findByIdAndDelete({id})
         if (!deletedTodo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }
    res.status(200).json({
      message: "Todo deleted successfully",
      todo: deletedTodo,
    });

    } catch (error) {
        console.log("Error in  deleteTodoController" , error.message)
        res.json({message:"Error in  deleteTodoController",error:error.message})
    }
}
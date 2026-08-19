
import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import userRoutes from "./routes/user.route.js";
import noteRoutes from "./routes/note.route.js";
import createDB from "./db/createDB.js";
dotenv.config();
const app = express();
app.use(cors())
createDB()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', userRoutes);
app.use('/api/notes', noteRoutes);

app.get("/api/test",(req,res)=>{
res.json({
  message:"Backend Connected"
})
})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
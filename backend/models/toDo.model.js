import mongoose from "mongoose"

const todoSchema = mongoose.Schema({
    task:{
     type:String,
     required:true,
     trim:true
    },
    date: {
    type: Date,
    default: Date.now,
  },
    completed:{
        type:Boolean,
        default:false
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        requires:true
    }
})


const ToDO = mongoose.model("ToDo", todoSchema)

export default ToDO
const Todo = require("../models/todoModel");

exports.deleteTodo=async(req,res)=>{
    try {
        const id = req.params.id;
        const todo = await Todo.deleteOne({_id:id});
        res.status(200).json({
            success:true,
            data:todo,
            message:"item get deleted",
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"error in delete Todo deleted",
        })
    }
}
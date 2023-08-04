const Todo = require("../models/todoModel");

exports.updateTodo =async(req,res)=>{
    try {
        const id = req.params.id;
        const {title,description}= req.body;
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()},
        )
        res.status(200).json({
            success:true,
            data:todo,
            message:"update todo data",
        })
    } catch (err) {
        res.status(500).json({
            success:false,
            error:err.message,
            message:"error",
        })
    }
}
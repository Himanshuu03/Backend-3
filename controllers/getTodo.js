const Todo = require("../models/todoModel");

exports.getTodo =async(req,res)=>{
    try {
        const response  = await Todo.find({});
        res.status(200).json({
            success:true,
            data:response,
            message:"Entire todo data",
        })
    } catch (err) {
        res.status(500).json({
            success:false,
            error:err.message,
            message:"error",
        })
    }
}

exports.getTodoById =async(req,res)=>{
    try{
        const id =  req.params.id;
        const todo = await Todo.findById({_id: id});
        if(!todo){
            return(
                res.status(404).json({
                    success:false,
                    message:"id not found"
                })
            )
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:"Entire todo data",
        })
    }catch(err){
        res.status(500).json({
            success:false,
            error:err.message,
            message:"error",
        })
    }
}
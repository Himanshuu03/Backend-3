const Todo = require("../models/todoModel");

const getTodo =async(req,res)=>{
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

module.exports = getTodo;
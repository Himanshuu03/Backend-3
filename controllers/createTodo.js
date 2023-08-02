const Todo = require("../models/todoModel");

const createTodo = async(req,res)=>{
    try {
        const {title,description} = req.body;
        const result = await Todo.create({title,description});
        res.send("added Succesfully");
    } catch (error) {
        res.send("added Un-Succesfully");
    }
}

module.exports = createTodo;
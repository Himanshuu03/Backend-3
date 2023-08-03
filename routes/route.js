const createTodo = require("../controllers/createTodo");
const {getTodo,getTodoById} = require("../controllers/getTodo");

const express = require("express");
const router = express.Router();

router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodo/:id",getTodoById);

module.exports = router;

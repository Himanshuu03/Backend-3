const createTodo = require("../controllers/createTodo");

const express = require("express");
const router = express.Router();

router.post("/createTodo",createTodo);

module.exports = router;
const createTodo = require("../controllers/createTodo");
const getTodo = require("../controllers/getTodo");

const express = require("express");
const router = express.Router();

router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);

module.exports = router;

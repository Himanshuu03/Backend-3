const express = require("express");

const app = express();

app.use(express.json());

const createTodo  = require("./routes/route");

app.use("/api/v1",createTodo);

require("dotenv").config();

app.listen(process.env.PORT,()=>{
    console.log("server started");
})

const dbConnect = require("./config/dataBase");
dbConnect();

app.get("/",(request,response)=>{
    response.send(`<h1>This is Homepage</h1>`)
})
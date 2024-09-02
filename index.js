const express = require("express");
const fs = require('fs')

const app = express();
let todos =[]
todos = JSON.parse(fs.readFileSync("./todos.json",'utf-8'));
app.use(express.json());

app.get("/notes",function(req,res){
    res.json(todos);
})

app.post("/notes",function(req,res){
    todos.push(req.body.body)
    fs.writeFileSync("./todos.json",JSON.stringify(todos));
    res.send(todos)
})

app.delete("/notes/:id",function(req,res){

    todos.splice(req.params.id-1,1);
    fs.writeFileSync("./todos.json",JSON.stringify(todos));
    res.send(todos)
})

app.listen(3000);
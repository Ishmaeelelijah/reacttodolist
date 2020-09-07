const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())

const db = "mongodb://localhost:27017/todolist"
mongoose.connect(db, ({useNewUrlParser:true}))
.then(console.log("Connect to MongoDB"))
.catch(err => console.log(err))


const todoSchema = new mongoose.Schema({
    title:String,
    complete:{
        type:Boolean,
        default:false
    }
})

const Todo = mongoose.model('todo', todoSchema)

app.get("/todos", (req,res)=>{
    Todo.find().then(todo => res.json(todo ))
})

app.post("/todos", (req, res)=>{
    const newTodo = new Todo({
        title:req.body.title
    })
    newTodo.save().then(todo=>res.json(todo ))
})

app.delete("/todos/:id", (req,res)=>{
    Todo.findByIdAndDelete(req.params.id)
    .then(()=> res.json({remove:true}))
})

app.listen(5000, ()=>{
    console.log("Sever running at port 5000")
})
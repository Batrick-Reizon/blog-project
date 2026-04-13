const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()

app.use(express.json())
app.use(cors())
dotenv.config()

const MONGO = process.env.MONGO_URL
const PORT = process.env.PORT 

mongoose.connect(MONGO).then(() => {
    console.log("Database connected....")
}).catch(() => {
    console.log("Failed to connect database")
})

const blogdb = mongoose.model("blogdb", {
    title: String,
    date: String,
    content: String,
    likes: Number
}, "blogdb")

app.get("/", (req, res) => {
    res.status(200).send("Backend Connected.....")
})

app.get("/blogs", async (req, res) => {
    try {
        const blogs = await blogdb.find()
        console.log(blogs)
        res.status(200).send(blogs)
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
})

app.post("/addblog", async (req, res) => {
    try {
        const blog = new blogdb({
            title: req.body.title,
            date: req.body.date,
            content: req.body.content,
            likes: req.body.likes
        })
        const saveblog = await blog.save()
        console.log("Blog added", saveblog)
        res.status(200).send(saveblog)
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
})

app.patch("/likeblog/:id", async (req, res) => {
    try {
        const blog = await blogdb.findById(req.params.id)
        if(!blog) {
            return(
                console.log("Blog not found")
            )
        }
        const updateblog = await blogdb.findByIdAndUpdate(req.params.id, {$inc: {likes: 1}}, {new: true})
        console.log("Blog updated", updateblog)
        res.status(200).send(updateblog)
    } catch(error) {
        res.status(404).send({error: error.message})
    }
})

app.delete("/deleteblog/:id", async (req, res) => {
    try {
        const deleteblog = await blogdb.findByIdAndDelete(req.params.id)
        if(!deleteblog) {
            return(
                console.log("Blog not found")
            )
        }
        console.log("Deleted blog", deleteblog)
        res.status(200).send(deleteblog)
    } catch(error) {
        res.status(404).send({error: error.message})
    }
})

app.listen(PORT, () => {
    console.log(`Server started at port number ${PORT}`)
})
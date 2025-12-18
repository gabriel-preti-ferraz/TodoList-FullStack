const express = require('express')
const app = express()
const PORT = 8080
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))


app.post("/tasks/add", async (req, res) => {
    const { title, description } = req.body
    //console.log(req)

    if (!title) {res.status(418).send({ message: "Title is required" })}
    if (!description) {res.status(418).send({ message: "Description is required" })}

    try {
        const database = require('./db')
        const Task = require ('./model')

        await database.sync()
        const nTask = await Task.create({ title, description })

        return res.send({
            task: {
                id: nTask.id,
                title: nTask.title,
                description: nTask.description
            }
        })
    } catch (error) { 
        console.log(error)
        return res.status(500).send({ message: "Internal server error" })
    }
})

app.get("/tasks/list", async (req, res) => {
    try {
        const database = require('./db')
        const Task = require ('./model')

        await database.sync()
        const tasks = await Task.findAll()

        return res.send({ tasks })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: "Internal server error" })
    }
})

app.delete("/tasks/delete/:id", async (req, res) => {
    const { id } = req.params

    try {
        const database = require('./db')
        const Task = require('./model')

        await database.sync()
        const task = await Task.findByPk(id)

        if (!task) {
            return res.status(404).send({ message: "Task not found."})
        } else if (task) {
            await task.destroy()
            return res.send({message: "Task deleted successfully."})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: "Internal server error" })
    }
})
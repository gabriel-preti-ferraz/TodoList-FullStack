const express = require('express')
const app = express()
const PORT = 8080

app.use(express.json())
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))


app.post("/tasks/add", async (req, res) => {
    const { title, description } = req.body

    if (!title) {
        res.status(418).send({ message: "Title is required" })
    }
    if (!description) {
        res.status(418).send({ message: "Description is required" })
    }

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
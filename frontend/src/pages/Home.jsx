import { useEffect, useState } from 'react'
import '../css/Home.css'
import { createTask, listTask } from '../services/api.js'
import TaskItem from '../components/TaskItem.jsx'

function Home() {
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [tasks, setTasks] = useState([])

    function addTask(e) {
        //e.preventDefault() // prevent page reload on form submit
        if (!taskTitle.trim() || !taskDescription.trim()) return // verify if inputs are not empty

        createTask(taskTitle, taskDescription)
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.error('Error creating task:', error)
            })
    }

    useEffect(() => {
        listTask()
            .then((data) => {setTasks(data.tasks)})
            .catch((error) => {console.error('Error fetching tasks:', error)})
    }, [])

    return (
        <div className="home">
            <div className='form-group'>
                <h1>Task List</h1>
                <form className='add-form' onSubmit={addTask}>
                    <input type="text" className='task-title' placeholder='Set the task title.' 
                    value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}
                    />
                    <input type="text" className='task-description' placeholder='Set the task description.'
                    value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
                        <button type='submit' className='add-button'>Add Task</button>
                    </form>
            </div>
            <div className='task-grid'>
                {tasks.map((task) => (<TaskItem key={task.id} task={task} />))}
            </div>
        </div>
    )
}

export default Home
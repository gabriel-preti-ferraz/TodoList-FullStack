import { useState } from 'react'
import '../css/Home.css'

function Home() {
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')

    function addTask(e) {
        e.preventDefault()

        if (!taskTitle.trim() || !taskDescription.trim()) return

    }

    return (
        <div className="home">
            <h1>Task List</h1>
            <form className='add-form' onSubmit={addTask}>
                <input type="text" className='task-title' placeholder='Set the task title.' 
                value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}
                />
                <input type="text" className='task-description' placeholder='Set the task description.'
                value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
                    <button type='submit'>Add Task</button>
            </form>
            <div className='task-grid'></div>
        </div>
    )
}

export default Home
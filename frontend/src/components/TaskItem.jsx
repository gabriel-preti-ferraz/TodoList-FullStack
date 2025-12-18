import "../css/TaskItem.css"
import { delTask } from '../services/api.js'

function TaskItem({ task }) {
    function onRemoveClick() { 
        delTask(task.id)
        
        window.location.reload()
        alert("Task removed!")
    }

    return (
        <div className="task-item">
            <h3 className="task-title">{task.title}</h3>
            <p className="task-description">{task.description}</p>
            <button className="task-remove" onClick={onRemoveClick}>❌</button>
        </div>
    )
}

export default TaskItem
import "../css/TaskItem.css"

function TaskItem({ task }) {
    function onRemoveClick() { 
        alert(`Remove task: ${task.title}`)
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